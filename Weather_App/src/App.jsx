import { useEffect, useState } from 'react';

function App(){
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMsg('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setErrorMsg('Permission denied. Cannot access location.');
      }
    );
  }, []);

  useEffect(() => {
    if (!coords) return;

    const apiKey = '36dab51e01cbead0b043e6249a6ee8c5';

    const fetchWeather = async () => {
      try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);

      } catch (error) {
      setErrorMsg('Failed to fetch weather data');
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 60000); 

    return () => clearInterval(interval);
  }, [coords]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">Weather App</h1>

        { errorMsg ? (
          <div className="text-center text-red-500 font-medium">{errorMsg}</div>
        ) : (
          weather && (
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-semibold text-blue-500">{weather.name}</h2>
              <p className="text-gray-600 capitalize">{weather.weather[0].description}</p>
              <p className="text-5xl text-blue-500 font-bold">
                {Math.round(weather.main.temp)}°C
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Feels like</p>
                  <p>{Math.round(weather.main.feels_like)}°C</p>
                </div>
                <div>
                  <p className="font-medium">Humidity</p>
                  <p>{weather.main.humidity}%</p>
                </div>
                <div>
                  <p className="font-medium">Wind Speed</p>
                  <p>{weather.wind.speed} m/s</p>
                </div>
                <div>
                  <p className="font-medium">Pressure</p>
                  <p>{weather.main.pressure} hPa</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;