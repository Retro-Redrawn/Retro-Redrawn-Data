//import artistsData from './artistData.json';
const artistImgDir = "https://vulture-boy.github.io/Retro-Redrawn-Data/avatars/";
const artistImgExtension = ".png";

/** Fetches the data for an artist */
function GetArtistData(artistID) {
    artistsData.artists.forEach(artistData => {
        if (artistData.uniqueId == artistID) {
            return artistData;
        }
    });

    return null;
}

/** Prepares the path string to the artist image. */
function GetArtistImagePath(artistData) {
    var areaArtistImage = artistData.name;
    if (!(artistData.imageNameOverride === '')) {
        areaArtistImage = artistData.imageNameOverride;
    }
    if (areaArtistImage === '') {
        return '';
    }
    return artistImgDir + areaArtistImage + artistImgExtension;
}