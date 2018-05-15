let dataArray2 = [{x:70,y:70}, {x:20,y:19},{x:65,y:27},{x:40,y:53},{x:35,y:59}];

let svg = d3.select("body").append("svg").attr("height","100%");


// _____  THis is a generator !!!    
let line = d3.line()
     .x(function(d,i){ return d.x * 6;  })
     .y(function(d,i){ return d.y * 4;  });
// _____________________________________
     svg.append("path")
     .attr("fill","none")
     .attr("stroke","coral")
     .attr("d", line(dataArray2));