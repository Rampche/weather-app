const Search = ({ searchInput, cities, setSearchInput, handleChosenCity }) => {
  const filteredCities =
    cities.length > 0 && searchInput.length > 0
      ? cities.filter(
          (city) =>
            city.local.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        )
      : [];

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="ex. Lisboa"
        value={searchInput}
        onChange={handleChange}
      />
      <div className="cities-list">
        {filteredCities.map((city) => (
          <div key={city.globalIdLocal}>
            <button
              onClick={() => handleChosenCity(city.globalIdLocal, city.local)}
            >
              {city.local}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
