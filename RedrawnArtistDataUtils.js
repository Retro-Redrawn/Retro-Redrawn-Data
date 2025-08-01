//import artistsData from './artistData.json';
//const artistImgDir = "https://retro-redrawn.github.io/Retro-Redrawn-Data/avatars/";
const artistImgDir = "avatars/";
const artistImgExtension = ".png";

/** Fetches the data for an artist */
function GetArtistData(artistID) {
    var data = null;
    artists.forEach(artistData => {
        if (artistData.uniqueId === artistID) {
            data = artistData;
        }
    });

    return data;
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