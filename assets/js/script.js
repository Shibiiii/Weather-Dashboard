// api id fe1420d80f70063f112b634076677a72

var cityName = document.querySelector('#cityname');
var btn = document.querySelector('.btn');
var divData = document.querySelector('#search-history');
var index = 1;

btn.addEventListener('click',function(event){
    event.preventDefault();
    newSearch();
    var city = cityName.value;
    saveCityName(city);
    getApiData(city);
});

function getApiData(city) {
    var weatherUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city +'&appid=fe1420d80f70063f112b634076677a72';
    fetch(weatherUrl)
        .then(function(response){
            return response.json();
        }).then(function(data) {
    var geocodingUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + data[0].lat +' &lon=' + data[0].lon + '&appid=fe1420d80f70063f112b634076677a72&units=imperial';

    fetch(geocodingUrl)
        .then(function(response){
            return response.json();
        }).then(function(data) {
            
            for(var i = 0; i <= 5; i++) {

                var forecast = document.querySelector('#forecast-' + (i + 2));
                var createText = document.createElement('p');

                var humidity = data.list[i*8].main.humidity;
                var temp = data.list[i*8].main.temp;
                var windSpeed = data.list[i*8].wind.speed;
                var date = dayjs(data.list[i*8].dt_text).format('MM/DD/YYYY');
            }
        })
        })
}
