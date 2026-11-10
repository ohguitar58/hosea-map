var size = 0;
var placement = 'point';
/* withText (added 2026-11-10): false = marker-only style used by the marker
   layer (points always render); true = text included, used only by the
   labels-only companion layer, which declutters colliding labels. */
function categories_HoseaSites_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat, withText) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    var textStyle = withText ? createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat) : null;
    switch(valueStr) {
        case 'false':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.71}), fill: new ol.style.Fill({color: 'rgba(37,99,235,1.0)'})}),
        text: textStyle
    })];
			break;

        case 'true':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(30,64,175,1.0)', lineDash: [6, 6], lineCap: 'butt', lineJoin: 'miter', width: 3.04}), fill: new ol.style.Fill({color: 'rgba(191,219,254,1.0)'})}),
        text: textStyle
    })];
			break;
    }};

function labelParams_HoseaSites_1(feature) {
    var labelText = ""; 
    var value = feature.get("proposed_location");
    var labelFont = "14px 'Noto Sans CJK KR', sans-serif";
    var labelFill = "#172033";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.2;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 30;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("label_text") !== null) {
        labelText = String(feature.get("label_text"));
    }
    return {value: value, labelText: labelText, labelFont: labelFont,
            labelFill: labelFill, bufferColor: bufferColor, bufferWidth: bufferWidth,
            placement: placement, textAlign: textAlign, offsetX: offsetX, offsetY: offsetY,
            overflow: overflow, repeat: repeat};
}

var style_HoseaSites_1 = function(feature, resolution){
    var p = labelParams_HoseaSites_1(feature);
    return categories_HoseaSites_1(feature, p.value, size, resolution, p.labelText,
                          p.labelFont, p.labelFill, p.bufferColor,
                          p.bufferWidth, p.placement, p.textAlign, p.offsetX, p.offsetY, p.overflow, p.repeat, false);
};

/* Labels-only companion style (added 2026-11-10): same text as the marker
   style but no circle, so the label layer can declutter colliding text
   without ever hiding the point markers themselves. */
var style_HoseaSites_1_labels = function(feature, resolution){
    var p = labelParams_HoseaSites_1(feature);
    var base = categories_HoseaSites_1(feature, p.value, size, resolution, p.labelText,
                          p.labelFont, p.labelFill, p.bufferColor,
                          p.bufferWidth, p.placement, p.textAlign, p.offsetX, p.offsetY, p.overflow, p.repeat, true) || [];
    return base.map(function(s){
        return new ol.style.Style({text: s.getText()});
    });
};
