

// Get the artist data list
// Get the DOM container
// With the artist data list, loop: prep the html base, insert the image URL, name, social link

const artist_container = document.querySelector('#ArtistCollection');
artistImgDir = "avatars/";  // we overwrite this to do local testing & skip hardcoded addressing
artist_container.innerHTML = '';
const unk_artist = 'UNDF';
const open_artist = 'OPEN';
const unk_img = GetArtistImagePath(GetArtistData(unk_artist));
const redrawDetails = {
    CAST: { image: "medal_castlev.png", name: "Castlevania Redrawn Participant", projectName: "Castlevania Redrawn" },
    HYRU: { image: "medal_tloz.png", name: "Hyrule Redrawn Participant", projectName: "Hyrule Redrawn" },
    JOHT: { image: "medal_johto.png", name: "Johto Redrawn Participant", projectName: "Johto Redrawn" },
    KANT: { image: "medal_kanto.png", name: "Kanto Redrawn Participant", projectName: "Kanto Redrawn" },
    KOHO: { image: "medal_koho.png", name: "Koholint Redrawn Participant", projectName: "Koholint Redrawn" },
    KRBA: { image: "medal_kirby.png", name: "Kirby's Adventure Redrawn Participant", projectName: "Kirby's Adventure Redrawn" },
    MEG2: { image: "medal_mm2.png", name: "Mega Man 2 Redrawn Participant", projectName: "Mega Man 2 Redrawn" },
    PIKM: { image: "medal_pikmin.png", name: "Pikmin Redrawn Participant", projectName: "Pikmin Redrawn" },
    SMB3: { image: "medal_smb3.png", name: "Super Mario Bros 3 Redrawn Participant", projectName: "Super Mario Bros 3 Redrawn" },
    SONP: { image: "medal_sonicp.png", name: "Sonic Pocket Adventure Redrawn Participant", projectName: "Sonic Pocket Adventure Redrawn" },
    PTCG: { image: "medal_ptcg.png", name: "Pokémon TCG New Deck+ Participant", projectName: "Pokémon TCG New Deck+ Mod Card Gallery" }
};
const artistCards = [];
let count = 0;

artists.forEach(artist => {
    // Prepare the HTML block corresponding to an area and its associated credts
    if (artist.uniqueId != unk_artist && artist.uniqueId != open_artist)
    {
        // Prep medal collection
        var medals = ``;
        artist.redraws.forEach(redraw =>
        {
            const redrawDetail = redrawDetails[redraw] || { image: "", name: "" };
            medals += `<img src="medals/${redrawDetail.image}" class="medal-img" title="${redrawDetail.name}">`
        });
        
        var art_img = GetArtistImagePath(artist);
        art_img = art_img == '' ? unk_img : art_img;
        var html = 
        `<article class="artist-card">
            <a class="artist-profile" href="${artist.url}" target="_blank" rel="noopener noreferrer">
                <img src="${art_img}" class="thumb-img" onerror="this.onerror=null; this.src='${unk_img}';" alt="Avatar for ${artist.name}">
                <span class="ArtistName">${artist.name}</span>
            </a>
            <div class="artist-medals">${medals}</div>
        </article>`
        const cardTemplate = document.createElement('template');
        cardTemplate.innerHTML = html;
        const card = cardTemplate.content.firstElementChild;
        artistCards.push({ card, artist });
        artist_container.appendChild(card);
        count++;
    }
});

const artist_count = document.querySelector('#ArtistCount');
const redrawn_filter = document.querySelector('#RedrawnFilter');
const artist_sort = document.querySelector('#ArtistSort');

Object.entries(redrawDetails).forEach(([code, details]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = details.projectName;
    redrawn_filter.appendChild(option);
});

function updateArtistCollection() {
    const selectedRedrawn = redrawn_filter.value;
    const sortMode = artist_sort.value;
    const alphabetical = (a, b) => a.artist.name.localeCompare(b.artist.name, undefined, { sensitivity: 'base', numeric: true });
    const sortedCards = [...artistCards].sort((a, b) => {
        if (sortMode === 'medals') {
            return b.artist.redraws.length - a.artist.redraws.length || alphabetical(a, b);
        }
        if (sortMode === 'reverseAlphabetical') {
            return -alphabetical(a, b);
        }
        return alphabetical(a, b);
    });
    let visibleCount = 0;

    sortedCards.forEach(({ card, artist }) => {
        const isVisible = selectedRedrawn === 'all' || artist.redraws.includes(selectedRedrawn);
        card.hidden = !isVisible;
        if (isVisible) {
            visibleCount++;
        }
        artist_container.appendChild(card);
    });

    artist_count.textContent = selectedRedrawn === 'all'
        ? `Total Artists: ${visibleCount}`
        : `Total Artists: ${visibleCount}/${count}`;
}

redrawn_filter.addEventListener('change', updateArtistCollection);
artist_sort.addEventListener('change', updateArtistCollection);
updateArtistCollection();
