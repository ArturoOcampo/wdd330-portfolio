// CALLING THE JSON
let url = "https://swapi.dev/api/starships/";
let requestURL = (url);
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        myobj = jsonObject;


        let array = myobj.results;
        let content = "";

        for (let i = 0; i < array.length; i++) {

            content += "<tr>" + "<td>" + array[i].name + "</td>" + "<td>" + array[i].length + "</td>" + "<td>" + array[i].crew + "</td>" + "</tr>";

        }

        document.getElementById("output-table").innerHTML = content;

    });