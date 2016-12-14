
var w = 500, h = 100;
var data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var data_text = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
var svg = d3.select(".set-rating")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
var border = svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect");
// console.log(typeof "data".length);
border.attr("x", function(d, i) { // x 좌표 설정
      return i * (w / data.length);
    })
    .attr("y", function(d) { // y 좌표 설정
       return h - d;
    })
    .attr("width", w / data.length - 1) // 너비 설정
    .attr("height", function(d) { // 높이 설정
      return d;
    })
    .attr("fill", function(d) { // 색상 설정
      return "#c6a471";
    });
    // .attr("z-index", 1000000);
svg.selectAll("text")
    .data(data_text)
    .enter()
    .append("text")
    .text(function(d) {
      return d;
    })
    .attr("x", function(d, i) {
      return i * (w / data.length) + (w / data.length) / 2;
    })
    .attr("y", function(d) {
      return 95;
    })
    .attr("font-family", "Spoqa Han Sans")
    .attr("font-size", "12px")
    .attr("fill", "#ddd")
    .attr("text-anchor", "middle");
