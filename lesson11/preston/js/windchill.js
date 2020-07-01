
let speed = parseInt(document.getElementById("wind-speed").textContent);
let temp = parseInt(document.getElementById("temperature").textContent);

if (temp <= 50 & speed >= 3) {
    document.getElementsByClassName("degrees")[0].classList.toggle("noDegrees");
    let windChill = 35.74 + (0.6215 * temp) - (35.75 * (speed**0.16)) + (0.4275 * temp * (speed**0.16))
    let wC = windChill.toFixed()
    document.getElementById("chill").textContent = wC
}
else {
    /*document.getElementsByClassName("degrees").classList.toggle("noDegrees");*/
    let wC = "N/A"
    document.getElementById("chill").textContent = wC
}



