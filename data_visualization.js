/**
 * This code is for a JavaScript data visualization project
 * Filename: data_visualization.js
 * 
 * Description: This code creates a complex data visualization using D3.js library.
 * It loads data from a CSV file, creates an interactive scatter plot, and provides
 * various functionalities such as zooming, brushing, and tooltips.
 * 
 * Author: John Doe
 * Date: February 8, 2022
 */

// Load the D3.js library
const d3 = require('d3');

// Define the dimensions for the SVG container
const margin = { top: 30, right: 30, bottom: 50, left: 50 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create the SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Load data from a CSV file
d3.csv('data.csv').then(data => {
  // Convert data types if needed
  data.forEach(d => {
    d.x = +d.x;
    d.y = +d.y;
  });

  // Define scales and axes
  const xScale = d3.scaleLinear().range([0, width]).domain(d3.extent(data, d => d.x));
  const yScale = d3.scaleLinear().range([height, 0]).domain(d3.extent(data, d => d.y));
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Create axes
  svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  svg.append('g')
    .attr('class', 'y-axis')
    .call(yAxis);

  // Create circles for data points
  svg.selectAll('.circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('cx', d => xScale(d.x))
    .attr('cy', d => yScale(d.y))
    .attr('r', 5)
    .style('fill', 'steelblue');

  // Add interaction functionalities

  // Add tooltips
  const tooltip = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  svg.selectAll('.circle')
    .on('mouseover', d => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 1);
      tooltip.html(`(${d.x}, ${d.y})`)
        .style('left', `${d3.event.pageX}px`)
        .style('top', `${d3.event.pageY}px`);
    })
    .on('mouseout', d => {
      tooltip.transition()
        .duration(200)
        .style('opacity', 0);
    });

  // Add zooming and panning
  const zoom = d3.zoom()
    .scaleExtent([1, 10])
    .on('zoom', () => {
      svg.attr('transform', d3.event.transform);
    });

  svg.call(zoom);

  // Add brushing to highlight data points within a range
  const brush = d3.brush()
    .extent([[0, 0], [width, height]])
    .on('end', brushended);

  svg.append('g')
    .attr('class', 'brush')
    .call(brush);

  function brushended() {
    if (!d3.event.sourceEvent || !d3.event.selection) return;
    const [[x0, y0], [x1, y1]] = d3.event.selection;
    const brushedData = data.filter(d => xScale(d.x) >= x0 && xScale(d.x) <= x1 && yScale(d.y) >= y0 && yScale(d.y) <= y1);

    svg.selectAll('.circle')
      .style('fill', 'steelblue');

    svg.selectAll('.circle')
      .filter(d => brushedData.some(brushed => d === brushed))
      .style('fill', 'red');
  }
});