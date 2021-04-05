const form =  document.querySelector("#form");

const getDetails = async(cityName) => {
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=95c9f49d07636f2b01a4d217f6ad8f50`
    fetch(url)
        .then(weather => {
            return weather.json();
        }).then(displayData);



        function displayData (weather) {
            let city = document.querySelector('.location .city');
            city.innerText = `${weather.name}, ${weather.sys.country}`;
          
            let now = new Date();
            let date = document.querySelector('.location .date');
            date.innerText = dateBuilder(now);
          
            let temp = document.querySelector('.current .temp');
            temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
          
            let weather_el = document.querySelector('.current .weather');
            weather_el.innerText = weather.weather[0].main;
          
            let hilow = document.querySelector('.hi-low');
            hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
          }
        
        
        function dateBuilder (d) {
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
          
            return `${day} ${date} ${month} ${year}`;
          }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.dir(form.elements[0].value);

    const cityName = form.elements[0].value;

    getDetails(cityName);

    form.elements[0].value='';
}) 

