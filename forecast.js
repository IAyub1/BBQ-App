document.addEventListener("DOMContentLoaded", () => {
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (!weatherData) {
        document.getElementById("weather").innerHTML = "No weather data available.";
        return;
    }
    document.getElementById("day1").innerHTML = `
        <h3>${weatherData.day1}</h3>
        <p>${weatherData.day1Weather.day > 20 ? '🔥' : '❌'}</p>
    `;
    document.getElementById("day2").innerHTML = `
        <h3>${weatherData.day2}</h3>
        <p>${weatherData.day2Weather.day > 20 ? '🔥' : '❌'}</p>
    `;
    document.getElementById("day3").innerHTML = `
        <h3>${weatherData.day3}</h3>
        <p>${weatherData.day3Weather.day > 20 ? '🔥' : '❌'}</p>
    `;
    document.getElementById("day4").innerHTML = `
        <h3>${weatherData.day4}</h3>
        <p>${weatherData.day4Weather.day > 20 ? '🔥' : '❌'}</p>
    `;
    document.getElementById("day5").innerHTML = `
        <h3>${weatherData.day5}</h3>
        <p>${weatherData.day5Weather.day > 20 ? '🔥' : '❌'}</p>
    `;
});