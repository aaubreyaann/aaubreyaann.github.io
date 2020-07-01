apiURL = "httpS://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=7b9a1bbb2d9d7cf8074510c14f38447c&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temperature').textContent = jsObject.main.temp_max;
    document.getElementById('desc').textContent = jsObject.weather[0].description;  
    document.getElementById('humid').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  
});

apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=7b9a1bbb2d9d7cf8074510c14f38447c&units=imperial"

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var i;
    let day = 0;
    for (i = 0; day < 5; i++) {
      let time = jsObject.list[i].dt_txt;
      if (time.includes("18:00:00") == true) {
        let currID = "high" + day;
        let currIcon = "icon" + day;
        document.getElementById(currID).textContent = jsObject.list[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        const desc = jsObject.list[i].weather[0].description; 
        document.getElementById(currIcon).setAttribute('src', imagesrc);
        document.getElementById(currIcon).setAttribute('alt', desc);
        day += 1;
      }
    }
  });