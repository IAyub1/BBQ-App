const city = 'London';
const API_KEY = '5ef53af545dd04589b5c843faae7edef';

   
const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=${API_KEY}`);
if (!response.ok) throw new Error("City not found");
const data = await response.json();
const weatherData = {
	day1: new Date(1000 * data.list[0].dt).toLocaleDateString('en-us', { weekday: 'short' }),
	day1Weather: data.list[0].temp
};
