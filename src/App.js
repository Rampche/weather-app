import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import { getCities, getForecast } from "./services/api";
import "./styles/app.scss";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [cities, setCities] = useState([]);
  const [cityForecast, setCityForecast] = useState({ city: "", forecast: [] });

  useEffect(() => {
    getCities().then((response) => setCities(response.data));
  }, []);

  const handleChosenCity = (cityId, city) => {
    setSearchInput("");
    getForecast(cityId).then((response) =>
      setCityForecast({
        city: city,
        forecast: response.data,
      })
    );
  };

  return (
    <div className="app">
      <Search
        searchInput={searchInput}
        cities={cities}
        setSearchInput={setSearchInput}
        handleChosenCity={handleChosenCity}
      />
      <Forecast cityForecast={cityForecast} />
    </div>
  );
};

export default App;
