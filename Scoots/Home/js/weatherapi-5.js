apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=ddb12dac4c776c13dfac491eec7df68a&units=imperial"

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var i;
    let dayCount = 0;
    for (i = 0; dayCount < 6; i++) {
        let time= jsObject.list[i].dt_txt;
        if (time.includes("12:00:00") == true) {
            if (dayCount == 5) {
                document.getElementById("temperature-2").textContent = jsObject.list[i].main.temp_max;
                document.getElementById('desc-2').textContent = jsObject.list[i].weather[0].description;  
                document.getElementById('humid-2').textContent = jsObject.list[i].main.humidity;
            }  
        }
        dayCount += 1;
    }
  });