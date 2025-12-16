from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)

# NASA EONET API Endpoint
NASA_API_URL = "https://eonet.gsfc.nasa.gov/api/v3/events"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/disasters')
def get_disasters():
    try:
        # Fetch live data from NASA (Limit to last 30 days by default in their API)
        params = {"status": "open", "limit": 50}
        response = requests.get(NASA_API_URL, params=params)
        data = response.json()

        cleaned_data = []
        
        for event in data.get('events', []):
            # Extract key details
            category = event['categories'][0]['title']
            title = event['title']
            date = event['geometry'][0]['date']
            
            # Extract coordinates (NASA gives [lon, lat])
            coords = event['geometry'][0]['coordinates']
            
            # Assign colors based on disaster type
            color = "white"
            if "Wildfires" in category: color = "#ff5500" # Orange Fire
            elif "Volcanoes" in category: color = "#ff0000" # Red Magma
            elif "Storms" in category: color = "#0088ff" # Blue Storm
            elif "Ice" in category: color = "#00ffff" # Cyan Ice

            cleaned_data.append({
                "title": title,
                "category": category,
                "lat": coords[1],
                "lng": coords[0],
                "date": date[:10],
                "color": color
            })

        return jsonify(cleaned_data)

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)