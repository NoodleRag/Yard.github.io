/* map.js — renders GPX track on walk pages */

(function () {
  const gpxUrl = window.TRAIL_GPX;
  const mapEl  = document.getElementById('trail-map');
  if (!gpxUrl || !mapEl || typeof L === 'undefined') return;

  // Init map
  const map = L.map('trail-map', { zoomControl: true, scrollWheelZoom: false });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    maxZoom: 17
  }).addTo(map);

  // Fetch & parse GPX
  fetch(gpxUrl)
    .then(r => r.text())
    .then(xml => {
      const parser  = new DOMParser();
      const doc     = parser.parseFromString(xml, 'application/xml');
      const pts     = Array.from(doc.querySelectorAll('trkpt'));

      if (!pts.length) return;

      const latlngs = pts.map(p => [
        parseFloat(p.getAttribute('lat')),
        parseFloat(p.getAttribute('lon'))
      ]);

      // Draw track
      const line = L.polyline(latlngs, {
        color: '#3d6475',
        weight: 3,
        opacity: 0.85
      }).addTo(map);

      // Start / end markers
      const dotIcon = (color) => L.divIcon({
        html: `<div style="width:10px;height:10px;background:${color};border-radius:50%;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.3)"></div>`,
        iconSize: [10, 10],
        className: ''
      });

      L.marker(latlngs[0],                  { icon: dotIcon('#5a6e5a') }).addTo(map).bindPopup('Start');
      L.marker(latlngs[latlngs.length - 1], { icon: dotIcon('#a05c3b') }).addTo(map).bindPopup('End');

      map.fitBounds(line.getBounds(), { padding: [24, 24] });
    })
    .catch(err => console.warn('GPX load failed:', err));
})();
