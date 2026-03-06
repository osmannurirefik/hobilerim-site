document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(map);

  // Markerları saklamak için dizi
  var markers = [];

  function createEmojiMarker(lat, lng, emoji, popupText) {
    var emojiIcon = L.divIcon({
      html: `<div style="font-size:32px; text-align:center;">${emoji}</div>`,
      className: '',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });
    var marker = L.marker([lat, lng], {icon: emojiIcon}).addTo(map).bindPopup(popupText);
    markers.push(marker);
  }

  // Markerlar
  createEmojiMarker(39.9717,32.6360, '⚽', "Eryaman Stadyumu");
  createEmojiMarker(39.8425,32.7606, '🚶', "Eymir Gölü");
  createEmojiMarker(40.2384,33.0152, '🎣', "Çubuk Barajı");

  // Tüm markerları kapsayacak şekilde zoom ve merkez ayarla
  var group = new L.featureGroup(markers);
  map.fitBounds(group.getBounds().pad(0.2)); // pad ile biraz boşluk bırak
});