const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router
 .route("/")
 .get(wrapAsync(listingController.index))
 .post(
    isLoggedIn,
    upload.single("listing[image]"),              //multer process and brings image data to req.file
    validateListing,
    wrapAsync(listingController.createListing)
 );


//New route
router.get("/new",isLoggedIn,listingController.renderNewForm);

// SHOW + UPDATE + DELETE
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) // Show single listing
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),   
    validateListing,
    wrapAsync(listingController.updateListing) // Update listing
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing) // Delete listing
  );


// Edit route
router.get(
    "/:id/edit", 
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;
