

// Get the artist data list
// Get the DOM container
// With the artist data list, loop: prep the html base, insert the image URL, name, social link

var artist_container = document.querySelector('#ArtistCollection');
artist_container.innerHTML = '';

artists.forEach(artist => {
    // Prepare the HTML block corresponding to an area and its associated credts
    var html = 
    `<div class="col-sm-1">
        <a href="${artist.url}" target="_blank" >
        <img src="${GetArtistImagePath(artist)}" class="thumb-img">
        <p class="ArtistName">${artist.name}</h1>
        </a>
    </div>`
    artist_container.innerHTML += html
});

