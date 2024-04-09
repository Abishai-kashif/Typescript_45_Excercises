// Cities

let describeCity = (city: string ,country: string = "Pakistan"): void => {
    console.log(`${city} is in ${country}.`);
};

describeCity("Karachi"); // calling function with default country
describeCity("Hyderabad"); 
describeCity("Delhi","India"); // calling function with custom country