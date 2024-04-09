/// Album
var makeAlbum = function (artist, title, tracks) {
    var album = { artist: artist, title: title }; /* automatically assigning values using
                                            "object property shorthand" aproach.*/
    if (tracks) {
        album["tracks"] = tracks;
    }
    ;
    return album;
};
console.log(makeAlbum("Artist One", "The First Album"));
console.log(makeAlbum("Artist Two", "The Second Album"));
console.log(makeAlbum("Artist Three", "The Third Album", 12));
