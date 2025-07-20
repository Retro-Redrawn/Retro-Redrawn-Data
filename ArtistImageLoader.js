

// Get the artist data list
// Get the DOM container
// With the artist data list, loop: prep the html base, insert the image URL, name, social link

const artist_container = document.querySelector('#ArtistCollection');
artist_container.innerHTML = '';
const unk_img = GetArtistImagePath(GetArtistData('UNDF'));
var count = 0;

artists.forEach(artist => {
    // Prepare the HTML block corresponding to an area and its associated credts
    var art_img = GetArtistImagePath(artist);
    art_img = art_img == '' ? unk_img : art_img;
    var html = 
    `<div class="col-sm-2">
        <a href="${artist.url}" target="_blank" >
        <img src="${art_img}" class="thumb-img" onerror="this.onerror=null; this.src='${unk_img}';" alt="Avatar for ${artist.name}">
        <p class="ArtistName">${artist.name}</h1>
        </a>
    </div>`
    artist_container.innerHTML += html
    count++;
});

const artist_count = document.querySelector('#ArtistCount');
artist_count.innerHTML = `Total Artists: ${count}`
