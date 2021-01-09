document.getElementById("weatherSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    // console.log(value);
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial&appid=1c790a9a65550f1baeb3b2afd6d036ec";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            let results = "";
            results += '<div class="page">';
            results += '<div class="oneDay"><h2>Current weather in ' + json.name + "</h2>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"

            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p></div></div>";
            document.getElementById("weatherResults").innerHTML = results;
        });

    let url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ",US&units=imperial&appid=" + "1c790a9a65550f1baeb3b2afd6d036ec";
    fetch(url2)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json)

            let results2 = "";
            results2 += '<div class="page">';

            for (let i = 0; i < json.list.length; i++) {

                results2 += '<div class="oneDay"><h2>' + json.list[i].dt_txt.slice(0, 10) + " " + json.list[i].dt_txt.slice(11, 16) + ' weather in ' + json.city.name + "</h2>";

                results2 += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';

                results2 += '<h2>' + json.list[i].main.temp + "&deg;F</h2>";

                results2 += "<p>"

                results2 += json.list[i].weather[0].description;

                results2 += "</p></div>";
            }

            results2 += "</div>";

            document.getElementById("weatherForecast").innerHTML = results2;
        });
});