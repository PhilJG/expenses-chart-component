import React, { Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];

    const svg = d3
      //select an HTML element from the document
      .select("body")
      //appends an HTML node to the selected item and returns a handle to that node.
      .append("svg")
      //to add attributes to the element,
      .attr("width", 700)
      .attr("height", 300);

    // selects the element that matches the argument that is passed to it. Therefore, all elements that match the arguments are selected

    //For x, each index of the data point in the array is multiplied by a constant integer, 70, to shift the position of each bar by 70, while y has a constant value

    //The width also has a constant value of 65, which is less than the position of each element on the chart, creating a space between each element. The height of the bar depends on the value of each entry in the data set.
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", 0)
      .attr("width", 65)
      .attr("height", (d, i) => d)
      .attr("fill", green);

    //   callback function to deal with the dynamic data:
    //d represents the data point value, and i is the index of the data point of the array.
    selection.attr("property", (d, i) => {});
  }
  //Chart displays only when the component has been mounted on the DOM
  componentDidMount() {
    this.drawChart();
  }
}

export default BarChart;
