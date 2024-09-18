// added statement to initialize function to call cities function
function initialize() {
    cities();
}
// define an array of objects for city and population
var cityPop = [
    { city: 'Madison', population: 233209 },
    { city: 'Milwaukee', population: 594833 },
    { city: 'Green Bay', population: 104057 },
    { city: 'Superior', population: 27244 }
];
// define function to create table and add city and population columns
function cities() {
    var table = document.querySelector("table");
// add the columns for city and population
    cityPop.forEach(function(city) {
        var row = document.createElement("tr");
        row.insertAdjacentHTML('beforeend', '<td>' + city.city + '</td>');
        row.insertAdjacentHTML('beforeend', '<td>' + city.population + '</td>');
        table.appendChild(row);
    });

    // Now added the columns for city size
    addColumns(cityPop);
}
// define function to add city size column
function addColumns(cityPop) {
    document.querySelectorAll("tr").forEach(function(row, i) {
        if (i == 0) {
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
        } else {
            var citySize;
			// add the city size based on population metriccs
            if (cityPop[i-1].population < 100000) {
                citySize = 'Small';
            } else if (cityPop[i-1].population < 500000) {
                citySize = 'Medium';
            } else {
                citySize = 'Large';
            }
			// add the city size column to the table
            row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
        }
    });
}
// define function to add event that changes the background color of the table
function addEvents() {
    document.querySelector("table").addEventListener("mouseover", function() {
        var color = "rgb(";
		// loop through to generate random color
        for (var i = 0; i < 3; i++) {
            var random = Math.round(Math.random() * 255);
            color += random;
			// if statement to add comma or close parenthesis
            if (i < 2) {
                color += ",";
            } else {
                color += ")";
            }
        }
		// add the random color to the table background
        document.querySelector("table").style.backgroundColor = color;
    });
	// added second event listener to alert when table is clicked
    document.querySelector("table").addEventListener("click", function() {
        alert('Hey, you clicked me!');
    });
}

// Call the initialize function
initialize();
addEvents();
