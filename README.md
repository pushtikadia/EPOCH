<div align="center">
  <br />
  <h1>🌐 E P O C H</h1>
  <h3>Planetary Hazard Surveillance System</h3>
  
  <p>
    <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"></a>
    <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-Backend-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask"></a>
    <a href="https://threejs.org/"><img src="https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"></a>
    <a href="https://eonet.gsfc.nasa.gov/"><img src="https://img.shields.io/badge/Data-NASA_EONET-OB3D91?style=for-the-badge&logo=nasa&logoColor=white" alt="NASA"></a>
  </p>

  <p>
    <b>Visualizing the pulse of our planet in real-time.</b>
  </p>
  <br />
</div>

---

## 🛰️ Mission Brief

**EPOCH** is a high-fidelity geospatial intelligence tool designed to visualize Earth's active natural hazards in a cinematic, "War Room" style environment. 

> **Concept:** A 3D interactive globe that visualizes real-time natural disasters (earthquakes, wildfires, hurricanes) using NASA data.

By ingesting live telemetry from **NASA's EONET (Earth Observatory Natural Event Tracker)**, EPOCH renders volcanic eruptions, wildfires, and severe storms as interactive data points on a photorealistic, night-side globe. It is engineered for researchers, developers, and data enthusiasts who require a beautiful yet functional global overview.

---

## ⚡ System Capabilities

### 🌍 **Holographic Visualization**
* **WebGL Core:** Powered by `Globe.gl` and `Three.js` for 60FPS rendering.
* **Atmospheric Scattering:** Realistic glow effects and star-field background.
* **Performance:** Optimized to handle 500+ active data points simultaneously.

### 📡 **Live Event Tracking**
EPOCH filters and visualizes live data categories directly from NASA satellites:
* 🔴 **Magmatic Events (Volcanoes):** Pulsing red beacons indicating active eruption or unrest.
* 🟠 **Thermal Anomalies (Wildfires):** Muted orange flares representing high-temperature fire zones.
* 🔵 **Cyclonic Systems (Storms):** Electric cyan rings tracking the path of hurricanes and typhoons.
* ⚪ **Cryospheric Events (Sea Ice):** Sage green markers for iceberg tracking and sea ice extent.

### 🖥️ **Heads-Up Display (HUD)**
* **Glassmorphism UI:** A translucent, frosted-glass interface that floats above the 3D layer.
* **Reactive Metrics:** Live counters for "Active Storms" and "Thermal Anomalies" that sync instantly with the API.
* **Deep-Dive Cards:** Hover interactions reveal precise coordinates (Lat/Lng), event titles, and timestamps.

---

## 🏗️ Architecture

```mermaid
graph TD;
    User[End User] -->|HTTP Request| Flask[Flask Server (app.py)];
    Flask -->|GET Request| NASA[NASA EONET API];
    NASA -->|JSON Response| Flask;
    Flask -->|Sanitized JSON| Frontend[Browser (Three.js/Globe.gl)];
    Frontend -->|Render| Globe[3D Interactive Globe];

---

<p align="center">
  <b> EPOCH </b> • Created by <a href="https://github.com/pushtikadia"><b>Pushti Kadia</b></a>
</p>
