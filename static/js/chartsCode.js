function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    console.log(data)
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleData = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleArray = sampleData.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var selectedSample = sampleArray[0];
    // console.log(selectedSample)

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    sampleOtu_ids = selectedSample.otu_ids;
    // console.log(sampleOtu_ids)
    sampleOtu_labels = selectedSample.otu_labels;
    // console.log(sampleOtu_lables)
    sampleSample_values = selectedSample.sample_values;
    // console.log(sampleSample_values)

     // 3. Create a variable that holds the washing frequency.
    var metaData = data.metadata;
    var sampleMetadata = metaData.filter(metaObj => metaObj.id == sample);
    var selectedMetadata = sampleMetadata[0]



     washFreq = parseFloat(selectedMetadata.wfreq)
     console.log(`Wash frequ is ${washFreq}`)

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = sampleOtu_ids.slice(0,10).map(sampleOtu_ids => `OTU ${sampleOtu_ids}`).reverse();
    console.log(yticks);

    // 8. Create the trace for the bar chart. 
    var barData = [{
      x:sampleSample_values.slice(0,10).reverse(),
      y:yticks,
      type: 'bar',
      orientation: 'h'
    }];
    console.log(barData);
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacterial Cultures Found",
      xaxis: {title: "Sample Amount"},
      yaxis: {title: "OTU"}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData)



    /* Deliverable # 2
    Create bubble chart*/


    // Create the data for the chart
    var bubbleData = [{
      x: sampleOtu_ids,
      y: sampleSample_values,
      text: sampleOtu_labels,
      mode: 'markers',
      marker: {
        size: sampleSample_values,
        color: sampleOtu_ids,
        colorscale: 'Rainbow'
      }
    }];
    // create the bubble chart layout
    var bubbleLayout = {
      title: "Top 10 Bacterial Species (OTUs)",
      xaxis: {title: "Sample Amount" },
      yaxis: {title: "OTU ID"}
    };

    // Plot the bubble chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout)
  
  
  /*   Deliverable #3
  Create a Gauge chart for washing frequency
  */

    // Create the trace for the gauge chart.
    var gaugeData = [{
      domain: { x: [0,1], y: [0,1]},
      value: washFreq,
      title: {text: 'Belly Button Washing Frequency'},
      type: 'indicator',
      mode: 'gauge+number',
      gauge: {
        axis: { range: [null, 10], tickwidth: 1, tickcolor: 'black' },
        bar: { color: "black" },
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "lawngreen" },
          { range: [8, 10], color: "green" }
        ]},
    }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 400, 
      height: 450, 
      margin: { t: 25, r: 25, l: 25, b: 25  },
      font: { color: "black", family: "Arial"}
      
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot('gauge', gaugeData, gaugeLayout);
  
  
  });
}

