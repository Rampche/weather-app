const baseUrl = "https://api.ipma.pt/open-data";

export const getCities = () =>
  fetch(`${baseUrl}/distrits-islands.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));

export const getForecast = (globalIdLocal) =>
  fetch(`${baseUrl}/forecast/meteorology/cities/daily/${globalIdLocal}.json`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
