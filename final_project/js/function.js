//Runs every 60 Minutes to query OpenWeatherMap.org API We cannot do more than 30 minutes because of FREE Account and will get Locked out
function ILOVEPOOFY(){
    var weatherRequest= new XMLHttpRequest();
    var url='//api.openweathermap.org/data/2.5/weather?zip=84032,us&appid=9967347d49e1d70dbd0c0f7eb60694d2&units=imperial';
    weatherRequest.open('GET',url,true);
    weatherRequest.send();
    weatherRequest.onload = function() {
        var weatherData = JSON.parse(weatherRequest.responseText);
        var iconcode=weatherData.weather[0].icon;
        var icon_path="//openweathermap.org/img/w/"+ iconcode +".png";
        var speed = weatherData.wind.speed;
        var avg = (weatherData.main.temp_max + weatherData.main.temp_min)/2;
        var multiplier = Math.pow(10, 2);
        var chill = parseInt(windChillvalue);    
        var windChillvalue = 35.74 + (0.6215 * avg) - 35.75 * Math.pow(speed,.16) + 0.4275 * avg * Math.pow(speed,.16);
        windChillvalue = Math.round(windChillvalue * multiplier) / multiplier;        
        console.log(weatherData);
        document.getElementById('current-temp').innerHTML=weatherData.main.temp;
        document.getElementById('weather-description').innerHTML=weatherData.weather[0].main;
        document.getElementById('high-temp').innerHTML=weatherData.main.temp_max;
        document.getElementById('low-temp').innerHTML=weatherData.main.temp_min;
        document.getElementById('wind-speed').innerHTML=weatherData.wind.speed;
        document.getElementById('weather_icon').src = icon_path;
        document.getElementById('windchill').innerHTML=windChillvalue;
    }
setTimeout(ILOVEPOOFY, 600000)//How oven it queries
}
ILOVEPOOFY();

//Storage Local API
localStorage.setItem("title", "Amanda Bird CIT261 Final Project - Heber Valley Weather");
document.getElementById("Title").innerHTML = localStorage.getItem("title");

//DOM Manipulation
function seasonFunction() {   

var elem = document.createElement("img");
elem.setAttribute("src", "images/sunshine.jpg");
elem.setAttribute("height", "768");
elem.setAttribute("width", "1024");
elem.setAttribute("alt", "Sunshine!");
document.getElementById("placehere").appendChild(elem);

}