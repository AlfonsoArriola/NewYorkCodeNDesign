let dataArray = [5, 11, 18];
let svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
svg.selectAll("rect").data(dataArray).enter().append("rect").attr("height", function(d, i) {
    return d * 15;
}).attr("width", "50").attr("fill", "coral").attr("x", function(d, i) {
    return 60 * i;
}).attr("y", function(d, i) {
    return 200 - (d * 15);
});
let newX = 300;
svg.selectAll("circle.first").data(dataArray).enter().append("circle").attr("circle", "first").attr("cx", function(d, i) {
    newX += (d * 6) + i;
    return newX
}).attr("cy", "100").attr("r", function(d) {
    return d * 3;
});
let newX2 = 600;
svg.selectAll("ellipse").data(dataArray).enter().append("ellipse").attr("class", "second").attr("cx", function(d, i) {
    newX2 += (d * 6) + i;
    return newX2
}).attr("cy", "100").attr("rx", function(d) {
    return d * 3;
}).attr("ry", "30");
let newX3 = 900;
svg.selectAll("line").data(dataArray).enter().append("line")
    // .attr("stroke", "blue")
    // .attr('stroke-width', '2')
    .attr("x1", newX3).attr("y1", function(d, i) {
        return 80 + (i * 20);
    }).attr("x2", function(d) {
        return newX3 + (d * 15);
    }).attr("y2", function(d, i) {
        return 80 + (i * 20);
    });
// svg.append("text").attr("x", newX3).attr("y", "150").text("hello world");
svg.append("text").attr("x", newX).attr("y", 130).attr("font-size", "30").attr().text("Straw")
svg.append("text").attr("x", newX).attr("y", 180).attr("font-size", "30").text("Wood")
svg.append("text").attr("x", newX).attr("y", 260).attr("font-size", "30").text("Brick")


