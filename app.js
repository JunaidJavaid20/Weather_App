let getWeather = ()=>{
    let c_name = document.querySelector("#inp").value
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=3f7877f8ebe16c53f9790cade7096986`)
    .then((response)=>{
        // console.log(response.data.main.temp)
        // console.log(response.data.main.humidity)
        // console.log(response.data.main.temp_max)
        // console.log(response.data.main.temp_min)
        document.querySelector("#temp").innerHTML ="<center>" + "Temperature is : " + response.data.main.temp + "</center>"
        document.querySelector("#humidity").innerHTML = "<center>" +  "Humidity is : "  +  response.data.main.humidity + "</center>"
        document.querySelector("#temp_max").innerHTML = "<center>" +  "Temperature_Max is : "  +  response.data.main.temp_max + "</center>"
        document.querySelector("#temp_min").innerHTML = "<center>" +  "Temperature_Min is : "  +  response.data.main.temp_min + "</center>"
    })
    .catch((error)=>{
        document.write(error)
    })
}