function toggleEvents() {
    document.getElementsByClassName("events")[0].classList.toggle("show");
}

apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const towns = jsObject.towns;
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Fish Haven") {
            let town = jsObject.towns[i];
            for (let j = 0; j < town.events.length; j++) {
                let event = document.createElement("li");

                event.textContent = town.events[j];

                document.querySelector('ul.events').appendChild(event);
            }
        }
    }
  
});