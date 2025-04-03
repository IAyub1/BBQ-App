document.addEventListener("DOMContentLoaded", () => {
    const weatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (!weatherData) {
        document.getElementById("weather").innerHTML = "No weather data available.";
        return;
    }

    document.getElementById("day1").innerHTML = `
        <h3>${weatherData.day1}</h3>
        <p>${weatherData.day1Weather.day}°C</p>
    `;
});