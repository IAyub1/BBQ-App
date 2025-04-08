function buildForecastURL(city, apiKey) {
    return `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=${apiKey}`;
}

function extractForecastData(data) {
return {
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
}
  

if (typeof module !== 'undefined') {
module.exports = { buildForecastURL, extractForecastData };
}
  