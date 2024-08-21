
//solicitar nombre y numero de canciones mediante un cuadro de dialogo.
let namePlaylist = prompt('Aqui el nombre de tu playList:');
let numSongs = parseInt(prompt ('¿Cuántas canciones ingresaras?'));

console.log('Nombre de la playList: ' + namePlaylist);
console.log(('cantidad de canciones agregadas: ' + numSongs));

//array que almacena las canciones.
let playList = [];

//bucle for para solicitar y agregar las canciones.
for (let i = 0; i < numSongs; i++) {
    let restSongs = numSongs - i; //canciones restantes
    let song = prompt(`Nombre de la canción (${restSongs} restantes): `); //pide nombre de la cancion e indica la cantidad de canciones a agregar.

    playList.push(song); //agregar la cancion al array.

    console.log('Canciones agregadas: ' + playList.join(', ')); //muesta la playlist actualizada y las canaciones por agregar.
    
}

//mensaje al completar la playlist
alert(`Has llegado al limite de tu PlayList '${namePlaylist}'.`);
console.log(`plaList '${namePlaylist}' completada: `);
console.log(playList.join(', '));



