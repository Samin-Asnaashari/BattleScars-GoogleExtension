const countriesCitiesDB = require("./data/countriesCities-db.json");

export function getAllCountriesCitiesDB() {
  return countriesCitiesDB;
}

// TEST
// const countriesOrCities = [];
// countriesCitiesDB.map(item => {
//     countriesOrCities.push({
//       ...city,
//       value: `${city.city} (${city.country})`,
//       label: `${city.city} (${city.country})`
//     });
// });
// const fs = require("fs");
// var path = require("path");
// var path = require("process");
// fs.writeFile(
//   "./test.json",
//   JSON.stringify(countriesOrCities, null, 4),
//   function(err) {
//     console.log("Saved!");
//     console.log(process.cwd(), "path");
//   }
// );
