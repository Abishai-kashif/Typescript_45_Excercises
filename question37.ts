//Large T-Shirt


//giving default values
let makeShirt = (size: string = "large" ,text: string = "I love Typescript"): void => {

    console.log(`Making a ${size} t-shirt with the message "${text}" printed on it.`);   
};


makeShirt(); //making with default values
makeShirt("medium"); // making a medium shirt with default message
makeShirt("small" ,"Typescript is awesome"); // making a small shirt with custom message.