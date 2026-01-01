

// Get the artist data list
// Get the DOM container
// With the artist data list, loop: prep the html base, insert the image URL, name, social link

const artist_container = document.querySelector('#ArtistCollection');
artistImgDir = "avatars/";  // we overwrite this to do local testing & skip hardcoded addressing
artist_container.innerHTML = '';
const unk_artist = 'UNDF';
const open_artist = 'OPEN';
const unk_img = GetArtistImagePath(GetArtistData(unk_artist));
var count = 0;

artists.forEach(artist => {
    // Prepare the HTML block corresponding to an area and its associated credts
    if (artist.uniqueId != unk_artist && artist.uniqueId != open_artist)
    {
        // Prep medal collection
        var medals = ``;
        artist.redraws.forEach(redraw =>
        {
            var image_name = "";
            var image_alt = "";
            switch (redraw)
            {
                case ("CAST"):
                    image_name = "medal_castlev.png";
                    image_alt = "Castlevania Redrawn Participant";
                    break;
                case ("HYRU"):
                    image_name = "medal_tloz.png";
                    image_alt = "Hyrule Redrawn Participant";
                    break;
                case ("JOHT"):
                    image_name = "medal_johto.png";
                    image_alt = "Johto Redrawn Participant";
                    break;
                case ("KANT"):
                    image_name = "medal_kanto.png";
                    image_alt = "Kanto Redrawn Participant";
                    break;
                case ("KOHO"):
                    image_name = "medal_koho.png";
                    image_alt = "Koholint Redrawn Participant";
                    break;
                case ("KRBA"):
                    image_name = "medal_kirby.png";
                    image_alt = "Kirby's Adventure Redrawn Participant";
                    break;
                case ("MEG2"):
                    image_name = "medal_mm2.png";
                    image_alt = "Mega Man 2 Redrawn Participant";
                    break;
                case ("PIKM"):
                    image_name = "medal_pikmin.png";
                    image_alt = "Pikmin Redrawn Participant";
                    break;
                case ("SMB3"):
                    image_name = "medal_smb3.png";
                    image_alt = "Super Mario Bros 3 Redrawn Participant";
                    break;
            }

            medals += `<img src="medals/${image_name}" class="medal-img" title="${image_alt}">`
        });
        
        var art_img = GetArtistImagePath(artist);
        art_img = art_img == '' ? unk_img : art_img;
        var html = 
        `<div class="col-sm-2">
            <a href="${artist.url}" target="_blank" >
            <img src="${art_img}" class="thumb-img" onerror="this.onerror=null; this.src='${unk_img}';" alt="Avatar for ${artist.name}">
            <p class="ArtistName">${artist.name}</h1>
            </a><br>
            ${medals}
        </div>`
        artist_container.innerHTML += html
        count++;
    }
});

const artist_count = document.querySelector('#ArtistCount');
artist_count.innerHTML = `Total Artists: ${count}`
