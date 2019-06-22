const cities = require("./data/cities.json");
const countries = require("./data/countries.json");

export function getAllCities() {
  return cities;
}

export function getAllCountries() {
  return countries;
}

/**
 *
 * @param {Code of the Country} countryCode
 */
export function getCountryDetailsByCode(countryCode) {
  console.log(countries[countryCode], "here");
  return countries[countryCode];
}
