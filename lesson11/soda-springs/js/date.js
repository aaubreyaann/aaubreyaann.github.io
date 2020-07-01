const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currDate = new Date()
let day = currDate.getDay()
let date = currDate.getDate()
let month = currDate.getMonth()
let year = currDate.getFullYear()

document.getElementById("current").innerHTML = dayArray[day] + ", " + date + " " + monthArray[month] + ", " + year


addBanner = document.querySelector(".friday")
if (day == 5) {
    addBanner.style.display = "block"
}

let forecastDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat","Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

for (i = 0; i < 5; i++) {
    let forDay = day + i + 1;
    let name = "day" + i;
    document.getElementById(name).textContent = forecastDay[forDay];
}