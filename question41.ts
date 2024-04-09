// Magicians

let magicians: string[] = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];


let showMagicians = (array: string[]): void => {
    array.forEach((magician: string ,idx: number) => {
        console.log(`${idx + 1}) ${magician}`);
    });
};


showMagicians(magicians);