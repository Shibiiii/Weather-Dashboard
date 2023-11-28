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
