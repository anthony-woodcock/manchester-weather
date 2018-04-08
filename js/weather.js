
var request = new XMLHttpRequest()

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=4065f941066021809bafd8f67ec9a979')

request.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200) {
        var responseJSON = JSON.parse(this.response)

        var main = responseJSON.main
        var tempKelvin = main.temp 
        var tempCel = tempKelvin - 273.15
        var tempCelTwoDecimal = tempCel.toFixed(2)
        var tempFahrenheit = ((tempCel * 9)/5) + 32
        var tempFahrenheitTwoDecimal = tempFahrenheit.toFixed(2)
        var weather = responseJSON.weather
        var description = weather[0].description
        var wind = responseJSON.wind.speed
        var humidity = main.humidity
        var image = weather[0].icon


        $( ".temp-kelvin" ).html(tempKelvin + ' &#8490;');
        $( ".temp-cel" ).html(tempCelTwoDecimal + '  &#8451;'  );
        $( ".temp-fah" ).html(tempFahrenheitTwoDecimal + '  &#8457;');
        $( ".description" ).html(description);
        $( ".humidity" ).html(humidity + ' %');
        $( ".wind" ).html(wind + ' Mph');
        $( ".image" ).html('<img src="' + 'http://openweathermap.org/img/w/' + image + '.png' + '">'); 
    }
}

request.send()




