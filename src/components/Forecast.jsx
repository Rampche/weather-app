const Forecast = ({ cityForecast }) => {
  const { city, forecast } = cityForecast;

  return (
    <>
      <div className="forecast-title">{city}</div>
      <div className="forecast">
        {forecast.map((day) => {
          return (
            <div className="day" key={day.forecastDate}>
              <div>{day.forecastDate}</div>
              
              <div>T°C Max {day.tMax}</div>
              <div>T°C Min {day.tMin}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Forecast;
