// SpaceX Website
const url = "https://api.spacexdata.com/v2/launchpads";

/* In the second line, d3.json() method 
places a call to SpaceX's API, retrieves the data, 
and prints it to the browser console.*/

data = d3.json(url).then(receivedData => console.log(receivedData));

// to get the name of only the first element in object:
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// to get the full name(key) of the object in the first element
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// get the latitude of Vanderberg space station [0]
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude) );


// use map to print out the latitude and longitude of each space station
d3.json(url).then(receivedData => console.log(receivedData.map(station => station.location.latitude)));
d3.json(url).then(receivedData => console.log(receivedData.map(station => station.location.longitude)));
