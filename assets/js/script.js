function getWeather(){
    if(city == "union")
    fetch(weathboardAPI)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        
    })
}

var selectedEl = $("#search-city");
var cityChosen = document.getElementById("current-city");
var temp = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var windSpeed = document.getElementById("wind-speed");
var uvIndex = document.getElementById("uv");
var cityArray = [];

var weatherboardApiLink = "api.openweathermap.org/data/2.5"
var city = "union"
var APIKey = "&appid=3c3fe44616a0a33f54223a0fa29fe9b2";
var weathboardAPI = weatherboardApiLink + city + APIkey;
