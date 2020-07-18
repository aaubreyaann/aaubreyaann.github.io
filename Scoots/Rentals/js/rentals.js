const requestURL = 'https://aaubreyaann.github.io/Scoots/data/rentals.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentals = jsObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {
            let rent = document.createElement('section');
            let type = document.createElement('h2');
            let img = document.createElement('img');
            let info = document.createElement('div');
            let max = document.createElement('ul');
            let maxval = document.createElement('li');
            let valmax = document.createElement('li');
            let halfres = document.createElement('ul');
            let fullres = document.createElement('ul');
            let halfresval = document.createElement('li');
            let reshalf = document.createElement('li');
            let fullresval = document.createElement('li');
            let resfull = document.createElement('li');
            let halfwalk = document.createElement('ul');
            let fullwalk = document.createElement('ul');
            let halfwalkval = document.createElement('li');
            let walkhalf = document.createElement('li');
            let fullwalkval = document.createElement('li');
            let walkfull = document.createElement('li');
                
                info.setAttribute("class", "table-hold");
                max.className("table-row");
                halfres.className("table-row");
                fullres.className("table-row");
                halfwalk.className("table-row");
                fullwalk.className("table-row");

                maxval.className("table-item");
                valmax.className("table-item");
                halfresval.className("table-item");
                reshalf.className("table-item");
                fullresval.className("table-item");
                resfull.className("table-item");
                halfwalkval.className("table-item");
                walkhalf.className("table-item");
                fullwalkval.className("table-item");
                walkfull.className("table-item");
                
                type.textContent = rentals[i].type;
                maxval.textContent = rentals[i].max;
                valmax.textContent = "Max Persons";
                halfresval.textContent = rentals[i].price.reserve.half;
                reshalf.textContent = "Half Day with Reservation";
                fullresval.textContent = rentals[i].price.reserve.full;
                resfull.textContent = "Full Day with Reservation";
                halfwalkval.textContent = rentals[i].price.walk.half;
                walkhalf.textContent = "Half Day Walk In";
                fullwalkval.textContent = rentals[i].price.walk.full;
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