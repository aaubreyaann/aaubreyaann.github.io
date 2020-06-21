const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let town = document.createElement('section');
                let info = document.createElement('div')
                let img = document.createElement('div')
                let h2 = document.createElement('h2');
                let motto = document.createElement("h3");
                let year = document.createElement("p")
                let population = document.createElement("p")
                let rainfall = document.createElement("p")
                let photo = document.createElement("img");
                
                h2.textContent = towns[i].name;

                motto.textContent = towns[i].motto;

                year.textContent = "Year Founded: " + towns[i].yearFounded;

                population.textContent = "Poplulation: " + towns[i].currentPopulation;

                rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

                photo.setAttribute('src', towns[i].photo);
                photo.setAttribute('alt', towns[i].name);

                info.setAttribute("class", "info")
                img.setAttribute("class", "photo")

                info.appendChild(h2);
                info.appendChild(motto);
                info.appendChild(year);
                info.appendChild(population);
                info.appendChild(rainfall);
                img.appendChild(photo);

                town.appendChild(info);
                town.appendChild(img);


                document.querySelector('div.towns').appendChild(town); // temporary checking for valid response and data parsing
            }
        }
    });