/// Album

let makeAlbum = (artist: string ,title: string ,tracks?: number): object => {

    let album: object = {artist ,title}; /* automatically assigning values using 
                                            "object property shorthand" aproach.*/
    if (tracks) {
        album["tracks"] = tracks;
    };
       
    return album;

};

console.log(makeAlbum("Artist One", "The First Album"));
console.log(makeAlbum("Artist Two", "The Second Album"));
console.log(makeAlbum("Artist Three", "The Third Album", 12));