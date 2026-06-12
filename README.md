<div align="center">
  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" width="100%" style="max-width: 280px; border-radius: 10px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3); margin-bottom: 24px;" alt="EPOCH Geospatial Intelligence Banner" />

  # 🌐 EPOCH: Geospatial Intelligence Console

  <p align="center">
    <img src="https://img.shields.io/badge/Data_Source-NASA_EONET-0B3D91?style=for-the-badge&logo=nasa&logoColor=white" alt="NASA EONET Source"/>
    <img src="https://img.shields.io/badge/Graphics-Three.js_/_Globe.gl-black?style=for-the-badge&logo=three.js&logoColor=white" alt="WebGL Graphics Engine"/>

  🗣️ **A high-fidelity geospatial intelligence tool designed to visualize Earth's active natural hazards in a cinematic, "War Room" tactical HUD environment.**

  ___
</div>

## 📖 Project Overview

**EPOCH** aggregates and visualizes global active wildfire, volcanic, and climatic anomaly telemetry directly on a custom web-based 3D holographic globe interface. By converting raw multi-dimensional data payloads into highly responsive visual markers, it delivers real-time situational awareness modeling.

---

## 📂 Repository Structure
The platform decouples data acquisition from the client viewport rendering loop using a dual-layer architecture:

## 🔹 Backend Core Engine
* **Flask Server Router (app.py):** Acts as the primary microservice endpoint coordinator that handles HTTP traffic routing and static component assets distribution.
* **Data Sanitization Pipeline:** Connects upstream to the NASA Earth Observatory Natural Hazards Event Tracker API, executing real-time ingestion, filtering, and geographic formatting loops.
* **Aggregated API Endpoints (/api/disasters):** Proxies data downstream to client scripts, decoupling heavy processing from the frontend WebGL context thread.

## 🔹 Frontend Visualization Layer
* **3D Globe Projection (script.js):** Coordinates hardware-accelerated Three.js context instances and Globe.gl matrix math blocks to map live telemetry vectors seamlessly over a spherical coordinate surface.
* **Heads-Up Display Styling (style.css):** Employs fluid layout structures alongside blur filter gradients (backdrop-filter) to achieve a high-tech glassmorphism command console interface.
* **Dashboard Viewport (index.html):** The core semantic document structure managing the canvas rendering frame hooks and overlay status indicators.

## 🛠️ Technology Paradigm

| Layer Domain | Native Asset Utility | Functional Implementation |
| :--- | :--- | :--- |
| **Server Framework** | Python 3.10+ / Flask | API micro-routing, async data requests proxying, data formatting |
| **Graphics Engine** | Three.js / Globe.gl | Hardware-accelerated WebGL matrix graphics, 3D coordinate plotting |
| **Data Feed Provider** | NASA EONET Rest API | Live natural hazard tracking feeds, timestamp data, coordinates |
| **Interface Design** | CSS3 Glassmorphism | Tactical HUD design system, variable themes, absolute spatial layouts |

## 🚀 Running Locally

📋 Prerequisites
Before launching your local tactical server, verify that your machine environment has:
* Python 3.10 or higher installed.
* Standard pip package manager tool configurations configured.

## ⚙️ Installation & Workspace Execution

1. **Clone the Core Repository Tree:**

   ```bash
   git clone [https://github.com/pushtikadia/EPOCH.git](https://github.com/pushtikadia/EPOCH.git)
   cd EPOCH

2. **Install Backend Dependency Modules:**

   ```bash
   pip install flask requests

3. **Launch the Local Development Server Pipeline:**
   
    ```bash
    python EPOCH/app.py

## 🗺️ Data Flow Architecture

```text
  ┌─────────────────┐       🔥 REST API       ┌──────────────────┐
  │ NASA EONET API  ├────────────────────────►│  Flask Backend   │
  └─────────────────┘      JSON Telemetry     │     (app.py)     │
                                              └────────┬─────────┘
                                                       │  Sanitized
                                                       │  Data Payload
                                                       ▼
  ┌─────────────────┐       🌌 WebGL Canvas   ┌──────────────────┐
  │ Glassmorphic HUD│◄────────────────────────┤ 3D Globe Engine  │
  │   (style.css)   │   Reactive Interactivity│    (script.js)   │
  └─────────────────┘                         └──────────────────┘

