// Unchanged Magicians


let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];


let showMagicians = (array: string[]): void => {

    array.forEach((magician: string ,idx: number) => {
        console.log(`${idx + 1}) ${magician}.`);
    });
};

//func returns copy of array
let makeGreat = (array: string[]): string[] => {
    return array.map((magician: string) => `The Great ${magician}`); 
};


let greatMagicians: string[] = makeGreat([...magicians]); //callng func with copy of array


console.log("\n\tOriginal Magicians:");
showMagicians(magicians); //  show original original names

console.log("\n\tGreat Magicians:");
showMagicians(greatMagicians); // show modified names