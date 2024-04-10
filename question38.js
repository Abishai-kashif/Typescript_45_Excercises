"use strict";
// Cities
let describeCity = (city, country = "Pakistan") => {
    console.log(`${city} is in ${country}.`);
};
describeCity("Karachi"); // calling function with default country
describeCity("Hyderabad");
describeCity("Delhi", "India"); // calling function with custom country
