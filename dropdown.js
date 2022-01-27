// interract with the drop down menu
d3.selectAll("body").on("change", updatePage); //create event listener and then run updatePage function


function updatePage() { 
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};


// practice drop down menus
// d3.selectAll('body').on('change', updateDisney);

// function updateDisney() {
//     var dropdownMenu = d3.selectAll("#disney").node();
//     var dropdownMenuID = dropdownMenu.id;
//     var selectedOption = dropdownMenu.value;

//     console.log(dropdownMenuID);
//     console.log(selectedOption);
// }