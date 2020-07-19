const requestURL = 'https://aaubreyaann.github.io/Scoots/data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {
            let rent = document.createElement('section');
            let type = document.createElement('h4');
            let img = document.createElement('img');
            let info = document.createElement('table');
            let max = document.createElement('tr');
            let maxval = document.createElement('td');
            let valmax = document.createElement('td');
            let halfres = document.createElement('tr');
            let fullres = document.createElement('tr');
            let halfresval = document.createElement('td');
            let reshalf = document.createElement('td');
            let fullresval = document.createElement('td');
            let resfull = document.createElement('td');
            let halfwalk = document.createElement('tr');
            let fullwalk = document.createElement('tr');
            let halfwalkval = document.createElement('td');
            let walkhalf = document.createElement('td');
            let fullwalkval = document.createElement('td');
            let walkfull = document.createElement('td');
                
                
                type.textContent = rentals[i].type;
                maxval.textContent = rentals[i].max;
                valmax.textContent = "Max Persons";
                halfresval.textContent = rentals[i].price.reserve.half;
                reshalf.textContent = "Half Day with Reservation";
                fullresval.textContent = rentals[i].price.reserve.full;
                resfull.textContent = "Full Day with Reservation";
                halfwalkval.textContent = rentals[i].price.walkin.half;
                walkhalf.textContent = "Half Day Walk In";
                fullwalkval.textContent = rentals[i].price.walkin.full;
                walkfull.textContent = "Full Day Walk In";


                img.setAttribute('src', rentals[i].img.file);
                img.setAttribute('alt', rentals[i].img.desc);


                
                max.appendChild(valmax);
                max.appendChild(maxval);
                halfres.appendChild(reshalf);
                halfres.appendChild(halfresval);
                fullres.appendChild(resfull);
                fullres.appendChild(fullresval);
                halfwalk.appendChild(walkhalf);
                halfwalk.appendChild(halfwalkval);
                fullwalk.appendChild(walkfull);
                fullwalk.appendChild(fullwalkval);


                info.appendChild(max);
                info.appendChild(halfres);
                info.appendChild(fullres);
                info.appendChild(halfwalk);
                info.appendChild(fullwalk);

                rent.appendChild(type);
                rent.appendChild(img);
                rent.appendChild(info);


                document.querySelector('div.rentals').appendChild(rent);
            }
        }
    );