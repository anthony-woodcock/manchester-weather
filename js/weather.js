
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

        $( ".temp-kelvin" ).html('<h3>' + tempKelvin + ' kelvin"s' + '</h3>');
        $( ".temp-cel" ).html('<h3>' + tempCelTwoDecimal + ' C' + '</h3>');
        $( ".temp-fah" ).html('<h3>' + tempFahrenheitTwoDecimal + ' f' + '</h3>');
        $( ".description" ).html('<h3>' + description + '</h3>');
        $( ".humidity" ).html('<h3>' + humidity + ' %' + '</h3>');
        $( ".wind" ).html('<h3>' + wind + ' Mph' + '</h3>');
        
        
    }
}

request.send()




