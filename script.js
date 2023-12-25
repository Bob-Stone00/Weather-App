let weatherimg = document.getElementById("weather-image")
let temperature = document.getElementById("temperature")

temperature = 26

/*
if ( temperature < 25)
{
    weatherimg.src = "windy.jpg"
} else {
    weatherimg.src = "pexels-lukas-296234.jpg"
}
*/

const currentTime = new Date()
const currentHour = currentTime.getHours() 
const currentMinutes = currentTime.getMinutes()
const currentDay = currentTime.getDay()

let nowtime = document.getElementById("nowtime")
nowtime.textContent = `${currentHour}:${currentMinutes}`

for ( let i = 0; i < 7; i++){
    const timeday = document.querySelectorAll("#day")[i]
    timeday.textContent = currentHour + i + ":00"

    let icon = document.querySelectorAll("#icon")[i]
    //let icon2 = document.querySelectorAll("#icon2")[i]

    /*if (timeday < 18 || timeday > 6) {
        icon.src = "bxs-moon.svg";
    } else {
        icon.src = "bxs-sun.svg";
    }
    */
    

    

    const dayOfWeek = ['Sun','Mon','Tue','Wed',
    'Thur','Fri','Sat']

    const dayweek = document.querySelectorAll("#day-week")[i]
    const indextoshow = (currentDay + i) % 7
    const dayName = dayOfWeek[indextoshow]

    dayweek.textContent = dayName
    
}

/*if (currentHour < 18) 
{
    weatherimg.src = "pexels-neale-lasalle-631477.jpg"

} else 
{
    weatherimg.src = "maxresdefault.jpg"
}
*/









