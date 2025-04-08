const { buildForecastURL, extractForecastData } = require('./index');

test("jest is working", () => {
    expect(2+2).toBe(4);
});

describe('buildForecastURL', () => {
    it('returns correct URL string', () => {
      const url = buildForecastURL('London', 'TEST123');
      expect(url).toBe('https://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=5&appid=TEST123');
    });
  });
  
  describe('extractForecastData', () => {
    it('returns correct object from sample data', () => {
      const mockData = {
        list: [
          { dt: 1712505600, temp: { day: 20 } },
          { dt: 1712592000, temp: { day: 21 } },
          { dt: 1712678400, temp: { day: 22 } },
          { dt: 1712764800, temp: { day: 23 } },
          { dt: 1712851200, temp: { day: 24 } }
        ]
      };
      const result = extractForecastData(mockData);
      expect(result.day1Weather).toEqual({ day: 20 });
      expect(result.day5Weather).toEqual({ day: 24 });
    });
  });