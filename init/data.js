const sampleListings = [
   {
    title: "Palm Beach Resort",
    description: "Luxury beachside resort with coconut trees and ocean views.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "unsplash-palm-beach"
    },
    price: 4200,
    location: "Goa",
    country: "India"
  },
  {
    title: "Mountain Escape Chalet",
    description: "Cozy wooden chalet nestled in the Himalayas.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "unsplash-mountain-chalet"
    },
    price: 3800,
    location: "Manali",
    country: "India"
  },
  {
    title: "Urban Studio Apartment",
    description: "Modern studio apartment in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "unsplash-urban-studio"
    },
    price: 2500,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Forest Treehouse",
    description: "Stay amidst nature in this elevated treehouse.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "unsplash-forest-treehouse"
    },
    price: 4600,
    location: "Wayanad",
    country: "India"
  },
  {
    title: "Lakeview Cottage",
    description: "Beautiful cottage overlooking the serene lake.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
      filename: "unsplash-lakeview-cottage"
    },
    price: 4100,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Desert Camp",
    description: "Experience desert life with luxury tents and camel rides.",
    image: {
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      filename: "unsplash-desert-camp"
    },
    price: 3100,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Hilltop Villa",
    description: "A luxurious villa offering panoramic mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1590490359854-dfba19688d70",
      filename: "unsplash-hilltop-villa"
    },
    price: 5200,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Coastal Bungalow",
    description: "Modern bungalow just steps away from the sea.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154207-2c9a6c83c5f1",
      filename: "unsplash-coastal-bungalow"
    },
    price: 3700,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Countryside Farmhouse",
    description: "Peaceful farmhouse surrounded by lush greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "unsplash-farmhouse"
    },
    price: 3400,
    location: "Punjab",
    country: "India"
  },
  {
    title: "Luxury Penthouse",
    description: "Top-floor penthouse with skyline views and a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1560448075-bb485b067938",
      filename: "unsplash-luxury-penthouse"
    },
    price: 8500,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Riverside Cabin",
    description: "Rustic wooden cabin by the riverside for perfect relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "unsplash-riverside-cabin"
    },
    price: 2900,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Snow View Lodge",
    description: "Stay warm and cozy while watching the snowfall.",
    image: {
      url: "https://images.unsplash.com/photo-1508264165352-258859e62245",
      filename: "unsplash-snow-lodge"
    },
    price: 4800,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Island Paradise Hut",
    description: "Tropical beach hut surrounded by turquoise waters.",
    image: {
      url: "https://images.unsplash.com/photo-1519821172141-b5d8f6db7c90",
      filename: "unsplash-island-hut"
    },
    price: 5600,
    location: "Andaman Islands",
    country: "India"
  },
  {
    title: "City Lights Apartment",
    description: "Experience nightlife from this centrally located apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "unsplash-city-apartment"
    },
    price: 3000,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Vintage Heritage Haveli",
    description: "Royal stay in a renovated 19th-century haveli.",
    image: {
      url: "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
      filename: "unsplash-heritage-haveli"
    },
    price: 6200,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Tropical Eco Lodge",
    description: "Sustainable eco lodge surrounded by rainforest.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      filename: "unsplash-eco-lodge"
    },
    price: 3900,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Luxury Palace Stay",
    description: "Opulent royal palace experience with modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      filename: "unsplash-palace-stay"
    },
    price: 9000,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Beachside Cottage",
    description: "Perfect romantic getaway on a quiet beach.",
    image: {
      url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a",
      filename: "unsplash-beach-cottage"
    },
    price: 4400,
    location: "Varkala",
    country: "India"
  },
  {
    title: "Jungle Retreat",
    description: "Stay amidst wild nature with guided safari experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      filename: "unsplash-jungle-retreat"
    },
    price: 4700,
    location: "Jim Corbett",
    country: "India"
  },
  {
    title: "Modern Minimalist Loft",
    description: "Aesthetic loft apartment with minimalist design.",
    image: {
      url: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
      filename: "unsplash-modern-loft"
    },
    price: 3600,
    location: "Hyderabad",
    country: "India"
  }
];

module.exports = {data: sampleListings};