What changed in this copy (2026-11-09)
======================================
1. layers/layers.js - appended block (~25 lines): adds the Esri "Charted Territory"
   vector basemap underneath your existing layers. It loads Esri's public style
   live over the web (no API key, no ArcGIS sign-in, no credits, nothing uploaded
   or saved to ArcGIS). OpenStreetMap is still in the layer switcher if you want it back.
2. styles/HoseaSites_1_style.js - one-word fix on two lines ('False'->'false',
   'True'->'true'): the original export's marker styles never matched the data,
   so the 8 site markers were invisible. They show now.

Everything else is byte-identical to your qgis2web export of 2026-11-09 17:25.

How to view: unzip, then open the folder the same way you opened the earlier
export (e.g. localhost server). An internet connection is needed - the basemap
tiles load live from Esri.

Attribution: the small "Powered by Esri (c) Esri and its data providers" line in
the corner must stay visible (Esri's usage condition for this basemap).
