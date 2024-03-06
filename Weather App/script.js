// app.js

const app = new Vue({
    el: '#app',
    data: {
      view: 'statistics', // Initial view
      averageTemperature: 25,
      highestTemperature: 30,
      lowestTemperature: 20,
      averageHumidity: 70,
      highestHumidity: 80,
      lowestHumidity: 60,
      warmestTime: '12:00 PM',
      coldestTime: '3:00 AM',
      hourlyWeather: [
        { icon: '☀️', description: 'Sunny', dateTime: '2024-02-17 12:00 PM', temperature: 25, humidity: 70, windSpeed: 5 },
        { icon: '🌧️', description: 'Rainy', dateTime: '2024-02-17 3:00 PM', temperature: 22, humidity: 75, windSpeed: 7 },
        { icon: '☁️', description: 'Cloudy', dateTime: '2024-02-17 6:00 PM', temperature: 20, humidity: 80, windSpeed: 4 },
        // Add more hourly weather data as needed
      ]
    }
  });
  