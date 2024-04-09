// Cities
var describeCity = function (city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
};
describeCity("Karachi"); // calling function with default country
describeCity("Hyderabad");
describeCity("Delhi", "India"); // calling function with custom country
