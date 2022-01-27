
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
// Plotly.newPlot("potato", [{x: [44,33,22], y: [123, 321, 231]}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
var layout = {
     title: "Luncheon Survey",
     xaxis: {title:"Food Option"},
     yaxis: {title: "Number of Respondents"}
 };

 Plotly.newPlot("plotArea", [trace], layout);


 drinks= ["nonalcoholic beer", 
 "nonalcoholic wine", "nonalcoholic martini", 
 "nonalcoholic margarita", 
 "ice tea", "nonalcoholic rum & coke", 
 "nonalcoholic mai tai", 
 "nonalcoholic gin & tonic"];

percent_ordered =  [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];

var drinks_ordered = {
    labels: drinks,
    values: percent_ordered,
    type: "pie"
};
var drinks_layout = {
    title: "Drink Orders",
    xaxis: {title: "Type of Drink"},
    yaxis: {title: "Percent Ordered"}
}


Plotly.newPlot("drink_percent", [drinks_ordered], drinks_layout)

// Create a scatter plot
var trace1 = {
    x: [1,2,2,4,6],
    y:[ 1, 2,3,4,5]
};
var trace2 = {
    x:[5,4,3,2,1],
    y:[4,4,5,6,1]
}
var trace3 = {
    x: [1,2,3,4,5,],
    y:[1,2,1,2,1]
}

var data = [trace1,trace2,trace3]
Plotly.newPlot('scatter', data);

// use map to add 5 to each number in array

var numbers = [0,2,4,6,8];

plusFive = numbers.map(number => number+5)
console.log(numbers);
console.log(plusFive);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];
console.log(cities[0].City)

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// var cityPop = cities.map(function(population){
//     return population.population
// });
// console.log(cityPop);


// filter the words that start with 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander']

var sStart = words.filter(function(letter){
    
    return (letter.charAt(0) =='s');

});

console.log(sStart)

// filter the words that start with s using the arrow method
var startWithS = words.filter(letter => letter.charAt(0) =="s");
console.log(startWithS);

// get the first 3 words of the words array
var slice1 = words.slice(0,3);
console.log(slice1);