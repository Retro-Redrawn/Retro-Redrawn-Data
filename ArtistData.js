var template = [
    {
        name : "The name of the artist, for string display", 
        imageNameOverride: "The name of the artist for their avatar data",
        uniqueId: "Unique identifier code used in case of dupes or name changes; standard is 4 characters, 0 for spaces, _X for common 4 letter codes",
        url: "Ideally a link hub to avoid constant updates."
    }
];

var artists = [
    //#region #
    {
        name : "1000_toasters", 
        imageNameOverride: "",
        uniqueId: "1000",
        url: "https://x.com/1000_toasters"
    },
    {
        name : "1Sinvilla", 
        imageNameOverride: "",
        uniqueId: "1SIN",
        url: "https://x.com/1Sinvilla"
    },
    //#endregion
    //#region A
    {
        name : "a chair", 
        imageNameOverride: "achair",
        uniqueId: "ACHA",
        url: ""
    },
    {
        name : "ac2Dart", 
        imageNameOverride: "",
        uniqueId: "AC2D",
        url: "https://x.com/ac2dart"
    },
    {
        name : "Agua Hervida", // aka h2ohervida
        imageNameOverride: "AguaHervida",
        uniqueId: "AGUA",
        url: "https://linktr.ee/AguaHervida"
    },
    {
        name : "Aina", 
        imageNameOverride: "",
        uniqueId: "AINA",
        url: "https://ainasge.carrd.co/"
    },
    {
        name : "Alwore", 
        imageNameOverride: "",
        uniqueId: "ALWO",
        url: "https://x.com/alwore_"
    },
    {
        name : "Anima_nel", 
        imageNameOverride: "",
        uniqueId: "ANIM",
        url: "https://x.com/Anima_nel"
    },
    {
        name : "Arkflinn", 
        imageNameOverride: "",
        uniqueId: "ARKF",
        url: "https://linktr.ee/arkflinn"
    },
    {
        name : "Artificer", 
        imageNameOverride: "",
        uniqueId: "ARTI",
        url: "https://artificer111.carrd.co/"
    },
    {
        name : "ArtOfLaurel", 
        imageNameOverride: "",
        uniqueId: "ARTO",
        url: "https://x.com/ArtOfLaurel"
    },
    {
        name : "Arvy", 
        imageNameOverride: "",
        uniqueId: "ARVY",
        url: "https://x.com/arvydas_b"
    },
    {
        name : "Ashenwater", 
        imageNameOverride: "",
        uniqueId: "ASHE",
        url: "https://linktr.ee/ashenwater"
    },
    {
        name : "Ashton: Retrocade Media", 
        imageNameOverride: "AshtonArnold",
        uniqueId: "ASHT",
        url: "https://bsky.app/profile/retrocademedia.bsky.social"
    },
    {
        name : "Atcero", 
        imageNameOverride: "",
        uniqueId: "ATCE",
        url: "https://bsky.app/profile/atcero.bsky.social"
    },
    {
        name : "AtticusFinn", 
        imageNameOverride: "",
        uniqueId: "ATTI",
        url: "https://linktr.ee/atticusfinn"
    },
    //#endregion
    //#region B
    {
        name : "Backflipsimmons", 
        imageNameOverride: "",
        uniqueId: "BACK",
        url: "https://linktr.ee/backflipsimmons"
    },
    {
        name : "barosaros", 
        imageNameOverride: "",
        uniqueId: "BARO",
        url: "https://bsky.app/profile/barosaros.bsky.social"
    },
    {
        name : "batfeula", 
        imageNameOverride: "",
        uniqueId: "BATF",
        url: "https://bsky.app/profile/batfeula.bsky.social"
    },
    {
        name : "BG", 
        imageNameOverride: "",
        uniqueId: "BG00",
        url: "https://linktr.ee/bg_pixlarnD"
    },
    {
        name : "Beetroot Paul", 
        imageNameOverride: "beetrootpaul",
        uniqueId: "BEET",
        url: "https://beetrootpaul.com/"
    },
    {
        name : "Blam", 
        imageNameOverride: "",
        uniqueId: "BLAM",
        url: "https://x.com/blam_thethird"
    },
    {
        name : "BleuPale", 
        imageNameOverride: "",
        uniqueId: "BLEU",
        url: "https://linktr.ee/bleu_pale"
    },
    {
        name : "blind3dbylight", 
        imageNameOverride: "",
        uniqueId: "BLIN",
        url: "https://linktr.ee/blind3dbylight"
    },
    {
        name : "Blindeduif", 
        imageNameOverride: "",
        uniqueId: "BLIN_2",
        url: "https://linktr.ee/blindeduif"
    },
    {
        name : "Brando",
        imageNameOverride: "",
        uniqueId: "BRAN",
        url: "https://linktr.ee/brandoparm"
    },
    {
        name : "Broken Gamer X",
        imageNameOverride: "BrokenGamerX",
        uniqueId: "BROK",
        url: "https://x.com/BrokengamerX"
    },
    {
        name : "BTdangelo", 
        imageNameOverride: "",
        uniqueId: "BTDA",
        url: "https://linktr.ee/btdangelo"
    },
    //#endregion
    //#region C
    {
        name : "chamomeow", 
        imageNameOverride: "",
        uniqueId: "CHAM",
        url: "https://x.com/chamomeow"
    },
    {
        name : "CheesyPaninie", 
        imageNameOverride: "",
        uniqueId: "CHEE",
        url: "https://x.com/CheesyPaninie"
    },
    {
        name : "Chibi_Jame", 
        imageNameOverride: "",
        uniqueId: "CHIB",
        url: "https://x.com/Chibi_Jame"
    },
    {
        name : "ChJa", 
        imageNameOverride: "",
        uniqueId: "CHJA",
        url: "https://x.com/ChJaPx"
    },
    {
        name : "Chren", 
        imageNameOverride: "",
        uniqueId: "CHRE",
        url: "https://x.com/chreniafoka"
    },
    {
        name : "chromegnomes", 
        imageNameOverride: "",
        uniqueId: "CHRO",
        url: "https://x.com/chromegnomes"
    },
    {
        name : "Chubbo", 
        imageNameOverride: "",
        uniqueId: "CHUB",
        url: "https://www.instagram.com/chubbopx"
    },
    {
        name : "cjlm123", 
        imageNameOverride: "",
        uniqueId: "CJLM",
        url: "https://pixeljoint.com/p/220173.htm"
    },
    {
        name : "ckelsallpxls", 
        imageNameOverride: "",
        uniqueId: "CKEL",
        url: "https://x.com/ckelsallpxls"
    },
    {
        name : "Clarissa", // aka maruki
        imageNameOverride: "",
        uniqueId: "CLAR",
        url: "https://x.com/clarigaricus"
    },
    {
        name : "Coelacamth", 
        imageNameOverride: "",
        uniqueId: "COEL",
        url: "https://bsky.app/profile/coelacamth.bsky.social"
    },
    {
        name : "Corbí", 
        imageNameOverride: "Corbi",
        uniqueId: "CORB",
        url: "https://x.com/VCorbi"
    },
    {
        name : "Crab Maxuwl", 
        imageNameOverride: "CrabMaxuwl",
        uniqueId: "CRAB",
        url: "https://linktr.ee/maxuwlneto0"
    },
    {
        name : "Crimson Kero", // aka Anonymous-Frog
        imageNameOverride: "CrimsonKero",
        uniqueId: "CRIM",
        url: "https://anonymous-frog.newgrounds.com/"
    },
    {
        name : "Crowno", 
        imageNameOverride: "",
        uniqueId: "CROW",
        url: "https://bsky.app/profile/crowno.bsky.social"
    },
    {
        name : "cure_pixel", 
        imageNameOverride: "",
        uniqueId: "CURE_2",
        url: "https://x.com/cure_pixel"
    },
    {
        name : "Curelapse", 
        imageNameOverride: "",
        uniqueId: "CURE",
        url: "https://bsky.app/profile/curelapse.bsky.social"
    },
    //#endregion
    //#region D
    {
        name : "Daizha", // aka scribulls
        imageNameOverride: "",
        uniqueId: "DAIZ",
        url: "https://x.com/scribulls"
    },
    {
        name : "Damian", 
        imageNameOverride: "",
        uniqueId: "DAMI",
        url: "https://x.com/koopajr"
    },
    {
        name : "Dan Velasquez", 
        imageNameOverride: "DanVelasquez",
        uniqueId: "DANV",
        url: "https://linktr.ee/danvelasquezart"
    },
    {
        name : "Daniel Pascal", // aka kinpraw
        imageNameOverride: "DanielPascal",
        uniqueId: "DANI",
        url: "https://kinpraw.carrd.co/"
    },
    {
        name : "DaNinjaManZ", 
        imageNameOverride: "",
        uniqueId: "DANI_2",
        url: "https://bsky.app/profile/daninjamanz.bsky.social"
    },
    {
        name : "Darth_Scorpion", 
        imageNameOverride: "",
        uniqueId: "DART",
        url: "https://darkscorpion19.carrd.co/"
    },
    {
        name : "Dax_zZ", 
        imageNameOverride: "",
        uniqueId: "DAXZ",
        url: "https://x.com/Dax_zZ"
    },
    {
        name : "Daydreamer", 
        imageNameOverride: "",
        uniqueId: "DAYD",
        url: "https://bsky.app/profile/daydreamer94.bsky.social"
    },
    {
        name : "Dema", // aka xtrarare
        imageNameOverride: "",
        uniqueId: "DEMA",
        url: "https://bsky.app/profile/xtrarare.bsky.social"
    },
    {
        name : "DeviFoxx", 
        imageNameOverride: "",
        uniqueId: "DEVI",
        url: "https://bsky.app/profile/devifoxx.bsky.social"
    },
    {
        name : "Dewdneym", // aka Dewndeym 
        imageNameOverride: "",
        uniqueId: "DEWN",
        url: "http://dewdneym.cool/"
    },
    {
        name : "diamchan", 
        imageNameOverride: "",
        uniqueId: "DIAM",
        url: "https://bsky.app/profile/dioshiba.newgrounds.com"
    },
    {
        name : "DioShiba", 
        imageNameOverride: "",
        uniqueId: "DIOS",
        url: "https://bsky.app/profile/dioshiba.newgrounds.com"
    },
    {
        name : "_discocats", 
        imageNameOverride: "discocats",
        uniqueId: "DISC",
        url: "https://x.com/_discocats"
    },
    {
        name : "Don", 
        imageNameOverride: "",
        uniqueId: "DON0",
        url: "https://bsky.app/profile/donpixels.bsky.social"
    },
    {
        name : "DonFastidius", 
        imageNameOverride: "",
        uniqueId: "DONF",
        url: "https://www.instagram.com/donfastidius1337/"
    },
    {
        name : "Donpo", 
        imageNameOverride: "",
        uniqueId: "DONP",
        url: "https://bsky.app/profile/donpixels.bsky.social"
    },
    {
        name : "Dusty", 
        imageNameOverride: "",
        uniqueId: "DUST",
        url: "https://linktr.ee/dustyshouri"
    },
    //#endregion
    //#region E
    {
        name : "EdelweissPkmn", 
        imageNameOverride: "",
        uniqueId: "EDEL",
        url: "https://x.com/EdelweissPkmn"
    },
    {
        name : "Emmazapan", 
        imageNameOverride: "",
        uniqueId: "EMMA",
        url: "https://linktr.ee/emmazapan"
    },
    {
        name : "EnricosUt", 
        imageNameOverride: "",
        uniqueId: "ENRI",
        url: "https://enricosut.carrd.co/"
    },
    {
        name : "Eto2D", 
        imageNameOverride: "",
        uniqueId: "ETO2",
        url: "https://bsky.app/profile/eto2d.bsky.social"
    },
    {
        name : "Etta3413", 
        imageNameOverride: "",
        uniqueId: "ETTA",
        url: "https://x.com/Etta3413"
    },
    //#endregion
    //#region F
    {
        name : "fiopico",
        imageNameOverride: "",
        uniqueId: "FIOP",
        url: "https://x.com/fiopico"
    },
    {
        name : "focara",
        imageNameOverride: "",
        uniqueId: "FOCA",
        url: "https://bsky.app/profile/realfocara.bsky.social"
    },
    {
        name : "Foo", // aka Foofarawr
        imageNameOverride: "",
        uniqueId: "FOOF",
        url: "https://linktr.ee/foofarawr"
    },
    {
        name : "FoxxDrive", 
        imageNameOverride: "",
        uniqueId: "FOXX",
        url: "https://x.com/FoxxDrive"
    },
    {
        name : "Fry",
        imageNameOverride: "",
        uniqueId: "FRY0",
        url: "https://bsky.app/profile/westenfry.bsky.social"
    },
    //#endregion
    //#region G
    {
        name : "GenoCL", 
        imageNameOverride: "",
        uniqueId: "GENO",
        url: "https://genocl.carrd.co/"
    },
    {
        name : "Ghoulee", 
        imageNameOverride: "",
        uniqueId: "GHOU",
        url: "https://bsky.app/profile/ghouleebones.bsky.social"
    },
    {
        name : "gif_not_jiff", 
        imageNameOverride: "",
        uniqueId: "GIFN",
        url: "https://x.com/gif_not_jif"
    },
    {
        name : "GlitchedPie", 
        imageNameOverride: "",
        uniqueId: "GLIT",
        url: "https://bsky.app/profile/glitchedpie.bsky.social"
    },
    //#endregion
    //#region H
    {
        name : "HadianK", 
        imageNameOverride: "",
        uniqueId: "HADI",
        url: "https://x.com/HaddianK"
    },
    {
        name : "Hapiel", 
        imageNameOverride: "",
        uniqueId: "HAPI",
        url: "https://x.com/Hapiel"
    },
    {
        name : "HansDenuevo", 
        imageNameOverride: "",
        uniqueId: "HANS",
        url: "https://bsky.app/profile/hansdenuevo.bsky.social"
    },
    {
        name : "HaywireJo", 
        imageNameOverride: "",
        uniqueId: "HAYW",
        url: "https://haywirejo.com/"
    },
    {
        name : "huttaburger", 
        imageNameOverride: "",
        uniqueId: "HUTT",
        url: "https://x.com/huttaburger"
    },
    {
        name : "HyperJerk", // aka Jerky
        imageNameOverride: "",
        uniqueId: "HYPE",
        url: "https://x.com/HyperJerk"
    },
    //#endregion
    //#region I
    {
        name : "ImionJay", 
        imageNameOverride: "",
        uniqueId: "IMIO",
        url: "https://bsky.app/profile/imionjay.bsky.social"
    },
    {
        name : "incrediblemaker", 
        imageNameOverride: "",
        uniqueId: "INCR",
        url: "https://x.com/incrediblemaker"
    },
    {
        name : "Inter", 
        imageNameOverride: "",
        uniqueId: "INTE",
        url: "https://www.pixiv.net/en/users/110502169"
    },
    {
        name : "ItriPixels", 
        imageNameOverride: "",
        uniqueId: "ITRI",
        url: "https://x.com/ItriPixels"
    },
    //#endregion
    //#region J
    {
        name : "Jaquiox", 
        imageNameOverride: "",
        uniqueId: "JAQU",
        url: "https://www.instagram.com/jaquiox/"
    },
    {
        name : "jammigans", 
        imageNameOverride: "",
        uniqueId: "JAMM",
        url: "https://bio.link/jammigans"
    },
    {
        name : "jdzombi_", 
        imageNameOverride: "",
        uniqueId: "JDZO",
        url: "https://x.com/jdzombi_"
    },
    {
        name : "Jenny", 
        imageNameOverride: "",
        uniqueId: "JENN",
        url: "https://bsky.app/profile/rainovershine.bsky.social"
    },
    {
        name : "Joogleous", 
        imageNameOverride: "",
        uniqueId: "JOOG",
        url: "https://x.com/Joogleous"
    },
    {
        name : "jooniverz", 
        imageNameOverride: "",
        uniqueId: "JOON",
        url: "https://x.com/jooniverz"
    },
    {
        name : "Joules", 
        imageNameOverride: "",
        uniqueId: "JOUL",
        url: "https://bsky.app/profile/joulespixels.bsky.social"
    },
    {
        name : "Juanito", 
        imageNameOverride: "",
        uniqueId: "JUAN",
        url: "https://bsky.app/profile/juanitomedinart.bsky.social"
    },
    {
        name : "JuliaGoodish", 
        imageNameOverride: "",
        uniqueId: "JULI",
        url: "https://x.com/JuliaGoodish"
    },
    {
        name : "Justice8Knight", 
        imageNameOverride: "",
        uniqueId: "JUST",
        url: "https://x.com/Justice8Knight"
    },
    //#endregion
    //#region K
    {
        name : "KarlestonChew", 
        imageNameOverride: "",
        uniqueId: "KARL",
        url: "https://twitter.com/KarlestonChew"
    },
    {
        name : "Kenchinator", 
        imageNameOverride: "",
        uniqueId: "KENC",
        url: "https://x.com/K3nch44"
    },
    {
        name : "Kerrie Lake", 
        imageNameOverride: "KerrieLake",
        uniqueId: "KERR",
        url: "https://bsky.app/profile/kerrielake.bsky.social"
    },
    {
        name : "KhyleThePixelPrince", 
        imageNameOverride: "",
        uniqueId: "KHYL",
        url: "https://twitter.com/KhyleThe"
    },
    {
        name : "kingw", // aka King_Worrell
        imageNameOverride: "",
        uniqueId: "KING",
        url: "https://bsky.app/profile/kingworrell.bsky.social"
    },
    {
        name : "Klardonics", 
        imageNameOverride: "",
        uniqueId: "KLAR",
        url: "https://linktr.ee/Klardonics"
    },
    {
        name : "kohemy", 
        imageNameOverride: "Kohemy",
        uniqueId: "KOHE",
        url: "https://twitter.com/kohemy1"
    },
    {
        name : "Kosena", 
        imageNameOverride: "",
        uniqueId: "KOSE",
        url: "https://twitter.com/KosenaMaster"
    },
    //#endregion
    //#region L
    {
        name : "Lamington", 
        imageNameOverride: "",
        uniqueId: "LAMI",
        url: "https://linktr.ee/lamington"
    },
    {
        name : "Lodeman", // aka MonsterIndieDev
        imageNameOverride: "",
        uniqueId: "LODE",
        url: "https://x.com/MonsterIndieDev"
    },
    {
        name : "Lombre", 
        imageNameOverride: "",
        uniqueId: "LOMB",
        url: "https://twitter.com/ElHombreLombre"
    },
    {
        name : "Looloopaa", 
        imageNameOverride: "",
        uniqueId: "LOOL",
        url: "https://bsky.app/profile/looloopaa.bsky.social"
    },
    {
        name : "LovetheLoveland", 
        imageNameOverride: "",
        uniqueId: "LOVE",
        url: "https://x.com/LovetheLoveland"
    },
    {
        name : "LuisEnr13182831", 
        imageNameOverride: "",
        uniqueId: "LUIS",
        url: "https://x.com/LuisEnr13182831"
    },
    {
        name : "Lyzerus", 
        imageNameOverride: "",
        uniqueId: "LYZE",
        url: "https://x.com/AaronLyzerus"
    },
    //#endregion
    //#region M
    {
        name : "M3ch4 N1nj4", 
        imageNameOverride: "M3ch4N1nj4",
        uniqueId: "M3CH",
        url: "https://bsky.app/profile/m3ch4n1nj4.bsky.social"
    },
    {
        name : "Marceles", 
        imageNameOverride: "",
        uniqueId: "MARC",
        url: "https://twitter.com/marceles_pxl"
    },
    {
        name : "Marina", 
        imageNameOverride: "",
        uniqueId: "MARI",
        url: "https://cringe.ovh/"
    },
    {
        name : "Marmot", 
        imageNameOverride: "",
        uniqueId: "MARM",
        url: "https://bsky.app/profile/aminus.bsky.social"
    },
    {
        name : "MattStov", 
        imageNameOverride: "",
        uniqueId: "MATT",
        url: "https://bsky.app/profile/mattstov.bsky.social"
    },
    {
        name : "Mechano", 
        imageNameOverride: "",
        uniqueId: "MECH",
        url: "https://bsky.app/profile/mechano.bsky.social"
    },
    {
        name : "MegaToon1234", 
        imageNameOverride: "",
        uniqueId: "MEGA",
        url: "https://bsky.app/profile/megatoon1234.bsky.social"
    },
    {
        name : "MetaruPX", 
        imageNameOverride: "",
        uniqueId: "META",
        url: "https://linktr.ee/MetaruPX"
    },
    {
        name : "MHBali", 
        imageNameOverride: "",
        uniqueId: "MHBA",
        url: "https://linktr.ee/mhbali"
    },
    {
        name : "Mikel", 
        imageNameOverride: "",
        uniqueId: "MIKE",
        url: "https://x.com/RomanoOjea"
    },
    {
        name : "MIRAGE", 
        imageNameOverride: "",
        uniqueId: "MIRA",
        url: "https://bsky.app/profile/elmorethemagician.bsky.social"
    },
    {
        name : "MobyPixel", 
        imageNameOverride: "",
        uniqueId: "MOBY",
        url: "https://bsky.app/profile/mobypixel.bsky.social"
    },
    {
        name : "MoriNoAndrei", 
        imageNameOverride: "",
        uniqueId: "MORI",
        url: "https://linktr.ee/MoriNoAndrei"
    },
    {
        name : "MorlockArt", 
        imageNameOverride: "",
        uniqueId: "MORL",
        url: "https://x.com/MorlockArt"
    },
    {
        name : "mysticaldrop", 
        imageNameOverride: "",
        uniqueId: "MYST",
        url: "https://www.instagram.com/mysticaldrop/"
    },
    //#endregion
    //#region N
    {
        name : "natnatart", 
        imageNameOverride: "",
        uniqueId: "NATN",
        url: "https://x.com/natnatart"
    },
    {
        name : "NekoCrocodile", 
        imageNameOverride: "",
        uniqueId: "NEKO",
        url: "https://linktr.ee/nekocrocodile"
    },
    {
        name : "Nekofresa", 
        imageNameOverride: "nekofresa",
        uniqueId: "NEKO_2",
        url: "https://x.com/nekofresa"
    },
    {
        name : "NekuDemon", 
        imageNameOverride: "",
        uniqueId: "NEKU",
        url: "https://bsky.app/profile/nekudemon.bsky.social"
    },
    {
        name : "Ninety", 
        imageNameOverride: "",
        uniqueId: "NINE",
        url: "https://x.com/NinetyDev"
    },
    {
        name : "NOP", 
        imageNameOverride: "",
        uniqueId: "NOP0",
        url: "https://x.com/NOP_Pixels"
    },
    {
        name : "Normal_Neighbor", 
        imageNameOverride: "",
        uniqueId: "NORM",
        url: "https://www.instagram.com/normal_neighbor/"
    },
    //#endregion
    //#region O
    {
        name : "OhNoItsMonroe", 
        imageNameOverride: "",
        uniqueId: "OHNO",
        url: "https://x.com/OhNoItsMonroe"
    },
    {
        name : "Ota", 
        imageNameOverride: "",
        uniqueId: "OTA0",
        url: "https://linktr.ee/otapxl"
    },
    //#endregion
    //#region P
    {
        name : "Paprika_d", 
        imageNameOverride: "",
        uniqueId: "PAPR",
        url: "https://twitter.com/Paprika_d"
    },
    {
        name : "PawkiUwU", 
        imageNameOverride: "",
        uniqueId: "PAWK",
        url: "https://bsky.app/profile/pawkiuwu.bsky.social"
    },
    {
        name : "pedroxturbo", 
        imageNameOverride: "",
        uniqueId: "PEDR",
        url: "https://bsky.app/profile/pedroxturbo.bsky.social"
    },
    {
        name : "Pencilwing", 
        imageNameOverride: "",
        uniqueId: "PENC",
        url: "https://x.com/Pencilwing"
    },
    {
        name : "Pikethorne", 
        imageNameOverride: "",
        uniqueId: "PIKE",
        url: "https://www.pikethorne.net/"
    },
    {
        name : "pinselschubser", 
        imageNameOverride: "",
        uniqueId: "PINS",
        url: "https://x.com/pinselschubser"
    },
    {
        name : "Pixel_Pit", 
        imageNameOverride: "",
        uniqueId: "PIXE_3",
        url: "https://x.com/Pixel_Pit"
    },
    {
        name : "PixelEric", 
        imageNameOverride: "",
        uniqueId: "PIXE_2",
        url: "https://pixeleric.carrd.co/"
    },
    {
        name : "Pixelgroover", 
        imageNameOverride: "pixelgroover",
        uniqueId: "PIXE_6",
        url: "https://x.com/pixelgroover"
    },
    {
        name : "Pixelkauz", 
        imageNameOverride: "",
        uniqueId: "PIXE_4",
        url: "https://x.com/Pixelkauz"
    },
    {
        name : "pixellerjeremy", 
        imageNameOverride: "",
        uniqueId: "PIXE_5",
        url: "https://x.com/pixellerjeremy"
    },
    {
        name : "pixelmage", 
        imageNameOverride: "",
        uniqueId: "PIXE",
        url: "https://linktr.ee/pixelmage"
    },
    {
        name : "PizzaFrankza", 
        imageNameOverride: "",
        uniqueId: "PIZZ",
        url: "https://x.com/PizzaFrankza"
    },
    {
        name : "PJBgamer", 
        imageNameOverride: "",
        uniqueId: "PJBG",
        url: "https://bsky.app/profile/pjbgamer.bsky.social"
    },
    {
        name : "Pkdotts", 
        imageNameOverride: "",
        uniqueId: "PKDO",
        url: "https://linktr.ee/pkdotts"
    },
    {
        name : "PokemonEstelar", 
        imageNameOverride: "",
        uniqueId: "POKE",
        url: "https://x.com/PokemonEstelar"
    },
    {
        name : "Polyducks", 
        imageNameOverride: "",
        uniqueId: "POLY",
        url: "https://x.com/Polyducks"
    },
    {
        name : "PotatoCheep", 
        imageNameOverride: "",
        uniqueId: "POTA",
        url: "https://x.com/generic_most"
    },
    //#endregion
    //#region Q
    {
        name : "Quickalas", 
        imageNameOverride: "quickalas",
        uniqueId: "QUIC",
        url: "https://x.com/Quickalas"
    },
    //#endregion
    //#region R
    {
        name : "Rakun", 
        imageNameOverride: "",
        uniqueId: "RAKU",
        url: "https://bsky.app/profile/rakun01.bsky.social"
    },
    {
        name : "Rami", 
        imageNameOverride: "",
        uniqueId: "RAMI",
        url: "https://x.com/r_ramenoodles"
    },
    {
        name : "Raspberry Milkshake",
        imageNameOverride: "RaspberryMilks1",
        uniqueId: "RASP",
        url: "https://www.instagram.com/raspberry__milkshake"
    },
    {
        name : "Rata", // aka nasCobolo
        imageNameOverride: "",
        uniqueId: "RATA",
        url: "https://bsky.app/profile/ratazart.bsky.social"
    },
    {
        name : "rbatistadelima", 
        imageNameOverride: "",
        uniqueId: "RBAT",
        url: "https://x.com/rbatistadelima"
    },
    {
        name : "Reesereeserson", 
        imageNameOverride: "",
        uniqueId: "REES",
        url: "https://x.com/reesereeserson"
    },
    {
        name : "Robin Quinn", 
        imageNameOverride: "RobinQuinn",
        uniqueId: "ROBI",
        url: "https://bsky.app/profile/robinquinn.bsky.social"
    },
    {
        name : "Robster89", 
        imageNameOverride: "",
        uniqueId: "ROBS",
        url: "https://x.com/Robsterpixels"
    },
    {
        name : "ROger", // aka rugi_kong
        imageNameOverride: "",
        uniqueId: "ROGE",
        url: "https://x.com/rugikong/"
    },
    {
        name : "Rudy Flores", 
        imageNameOverride: "RudyFlores",
        uniqueId: "RUDY",
        url: "https://bsky.app/profile/rudyflores93.bsky.social"
    },
    {
        name : "Rukvsin", 
        imageNameOverride: "",
        uniqueId: "RUKV",
        url: "https://x.com/Rukvsin"
    },
    {
        name : "RunicPixels", 
        imageNameOverride: "",
        uniqueId: "RUNI",
        url: "https://x.com/RunicPixels"
    },
    {
        name : "Runtd", 
        imageNameOverride: "",
        uniqueId: "RUNT",
        url: "https://linktr.ee/runtd"
    },
    {
        name : "RyanKeeton", 
        imageNameOverride: "",
        uniqueId: "RYAN",
        url: "https://bsky.app/profile/ryankeeton.bsky.social"
    },
    //#endregion
    //#region S
    {
        name : "SalamiChild", 
        imageNameOverride: "",
        uniqueId: "SALA",
        url: "https://x.com/SalamiChild"
    },
    {
        name : "saltiestbunny", 
        imageNameOverride: "",
        uniqueId: "SALT",
        url: "https://x.com/saltiestbunny"
    },
    {
        name : "SamtheSalmon", 
        imageNameOverride: "",
        uniqueId: "SAMT",
        url: "https://x.com/SamThe_Salmon"
    },
    {
        name : "SarahBoevingArt", 
        imageNameOverride: "",
        uniqueId: "SARA",
        url: "https://x.com/SarahBoevingArt"
    },
    {
        name : "Scooter", // aka Loren Radis
        imageNameOverride: "",
        uniqueId: "SCOO",
        url: "https://www.lorenradis.com/"
    },
    {
        name : "SethInTheSpace", 
        imageNameOverride: "",
        uniqueId: "SETH",
        url: "https://linktr.ee/SethInTheSpace"
    },
    {
        name : "Seva86706122", 
        imageNameOverride: "",
        uniqueId: "SEVA",
        url: "https://x.com/Seva86706122"
    },
    {
        name : "SJPixels", // aka PixelsSj
        imageNameOverride: "",
        uniqueId: "SJPI",
        url: "https://scottwelfare2.wixsite.com/sjpixels"
    },
    {
        name : "Sleezy", 
        imageNameOverride: "",
        uniqueId: "SLEE",
        url: "https://x.com/sleezycasteezy"
    },
    {
        name : "SmarmyElf", 
        imageNameOverride: "",
        uniqueId: "SMAR",
        url: "https://x.com/SmarmyElf"
    },
    {
        name : "Smoking Moon", 
        imageNameOverride: "Smokingmoon",
        uniqueId: "SMOK",
        url: "https://linktr.ee/smokingmoon"
    },
    {
        name : "Sora_x2", 
        imageNameOverride: "",
        uniqueId: "SORA",
        url: "https://x.com/sora_pixel"
    },
    {
        name : "Space-AgeWrangler", 
        imageNameOverride: "",
        uniqueId: "SPAC",
        url: "https://space-agewrangler.newgrounds.com/"
    },
    {
        name : "SpaceBiker", 
        imageNameOverride: "",
        uniqueId: "SPAC_2",
        url: "https://x.com/SpaceBikerNeil/"
    },
    {
        name : "Stefan", // aka MercuryBD
        imageNameOverride: "",
        uniqueId: "STEF",
        url: "https://twitter.com/MercuryBD"
    },
    {
        name : "Steven McCarthy", 
        imageNameOverride: "StevenMcCarthy",
        uniqueId: "STEV",
        url: "https://bsky.app/profile/1988stevenm.bsky.social"
    },
    {
        name : "StrawBe", // aka StrawPact
        imageNameOverride: "",
        uniqueId: "STRA",
        url: "https://bsky.app/profile/strawpact.bsky.social"
    },
    {
        name : "sukinapan", 
        imageNameOverride: "",
        uniqueId: "SUKI",
        url: "https://www.instagram.com/sukinapan/"
    },
    {
        name : "SuperZikoure", 
        imageNameOverride: "",
        uniqueId: "SUPE",
        url: "https://twitter.com/SuperZikoure"
    },
    //#endregion
    //#region T
    {
        name : "t3nshi", 
        imageNameOverride: "",
        uniqueId: "T3NS",
        url: "https://bsky.app/profile/t3nshi.bsky.social"
    },
    {
        name : "Tanu", 
        imageNameOverride: "",
        uniqueId: "TANU",
        url: "https://linktr.ee/tanupxl"
    },
    {
        name : "Tanuki", 
        imageNameOverride: "",
        uniqueId: "TANU_2",
        url: "https://linktr.ee/tanukitype"
    },
    {
        name : "TDW", // aka TheDarkWarrior
        imageNameOverride: "",
        uniqueId: "TDW0",
        url: "https://x.com/Lord_SForcer"
    },
    {
        name : "Tetra", 
        imageNameOverride: "",
        uniqueId: "TETR",
        url: "https://bsky.app/profile/tetraminose.bsky.social"
    },
    {
        name : "ThatLeftHandMan", 
        imageNameOverride: "",
        uniqueId: "THAT",
        url: "https://x.com/ThatLeftHandMan"
    },
    {
        name : "TheBurningFlare", // aka CordRocker
        imageNameOverride: "",
        uniqueId: "THEB",
        url: "https://cordrocker.carrd.co/"
    },
    {
        name : "thedragonllama", 
        imageNameOverride: "",
        uniqueId: "THED",
        url: "https://linktr.ee/thedragonllama"
    },
    {
        name : "TheMightyAndre", 
        imageNameOverride: "",
        uniqueId: "THEM",
        url: "https://x.com/TheMightyAndre"
    },
    {
        name : "thoughtwavelet", 
        imageNameOverride: "",
        uniqueId: "THOU",
        url: "https://x.com/thoughtwavelet"
    },
    {
        name : "toadinspace", 
        imageNameOverride: "",
        uniqueId: "TOAD",
        url: "https://ko-fi.com/toadinspace"
    },
    {
        name : "Toni M", 
        imageNameOverride: "ToniM",
        uniqueId: "TONI",
        url: "https://bsky.app/profile/pixelsmil.bsky.social"
    },
    {
        name : "Tony Redmer", 
        imageNameOverride: "TonyRedmer",
        uniqueId: "TONY",
        url: "https://bsky.app/profile/tonyredmer.bsky.social"
    },
    {
        name : "Tyltal", 
        imageNameOverride: "",
        uniqueId: "TYLT",
        url: "https://bsky.app/profile/tyltal.bsky.social"
    },
    //#endregion
    //#region U
    {
        name : "Unsettled", 
        imageNameOverride: "",
        uniqueId: "UNSE",
        url: "https://x.com/_unsettled_"
    },
    {
        name : "unsilentwill", 
        imageNameOverride: "",
        uniqueId: "UNSI",
        url: "https://linktr.ee/unsilentwill"
    },
    //#endregion
    //#region V
    {
        name : "VCorbi", 
        imageNameOverride: "",
        uniqueId: "VCOR",
        url: "https://x.com/VCorbi"
    },
    {
        name : "victoria", 
        imageNameOverride: "",
        uniqueId: "VICT",
        url: "https://bsky.app/profile/came2slide.bsky.social"
    },
    {
        name : "Vierbit", 
        imageNameOverride: "",
        uniqueId: "VIER",
        url: "https://twitter.com/vierbit"
    },
    //#endregion
    //#region W
    {
        name : "weny_arts", 
        imageNameOverride: "",
        uniqueId: "WENY",
        url: "https://www.instagram.com/weny_arts4"
    },
    {
        name : "willsmithx4", 
        imageNameOverride: "",
        uniqueId: "WILL",
        url: "https://x.com/willsmithx4"
    },
    {
        name : "Wilperi", 
        imageNameOverride: "",
        uniqueId: "WILP",
        url: "https://linktr.ee/wilperi"
    },
    {
        name : "witch_warren", 
        imageNameOverride: "",
        uniqueId: "WITC",
        url: "https://x.com/witch_warren"
    },
    {
        name : "Woodspixl", 
        imageNameOverride: "",
        uniqueId: "WOOD",
        url: "https://bsky.app/profile/woodspixl.bsky.social"
    },
    {
        name : "Wortel", 
        imageNameOverride: "",
        uniqueId: "WORT",
        url: "https://x.com/WortelKK"
    },
    {
        name : "Wuchta", 
        imageNameOverride: "",
        uniqueId: "WUCH",
        url: "https://bsky.app/profile/wuchta.bsky.social"
    },
    {
        name : "WukongJr", 
        imageNameOverride: "",
        uniqueId: "WUKO",
        url: "https://x.com/WuKongJr_Art"
    },
    //#endregion
    //#region X
    {
        name : "Xanday", 
        imageNameOverride: "",
        uniqueId: "XAND",
        url: "http://www.xanday.com"
    },
    {
        name : "xCoolswiftx", 
        imageNameOverride: "",
        uniqueId: "XCOO",
        url: "https://x.com/xCoolswiftx"
    },
    //#endregion
    //#region Y
    {
        name : "Yam_Boy_", 
        imageNameOverride: "",
        uniqueId: "YAMB",
        url: "https://x.com/Yam_Boy_"
    },
    {
        name : "Yammy", 
        imageNameOverride: "",
        uniqueId: "YAMM",
        url: "https://x.com/yammy16160/"
    },
    {
        name : "Yokaiy", 
        imageNameOverride: "",
        uniqueId: "YOKA",
        url: "https://bsky.app/profile/yokaiy.bsky.social"
    },
    {
        name : "Yolkghost", 
        imageNameOverride: "",
        uniqueId: "YOLK",
        url: "https://x.com/yolklyghostly/"
    },
    {
        name : "YukiPixels", 
        imageNameOverride: "",
        uniqueId: "YUKI",
        url: "https://x.com/YukiPixels"
    },
    {
        name : "Yumipiku", 
        imageNameOverride: "",
        uniqueId: "YUMI",
        url: "https://yumipiku.carrd.co/"
    },
    //#endregion
    //#region Z
    {
        name : "Zaebucca", 
        imageNameOverride: "",
        uniqueId: "ZAEB",
        url: "https://zaebucca.carrd.co/"
    },
    {
        name : "Zernek", 
        imageNameOverride: "",
        uniqueId: "ZERN",
        url: "https://twitter.com/Zernek1"
    },
    {
        name : "Zushi3DHero", 
        imageNameOverride: "",
        uniqueId: "ZUSH",
        url: "https://linktr.ee/zushi3dhero"
    },
    //#endregion
    //#region ?
    {
        name : "no artist",   // Used for dummy
        imageNameOverride: "unknown_artist",
        uniqueId: "UNDF",       
        url: ""
    }
    //#endregion
];