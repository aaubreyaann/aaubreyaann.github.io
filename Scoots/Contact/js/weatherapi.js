apiURL = "httpS://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=7b9a1bbb2d9d7cf8074510c14f38447c&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp_max;
    document.getElementById('desc').textContent = jsObject.weather[0].description;  
    document.getElementById('humid').textContent = jsObject.main.humidity;
  
});





