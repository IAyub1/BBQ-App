document.getElementById("forecast-button").addEventListener("click", async () => {
    const city = document.getElementById("location-input").value;
    const API_KEY = '5ef53af545dd04589b5c843faae7edef';

    if (!city) {
        alert("Please enter a city.");
        return;
    }

    try {
        const response2 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
        if (!response2.ok) throw new Error("City not found");
        const data2 = await response2.json();

        const lat = data2[0].lat;
        const lon = data2[0].lon;

        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=5&appid=${API_KEY}`);
        const data = await response.json();

        const weatherData = {
            day1: new Date(1000 * data.list[0].dt).toLocaleDateString('en-us', { weekday: 'short' }),
            day1Weather: data.list[0].temp,
            day2: new Date(1000 * data.list[1].dt).toLocaleDateString('en-us', { weekday: 'short' }),
            day2Weather: data.list[1].temp,
            day3: new Date(1000 * data.list[2].dt).toLocaleDateString('en-us', { weekday: 'short' }),
            day3Weather: data.list[2].temp,
            day4: new Date(1000 * data.list[3].dt).toLocaleDateString('en-us', { weekday: 'short' }),
            day4Weather: data.list[3].temp,
            day5: new Date(1000 * data.list[4].dt).toLocaleDateString('en-us', { weekday: 'short' }),
            day5Weather: data.list[4].temp
        };

        localStorage.setItem("weatherData", JSON.stringify(weatherData));
        window.location.href = "forecast.html";
    } catch (error) {
        console.error(error);
        alert("Failed to fetch weather. Please check the city name.");
    }
});

document.getElementById("timer-button").addEventListener("click", () => {
    const timerValue = document.getElementById("timer-input").value;
    if (!timerValue) {
        alert("Please set a timer.");
        return;
    }

    localStorage.setItem("timerValue", timerValue);
    window.location.href = "timer.html";
});