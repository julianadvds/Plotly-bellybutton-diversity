function init() {
    // dropdown menu is called selector
    var selector = d3.select('#selDataset');

    // read the dta from samples, name it data
    d3.json("samples.json").then((data) => {
        // print the data in the console
        console.log(data);

        // from the data, pull the name array
        var sampleName = data.names;

        /* for each sample name, append a menu option is added
        The append(option) adds it as a line in the dropdown
        text(sample) assigns the dropdown text as the participant number
        the value of the drop down is the value of the sample data
        */
        sampleName.forEach((sample) => {
            selector
                .append('option')
                .text(sample)
                .property('value', sample);
        })
    });
}
init();

// create optionChanged function that executes when a drop down is selected
// That will trigger 2 other functions to run - buildMetadata and buildCharts
function optionChanged(newSample) {
    console.log(newSample);
    buildMetadata(newSample);
    // buildCharts(newSample);
  }

function buildMetadata(sample) {
    d3.json('samples.json').then((data) => {
        // create a new variable to drill into the metadata info
        var metadata = data.metadata;
        // create a variable to filter the metadata to that of the drop down menu selection
        var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
        // from the filtered results, get the first (and only) element in list
        var results = resultsArray[0];
        //hvae d3 select the sample metadata div 
        var PANEL = d3.select('#sample-metadata');
        
        // ensures the current table is cleared before adding data
        PANEL.html("");
        // adds the location information to the panel
        // addLine = PANEL.append('h6').text(results.location)

        Object.entries(results).forEach( (participant) => {PANEL.append('h6').text( participant[0] + ": " + participant[1]);});

    });

}

