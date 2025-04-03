document.getElementById("forecast-button").addEventListener("click", async () => {
    const city = document.getElementById("location-input").value;
    const API_KEY = '5ef53af545dd04589b5c843faae7edef';

    if (!city) {
        alert("Please enter a city.");
        return;}
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=${API_KEY}`);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();

        const weatherData = {
            day1: new Date(1000 * data.list[0].dt).toLocaleDateString('en-us', { weekday: 'short' }),
            day1Weather: data.list[0].temp}
    
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
    window.location.href = "forecast.html";
})