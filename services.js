weatherApp.service('cityService', function(){
    this.city = "New York, NY";
});

//Gets the weather data from the internet
weatherApp.service('weatherService', ['$resource', function($resource){
    this.GetWeather = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback: "JSON_CALLBACK"},{get: { method: "JSONP" }});
    
        var weatherResult = weatherAPI.get({
            appid: "cf3ba6379815f54c39cda2827cf89c69",
            q: city,
            mode: "json",
            cnt: days
        });
        
        return weatherResult;
    };
}]);

