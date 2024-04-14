//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }]

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }
	    //change the text color
    document.querySelector('#mydiv').style.color = 'red';

    //change the text size and alignment
    document.querySelector('#mydiv').style.fontSize = '2em';
    document.querySelector('#mydiv').style.textAlign = 'left';

    //get the text color and add it as text to the div
    var thecolor = document.querySelector('#mydiv').style.color;
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thecolor);
	var theid = document.querySelector('#mydiv').getAttribute('id');

    //theid is 'mydiv;; add it as text to the div
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',theid);

    //add the class 'foo' to the div
    document.querySelector('#mydiv').setAttribute('class', 'foo');

    document.querySelector("#mydiv").appendChild(table);
	
	//iterate over each script element and add each one's source url as text to the div
    document.querySelectorAll("script").forEach(function(selectedScript){
        var thesource = selectedScript.src;
        document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thesource);
    })
	    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    document.querySelector("table").addEventListener('click', clickme);

    //remove the event listener
    document.querySelector("table").removeEventListener('click', clickme);

document.addEventListener('DOMContentLoaded',initialize)

