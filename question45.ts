// Cars

let makeCar = (manufacturer: string ,model: string ,...more: [string ,any][]): any => {
    
    let car: any = {manufacturer ,model};
    // It will dynamically add properties to the object if provided.
    more.forEach(([key ,value]) => car[key] = value);
    return car;
};


console.log(makeCar("Mehran" ,"X5"));
console.log(makeCar("BMW" ,"M5" ,["color" ,"black"] ,["year" ,2020]));
console.log(makeCar("Audi" ,"A6" ,["color" ,"blue"] ,["year" ,2021] ,["transmission" ,"automatic"] ,["drive" ,"4x4"]));


