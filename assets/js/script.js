var searchFormEl = document.querySelector('#search-form');

function searchRequest(event) {

    event.preventDefault();

    var searchInput = document.querySelector('#search-input');
    if (!searchInput) {
        console.error('No search input');
        return;
    }

}

function getApi() {
    var requestUrl = 'api.openweathermap.org/data/2.5/forecast?lat={32.715736}&lon={-117.161087}&appid={fe1420d80f70063f112b634076677a72}';

    fetch(requestUrl).then(function (response) {
        return response.json();
    })
}
console.log(getApi());