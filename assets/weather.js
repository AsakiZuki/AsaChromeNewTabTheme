//Weather
navigator.geolocation.getCurrentPosition(getPosition);
function permissionsChecked() {
    navigator.permissions.query({
        name: 'geolocation'
    }).then(function (result) {
        if ((result.state === 'prompt') || (result.state === 'denied')) {
            document.getElementById("weather_panel").style.visibility = 'hidden'
        } else {
            document.getElementById("weather_panel").style.visibility = 'visible'
        }
    });
}
setTimeout(permissionsChecked, 1);

async function getPosition(position) {
    permissionsChecked();
    var latitudePosition = position.coords.latitude;
    var longitudePosition = position.coords.longitude;

    asaWeaData = async () => {
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitudePosition}&lon=${longitudePosition}&appid=f99b1ac3b49fff7158ba52d118277fd8&units=metric`);
        const asaData = await weatherRes.json();

        const locationRes = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitudePosition}&lon=${longitudePosition}&appid=f99b1ac3b49fff7158ba52d118277fd8`);
        const asaLocaData = await locationRes.json();

        let asaDataVar = {
            weather: asaData,
            location: asaLocaData
        }

        return asaDataVar;
    }

    asaWeaData().then(data => {
        document.getElementById("weatherTemperature").innerHTML = `${Math.floor(data.weather.main.temp)}°C`;
        document.getElementById("weather_icons").src = `http://openweathermap.org/img/w/${data.weather.weather[0].icon}.png`;
        document.getElementById("weatherCity").innerHTML = `${data.location[0].local_names.en}`;
    })
}