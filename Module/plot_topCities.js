console.log(cityGrowths);

// Sort cities by population growth, desc
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 -b.Increase_from_2016).reverse();
console.log(sortedCities);

// select the top 5 cities
var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create Arrays of top cities name and populations
var topFiveCityNames = topFiveCities.map(city => city.City);
console.log(topFiveCityNames);

var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths)

// Create bar chart
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type:'bar'
};

var data = [trace];

var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: 'City'},
    yaxis: {title: "Population Growth 2016-2017"}

};
Plotly.newPlot("bar-plot", data, layout);


// Create another graph with the 7 largest cities by population
var largestPop = cityGrowths.sort((a,b) => a.population - b.population).reverse();
console.log(largestPop);

var sevenLargestCities = largestPop.slice(0,7);
console.log(sevenLargestCities)

var topSevenNames = sevenLargestCities.map(city => city.City);
var topSevenPop = sevenLargestCities.map(city => city.population);
console.log(topSevenNames);
console.log(topSevenPop);

var trace1 = {
    x: topSevenNames,
    y: topSevenPop,
    type:'bar'
};

data1 = [trace1]

var layout1 = {
    title: "Top Seven Largest Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot('bar-plot1', data1, layout1)