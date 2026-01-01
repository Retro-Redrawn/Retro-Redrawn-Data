
var dataSources = [
    {
        medal: "medals/medal_castlev.png",
        src: ["https://retroredrawn.com/castlevania/areas.js"]
    },
    {
        medal: "medals/medal_kanto.png",
        src: [
            "https://retroredrawn.com/kanto/areas_interiors.js",
            "https://retroredrawn.com/kanto/areas_outdoors.js",
            "https://retroredrawn.com/kanto/areas_sevii.js",
        ]
    },
    /*
    {
        medal: "medals/medal_johto.png",
        src: [
            "https://retroredrawn.com/johto/areas_interiors.js",
            "https://retroredrawn.com/johto/areas_outdoors.js",
        ]
    },
    {
        medal: "medals/medal_koho.png",
        src: ["https://retroredrawn.com/koholint/areas.js"]
    },
    {
        medal: "medals/medal_smb3.png",
        src: ["https://retroredrawn.com/supermario3/areas.js"]
    },
    {
        medal: "medals/medal_tloz.png",
        src: ["area_data/tloz_areas.js"]
    },
    */
    /*
    {
        medal: "medals/medal_kirby.png",
        src: ["https://retroredrawn.com/kirby/areas.js"]
    },
    {
        medal: "medals/medal_mm2.png",
        src: ["https://retroredrawn.com/mm2/areas.js"]
    },
    {
        medal: "medals/medal_pikmin.png",
        src: ["https://retroredrawn.com/pikmin/areas.js"]
    },
    */
]

var template = [
    {
        name : "The name of the artist, for string display", 
        imageNameOverride: "The name of the artist for their avatar data",
        uniqueId: "Unique identifier code used in case of dupes or name changes; standard is 4 characters, 0 for spaces, _X for common 4 letter codes",
        url: "Ideally a link hub to avoid constant updates."
    }
];