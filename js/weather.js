var weatherRequest= new XMLHttpRequest();
    weatherRequest.open('GET','//api.openweathermap.org/data/2.5/weather?zip=84032,us&appid=9967347d49e1d70dbd0c0f7eb60694d2&units=imperial',true);
    
    weatherRequest.send();

    weatherRequest.onload = function() {
        var weatherData = JSON.parse(weatherRequest.responseText);
        console.log(weatherData);
        document.getElementById('current-temp').innerHTML=weatherData.main.temp;
        document.getElementById('weather-description').innerHTML=weatherData.weather[0].main;
        document.getElementById('high-temp').innerHTML=weatherData.main.temp_max;
        document.getElementById('low-temp').innerHTML=weatherData.main.temp_min;
        document.getElementById('wind-speed').innerHTML=weatherData.wind.speed;
        var iconcode=weatherData.weather[0].icon;
        var icon_path="//openweathermap.org/img/w/"+ iconcode +".png";
        document.getElementById('weather_icon').src = icon_path;
      
        /*var speed = weatherData.wind.speed;
        var avg = (weatherData.main.temp_max + weatherData.main.temp_min)/2;
        var windChillvalue = 35.74 + (0.6215 * avg) - 35.75 * Math.pow(speed,.16) + 0.4275 * avg * Math.pow(speed,.16);
        var multiplier = Math.pow(10, 2);
        windChillvalue = Math.round(windChillvalue * multiplier) / multiplier;
        var chill = parseInt(windChillvalue);    
        document.getElementById('windchill').innerHTML=chill;*/
    }

    
    

