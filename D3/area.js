let areaData = [17, 55, 33, 46,38,41,26,77,55,53,25,49,46,22,26,28,37,44];
let dataYears = ["2000","2001", "2002", "2003","2004","2005","2006",
"2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"];

let height = 200;
let width = 500;

let area = d3.area()
		.x(function(d,i) { return i + 20; })
		.y0(height)
		.y(function(d){ return height - d; });


let svg = d3.select("body").append("svg")
     .attr("height", "100%")
     .attr("width","100%");

svg.append("path").attr("d", area(areaData));
