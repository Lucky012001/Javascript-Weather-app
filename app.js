const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
     return showWeather(data)
     //  console.log(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
     
    // if(data.weather[0].main=="Clouds"){
    //     var img1 = document.createElement("img");
    //     img1.src = "cd.gif"; 
    //     document.body.style.backgroundImage = "url('image/cd.gif')";
    //     }
    // else  if(data.weather[0].main=="Haze"){
    //         var img1 = document.createElement("img");
    //         img1.src = "cdg.gif"; 
    //         document.body.style.backgroundImage = "url('image/cdg.gif')";
    //         }
            
    // else  if(data.weather[0].main=="Clear"){
    //         var img1 = document.createElement("img");
    //         img1.src = "k.jpg"; 
    //         document.body.style.backgroundImage = "url('image/k.jpg')";
    //         } 
            
    // else  if(data.weather[0].main=="Mist"){
    //         var img1 = document.createElement("img");
    //         img1.src = "mist.jpg"; 
    //         document.body.style.backgroundImage = "url('image/mist.jpg')";
    //         } 
    // else  if(data.weather[0].main=="Rain"){
    //         var img1 = document.createElement("img");
    //         img1.src = "rain.jpg"; 
    //         document.body.style.backgroundImage = "url('image/rain.jpg')";
    //         }        

    weather.innerHTML =`
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4> 
            <h5><p>Feels like<p>${data.main.feels_like}</h5>          
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)

