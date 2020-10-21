let id = '501175',
    units = 'metric',
    lang = 'ru',
    // apiKey = 'f09062d43e6b22ad11f62c1decc61a8e';
    apiKey = '93264d36a013263b0e997f9dcbff20aa';


let img = document.querySelector('img')

fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=${units}&lang=${lang}&appid=${apiKey}`, {

})
.then(response => {
    return response.json();
})
    .then(data => {
        console.log(data)
        document.querySelector('.card-text').innerHTML = data.main.temp + '&deg' + 'C';
        document.querySelector('.card-title').innerHTML = data.weather[0].description ;
        img.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })
    .catch(err => {
        console.error(err);
    });


let date = new Date();
let today = date.getDay();
let num_days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let day_week = num_days[today]


function getZero(num) {
    if (num >= 0 && num <= 9){
        return '0' + num
    }else{
        return num
    }
}

let year = getZero(date.getFullYear()),
    month = getZero(date.getMonth()),
    day = getZero(date.getDate());

let showDate = document.querySelector('.card-header');
showDate.innerHTML = `Сегодня ${day}.${month}.${year},  ${day_week}`;
