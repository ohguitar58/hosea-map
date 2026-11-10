# View the Live Map

Live site (GitHub Pages): https://ohguitar58.github.io/hosea-map/

No download or local server is needed to view it. An internet connection is
required in all cases, because the basemap tiles are loaded from online map
services.

---

# README – Standalone qgis2web Export

This export is completely "self-contained".

The instructions below are for a local copy of the original ZIP export.
To view a local copy, download the folder and open "index.html" by double-clicking it.
No web server or additional software is required. If your browser blocks
local file access, run a small local server instead (for example
`python3 -m http.server`) and open http://localhost:8000/.

The map works because all the required JavaScript libraries are included
in the export. The application loads the GeoJSON layer data and their styles
directly from the local files.

## Publishing on a Website

If you upload the entire folder to a web server, the map will work 
immediately by opening the "index.html" file.

Example:

"https://www.example.com/my-map/index.html"
