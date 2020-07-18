const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let currDate = new Date()
let fiveDate = new Date()
fiveDate.setDate(fiveDate.getDate()+5);
function setDate(setting, iden) {
    let day = setting.getDay()
    let date = setting.getDate()
    let month = setting.getMonth()
    let year = setting.getFullYear()
    document.getElementById(iden).innerHTML = dayArray[day] + ", " + date + " " + monthArray[month] + ", " + year
}
setDate(currDate, "date")
setDate(fiveDate, "date-5")