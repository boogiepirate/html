
document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + "&appid=" + "1c790a9a65550f1baeb3b2afd6d036ec";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<h2>Current weather in ' + json.name + "</h2>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }

            results += '<h2>' + json.main.temp + " &deg;K</h2>"
            results += "<p>"
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        }).then {

url = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + "&appid=" + "1c790a9a65550f1baeb3b2afd6d036ec";

document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            for (let day = 1; day <= 5; day++) {
                arrayPlace = (day * 2) - 1;
                let results = "";
                results += '<h2>Day ' + day + 'weather in ' + json.name + "</h2>";
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[arrayPlace].icon + '.png"/>';
                results += '<h2>' + json.main.temp + " &deg;K</h2>"
                results += "<p>"
                results += json.weather[arrayPlace].description
                results += "</p>";
                document.getElementById("weatherResults").appenChild = results;
            }
        });
});

