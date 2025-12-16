document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize the Globe
    const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .atmosphereColor('#00f3ff')
        .atmosphereAltitude(0.2)
        (document.getElementById('globeViz'));

    // 2. Fetch Disaster Data
    fetch('/api/disasters')
        .then(res => res.json())
        .then(data => {
            console.log("Disasters Loaded:", data.length);
            updateStats(data);

            // 3. Add Data to Globe
            // RINGS (The Pulse Effect)
            globe.ringsData(data)
                .ringColor(d => d.color)
                .ringMaxRadius(d => 5)
                .ringPropagationSpeed(3)
                .ringRepeatPeriod(1000);

            // LABELS (The Text/Dots)
            globe.labelsData(data)
                .labelLat(d => d.lat)
                .labelLng(d => d.lng)
                .labelText(d => "!")
                .labelSize(1.5)
                .labelDotRadius(0.5)
                .labelColor(d => d.color)
                .onLabelHover(d => {
                    // Show Info Card on Hover
                    const card = document.getElementById('infoCard');
                    if (d) {
                        card.classList.remove('hidden');
                        document.getElementById('eventTitle').innerText = d.title;
                        document.getElementById('eventDate').innerText = d.date;
                        document.getElementById('eventType').innerText = d.category.toUpperCase();
                        document.getElementById('eventType').style.backgroundColor = d.color;
                    } else {
                        card.classList.add('hidden');
                    }
                });
        });

    // Auto-Rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
});

function updateStats(data) {
    let fires = data.filter(d => d.category.includes("Wildfires")).length;
    let volcanoes = data.filter(d => d.category.includes("Volcanoes")).length;
    let storms = data.filter(d => d.category.includes("Storms")).length;

    document.getElementById('fireCount').innerText = fires;
    document.getElementById('volcanoCount').innerText = volcanoes;
    document.getElementById('stormCount').innerText = storms;
}