
var request = new XMLHttpRequest()

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=4065f941066021809bafd8f67ec9a979')

request.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200) {
        var responseJSON = JSON.parse(this.response)

        //only displaying the weather object
        //var weather = responseJSON.weather

        console.log(responseJSON);
        //document.getElementById("temp").innerHTML = responseJSON.main.temp;
       // document.getElementById("des").innerHTML = responseJSON.weather[0].description;

        var tempKelvin = responseJSON.main.temp 
        var tempCel = responseJSON.main.temp - 273.15
        var tempCelTwoDecimal = tempCel.toFixed(2)
        var tempFahrenheit = tempCel * 9/5 + 32
        var tempFahrenheitTwoDecimal = tempFahrenheit.toFixed(2)
        var description = responseJSON.weather[0].description
        var wind = responseJSON.wind.speed
        var humidity = responseJSON.main.humidity
        var image = responseJSON.weather[0].icon

        //create var for image icon

        $( ".temp-kelvin" ).html(tempKelvin + ' kelvin"s');
        $( ".temp-cel" ).html(tempCelTwoDecimal + ' C'  );
        $( ".temp-fah" ).html(tempFahrenheitTwoDecimal + ' f');
        $( ".description" ).html(description);
        $( ".humidity" ).html(humidity + ' %');
        $( ".wind" ).html(wind + ' Mph');
        $( ".image" ).html('<img src="' + 'http://openweathermap.org/img/w/' + image + '.png' + '">');
        
        
    }
}

request.send()




