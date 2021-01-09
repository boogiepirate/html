document.getElementById("goatSubmit").addEventListener("click", function (event) {
    event.preventDefault();
    
    let url = "http://placegoat.com/200/200";
    fetch(url)
        .then(function (response) {
            console.log(response);
            let results = "";
            results += '<div class="grayBackground"><div class="page">';
            results += '<div class="goatContainer"><h2>Your spirit goat: </h2>';
            results += '<img src=' + response.url + '>';
            results += "<p>Look deeply at your goat. Understand your goat. Let the spirit of this goat inhabit you and guide you to be the Greatest of All Time."
            results += "</p></div></div></div>";
            document.getElementById("weatherResults").innerHTML = results;
        });
});