const apiKey = mapToken;

const map = new maplibregl.Map({
  container: "map",
  style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`,
  center: coordinates && coordinates.length === 2 ? coordinates : [77.2090, 28.6139], // fallback to Delhi
  zoom: 9,
});

// Add zoom and rotation controls
map.addControl(new maplibregl.NavigationControl(), "top-right");

// 🧭 Add default marker
if (coordinates && coordinates.length === 2 && coordinates[0] !== 0) {
  new maplibregl.Marker({ color: "#FF5733" })
    .setLngLat(coordinates)
    .addTo(map);
}
