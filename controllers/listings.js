const Listing = require("../models/listing");
require("dotenv").config();
const fetch = require("node-fetch");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!listing) {
    req.flash("error", "The listing you requested for does not exist");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  try {
    const apiKey = process.env.MAP_TOKEN;
    const location = req.body.listing.location;

    // 🧭 1. Get coordinates from Geoapify Geocoding API
    const geoResponse = await fetch(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${apiKey}`
    );
    const geoData = await geoResponse.json();

    // 🗺 2. Extract coordinates safely
    let coordinates = [0, 0];
    if (geoData.features && geoData.features.length > 0) {
      const feature = geoData.features[0];
      coordinates = feature.geometry.coordinates; // [lng, lat]
    }

    // 🏗️ 3. Create new listing
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    // 4️⃣ Save GeoJSON geometry properly
    newListing.geometry = {
      type: "Point",
      coordinates: coordinates,
    };

    await newListing.save();
    console.log("✅ Saved Listing:", newListing);

    req.flash("success", "New Listing added successfully!");
    res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
    console.error("❌ Error creating listing:", err);
    req.flash("error", "Failed to create listing. Try again.");
    res.redirect("/listings/new");
  }
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "The listing you requested for does not exist");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");

  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing deleted");
  res.redirect("/listings");
};
