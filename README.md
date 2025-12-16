# 🌐 EPOCH

**EPOCH** is a high-fidelity geospatial intelligence tool designed to visualize Earth's active natural hazards in a cinematic, "War Room" style environment. It leverages **NASA's EONET** data to render real-time disasters on a 3D interactive globe.

## 📂 Repository Structure

The repository is organized into backend and frontend components to deliver a seamless 3D visualization experience:

### 🔹 Backend Core
* **Flask Application:** The main entry point (`app.py`) that handles API routing and serves the application.
* **Data Processing:** Logic to fetch, sanitize, and format raw JSON telemetry from NASA's EONET API.
* **API Endpoints:** Custom routes (`/api/disasters`) that bridge the external NASA data with the frontend interface.

### 🔹 Frontend Visualization
* **3D Globe Engine:** JavaScript logic (`script.js`) powered by **Three.js** and **Globe.gl** to render the holographic earth.
* **Reactive Interface:** Glassmorphism styling (`style.css`) for the Heads-Up Display (HUD) and live status indicators.
* **Dashboard Layout:** Main HTML structure (`index.html`) containing the canvas and overlay elements.

---

## 🚀 Getting Started

To run the application locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/pushtikadia/EPOCH.git](https://github.com/pushtikadia/EPOCH.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd EPOCH
    ```
3.  **Install Dependencies:**
    ```bash
    pip install flask requests
    ```
4.  **Run the application:**
    ```bash
    python EPOCH/app.py
    ```

---

## 🛠️ Technologies Used

* **Python 3.10+**
* **Flask** (Backend Framework)
* **Three.js & Globe.gl** (WebGL Rendering)
* **NASA EONET API** (Live Data Source)

---

<p align="center">
  <b>EPOCH</b> • Created by <a href="https://github.com/pushtikadia"><b>Pushti Kadia</b></a>
</p>
