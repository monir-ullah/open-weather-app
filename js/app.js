const apiKey = '03ea5b9c3a64e9823da7c4e9a90d9c66';


const loadData = () =>{
    const takeInputDate = document.getElementById('input-filed-data').value;
    url = ` https://api.openweathermap.org/data/2.5/weather?q=${takeInputDate}&units=metric&appid=${apiKey}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayYourData(data));
    console.log(url)
}
const displayYourData = inputCityName =>{
    const nameOfCity = document.getElementById('city-name-chg');
    nameOfCity.innerText = inputCityName.name;
    const tempareture = document.getElementById('temp');
    tempareture.innerText = inputCityName.main.temp;
    const situation = document.getElementById('status');
    situation.innerText = inputCityName.weather[0].main;
    const icon = document.getElementById('icon');
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${inputCityName.weather[0].icon}@2x.png` );
}