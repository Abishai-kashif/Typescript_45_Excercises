// Great Magicians

let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];


let showMagicians = (array: string[]): void => {
    array.forEach((magician: string ,idx: number) => {
        console.log(`${idx + 1}) ${magician}.`);
    });
};


let makeGreat = (magicians: string[]): void => {
    magicians.forEach((magician: string) => {
        magicians.splice(magicians.indexOf(magician) ,1 ,`The Great ${magician}`)
    });
};


makeGreat(magicians);//modifies original array
showMagicians(magicians); //show modified names