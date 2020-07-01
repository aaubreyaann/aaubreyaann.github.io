const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currDate = new Date()
let day = currDate.getDay()
let date = currDate.getDate()
let month = currDate.getMonth()
let year = currDate.getFullYear()

document.getElementById("current").innerHTML = dayArray[day] + ", " + date + " " + monthArray[month] + ", " + year