// define a function that will print GeoJSON data to the console
function debugCallback(myData) {
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData));
}
// define the debugAjax function to fetch MegaCities data
function debugAjax() {
    fetch("data/MegaCities.geojson")
        .then(function(response) {
            return response.json();  // Parse the response as JSON
        })
        .then(function(data) {
            debugCallback(data);  // Pass the parsed data to the callback function
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
}

// Call the debugAjax function to execute the fetch request
debugAjax();
