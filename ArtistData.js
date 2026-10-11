var template = [
    {
        name : "The name of the artist, for string display", 
        imageNameOverride: "The name of the artist for their avatar data",
        uniqueId: "Unique identifier code used in case of dupes or name changes; standard is 4 characters, 0 for spaces, _X for common 4 letter codes",
        url: "Ideally a link hub to avoid constant updates."
    }
];
// Note: aka info may include former or retired names; these are included to help verify information
// as artist identities change. Use the name the artist associates with themselves.
 
var redraws = ['HYRU', 'JOHT', 'KANT', 'CAST', 'SMB3', 'KOHO', 'PIKM', 'KRBA', 'MEG2', 'SONP', 'PTCG']

var artists = [
    //#region 0-9
    {
        name : "1000_toasters", 
        imageNameOverride: "",
        uniqueId: "1000",
        url: "https://bsky.app/profile/1000toasters.bsky.social",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "1800FROGS", 
        imageNameOverride: "",
        uniqueId: "1800",
        url: "https://x.com/1800frogs",
        redraws: ['JOHT']
    },
    {
        name : "2bitcrook", 
        imageNameOverride: "",
        uniqueId: "2BIT",
        url: "https://bsky.app/profile/2bitcrook.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "3enedict", 
        imageNameOverride: "",
        uniqueId: "3ENE",
        url: "https://bsky.app/profile/3enedict.bsky.social",
        redraws: ['KRBA']
    },
    //#endregion
    //#region A
    {
        name : "a chair", 
        imageNameOverride: "achair",
        uniqueId: "ACHA",
        url: "https://bsky.app/profile/cielchair.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "ac2Dart", 
        imageNameOverride: "",
        uniqueId: "AC2D",
        url: "https://x.com/ac2dart",
        redraws: ['CAST', 'SMB3', 'KRBA']
    },
    {
        name : "AceCanti", 
        imageNameOverride: "",
        uniqueId: "ACEC",
        url: "https://x.com/AceCanti",
        redraws: ['HYRU']
    },
    {
        name : "Afroskeleton", 
        imageNameOverride: "",
        uniqueId: "AFRO",
        url: "https://bsky.app/profile/afroskeleton.itch.io",
        redraws: ['JOHT', 'KRBA', 'MEG2']
    },
    {
        name : "Agua Hervida", // aka h2ohervida
        imageNameOverride: "AguaHervida",
        uniqueId: "AGUA",
        url: "https://linktr.ee/AguaHervida",
        redraws: ['KOHO', 'SMB3']
    },
    {
        name : "Aina", 
        imageNameOverride: "",
        uniqueId: "AINA",
        url: "https://ainasge.carrd.co/",
        redraws: ['KOHO', 'KRBA']
    },
    {
        name : "Airyucat", 
        imageNameOverride: "",
        uniqueId: "AIRY",
        url: "http://airyu.cat/",
        redraws: ['HYRU']
    },
    {
        name : "Alwore", 
        imageNameOverride: "",
        uniqueId: "ALWO",
        url: "https://x.com/alwore_",
        redraws: ['KOHO']
    }, 
    {
        name : "Anima_nel", 
        imageNameOverride: "",
        uniqueId: "ANIM",
        url: "https://bsky.app/profile/anima-nel.bsky.social",
        redraws: ['CAST', 'JOHT', 'KANT', 'KOHO', 'SMB3']
    },
    {
        name : "AnonimJooJPixel", // aka GearBug Studio
        imageNameOverride: "",
        uniqueId: "ANON",
        url: "https://bsky.app/profile/gearbugstudio.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "Antonio Tatum",
        imageNameOverride: "AntonioTatum",
        uniqueId: "ANTO",
        url: "https://bsky.app/profile/warlock2k.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Arisuki", 
        imageNameOverride: "",
        uniqueId: "ARIS",
        url: "https://bsky.app/profile/arisuki.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Arkflinn", 
        imageNameOverride: "",
        uniqueId: "ARKF",
        url: "https://linktr.ee/arkflinn",
        redraws: ['CAST', 'HYRU', 'JOHT', 'KANT', 'SMB3']
    },
	{
        name : "ARONBAE", 
        imageNameOverride: "",
        uniqueId: "ARON",
        url: "https://linktr.ee/aronbae",
        redraws: ['JOHT', 'KRBA']
    },
    {
        name : "Artificer", 
        imageNameOverride: "",
        uniqueId: "ARTI",
        url: "https://artificer111.carrd.co/",
        redraws: ['SMB3']
    },
    {
        name : "ArtOfLaurel", 
        imageNameOverride: "",
        uniqueId: "ARTO",
        url: "https://art.laurelkoeniger.com/",
        redraws: ['KANT']
    },
    {
        name : "Arvy", 
        imageNameOverride: "",
        uniqueId: "ARVY",
        url: "https://bsky.app/profile/arvy.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Ashenwater", 
        imageNameOverride: "",
        uniqueId: "ASHE",
        url: "https://linktr.ee/ashenwater",
        redraws: ['KANT', 'SMB3']
    },
    {
        name : "Ashton: Retrocade Media", 
        imageNameOverride: "AshtonArnold",
        uniqueId: "ASHT",
        url: "https://bsky.app/profile/retrocademedia.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Aspa", // aka aspabot
        imageNameOverride: "",
        uniqueId: "ASPA",
        url: "https://bsky.app/profile/aspabot.com",
        redraws: ['PTCG']
    },
    {
        name : "Atcero", 
        imageNameOverride: "",
        uniqueId: "ATCE",
        url: "https://bsky.app/profile/atcero.bsky.social",
        redraws: ['KOHO', 'KRBA']
    },
    {
        name : "AtticusFinn", // aka Atticus_finn
        imageNameOverride: "",
        uniqueId: "ATTI",
        url: "https://linktr.ee/atticusfinn",
        redraws: ['HYRU', 'JOHT', 'KANT', 'KOHO', 'PTCG', 'SMB3']
    },
    {
        name : "audreyTBDS", 
        imageNameOverride: "",
        uniqueId: "AUDR",
        url: "https://x.com/audreytbds",
        redraws: ['JOHT']
    },
    {
        name : "Aurata", 
        imageNameOverride: "",
        uniqueId: "AURA",
        url: "https://bsky.app/profile/aurataprime.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "AVQ", 
        imageNameOverride: "",
        uniqueId: "AVQ0",
        url: "https://avq.neocities.org/",
        redraws: ['PTCG']
    },
    //#endregion
    //#region B
    {
        name : "Backflipsimmons", 
        imageNameOverride: "",
        uniqueId: "BACK",
        url: "https://linktr.ee/backflipsimmons",
        redraws: ['SMB3']
    },
    {
        name : "barosaros", 
        imageNameOverride: "",
        uniqueId: "BARO",
        url: "https://bsky.app/profile/barosaros.bsky.social",
        redraws: ['CAST', 'SMB3']
    },
    {
        name : "Basto", 
        imageNameOverride: "",
        uniqueId: "BAST",
        url: "https://bsky.app/profile/actionbasto.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "batfeula", 
        imageNameOverride: "",
        uniqueId: "BATF",
        url: "https://bsky.app/profile/batfeula.bsky.social",
        redraws: ['CAST', 'JOHT', 'KANT', 'KRBA', 'MEG2', 'PTCG', 'SMB3']
    },
    {
        name : "BG", 
        imageNameOverride: "",
        uniqueId: "BG00",
        url: "https://linktr.ee/bg_pixlarnD",
        redraws: ['KOHO', 'KRBA', 'MEG2']
    },
    {
        name : "Beetroot Paul", 
        imageNameOverride: "beetrootpaul",
        uniqueId: "BEET",
        url: "https://beetrootpaul.com/",
        redraws: ['KANT']
    },
    {
        name : "Beni", // aka bluepathfinder
        imageNameOverride: "",
        uniqueId: "BENI",
        url: "https://linktr.ee/bluepathfinder",
        redraws: ['PTCG']
    },
	{
        name : "Claire Solano | Bicinno", 
        imageNameOverride: "bicinno",
        uniqueId: "BICI",
        url: "https://bsky.app/profile/bicinno.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Blam", 
        imageNameOverride: "",
        uniqueId: "BLAM",
        url: "https://x.com/blam_thethird",
        redraws: ['SMB3']
    },
    {
        name : "BleuPale", 
        imageNameOverride: "",
        uniqueId: "BLEU",
        url: "https://linktr.ee/bleu_pale",
        redraws: ['KOHO']
    },
    {
        name : "blind3dbylight", 
        imageNameOverride: "",
        uniqueId: "BLIN",
        url: "https://linktr.ee/blind3dbylight",
        redraws: ['HYRU', 'KOHO', 'KRBA', 'SMB3']
    },
    {
        name : "Blindeduif", 
        imageNameOverride: "",
        uniqueId: "BLIN_2",
        url: "https://linktr.ee/blindeduif",
        redraws: ['CAST', 'HYRU', 'JOHT', 'KANT', 'KOHO', 'KRBA', 'PTCG', 'SMB3']
    },
    {
        name : "BluSprinks", 
        imageNameOverride: "",
        uniqueId: "BLUS",
        url: "https://bsky.app/profile/blusprinks.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "BobblaKei", 
        imageNameOverride: "",
        uniqueId: "BOBB",
        url: "https://bsky.app/profile/bobblakei.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Brando", // aka FullMetalBrando
        imageNameOverride: "",
        uniqueId: "BRAN",
        url: "https://linktr.ee/brandoparm",
        redraws: ['HYRU', 'JOHT', 'KANT', 'KOHO', 'KRBA', 'PTCG', 'SMB3']
    },
    {
        name : "Broken Gamer X",
        imageNameOverride: "BrokenGamerX",
        uniqueId: "BROK",
        url: "https://bsky.app/profile/brokengamerx.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "BRTNH", 
        imageNameOverride: "",
        uniqueId: "BRTN",
        url: "https://bsky.app/profile/brtnh.com",
        redraws: ['PTCG']
    },
    {
        name : "BTdangelo", 
        imageNameOverride: "",
        uniqueId: "BTDA",
        url: "https://linktr.ee/btdangelo",
        redraws: ['HYRU', 'KOHO']
    },
    //#endregion
    //#region C
	{
        name : "Cab", 
        imageNameOverride: "",
        uniqueId: "CAB0",
        url: "https://bsky.app/profile/s-cabbage.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "Caelestisart", 
        imageNameOverride: "",
        uniqueId: "CAEL",
        url: "https://bsky.app/profile/caelestisart.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "came2slide", 
        imageNameOverride: "",
        uniqueId: "CAME",
        url: "https://bsky.app/profile/came2slide.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Canno", 
        imageNameOverride: "",
        uniqueId: "CANN",
        url: "https://bsky.app/profile/cannomen.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Cerberus", 
        imageNameOverride: "",
        uniqueId: "CERB",
        url: "https://x.com/HellhoundVideo",
        redraws: ['HYRU']
    },
    {
        name : "chamomeow", 
        imageNameOverride: "",
        uniqueId: "CHAM",
        url: "https://bsky.app/profile/chamomeow.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "CheesyPaninie", 
        imageNameOverride: "",
        uniqueId: "CHEE",
        url: "https://bsky.app/profile/cheesypaninie.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "Chester Green", 
        imageNameOverride: "ChesterGreen",
        uniqueId: "CHES",
        url: "https://bsky.app/profile/chestergreen.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Chibi_Jame", 
        imageNameOverride: "",
        uniqueId: "CHIB",
        url: "https://x.com/Chibi_Jame",
        redraws: ['KANT']
    },
    {
        name : "Chico D. Mar", // aka MerSaloon, offbeat
        imageNameOverride: "ChicoDMar",
        uniqueId: "CHIC",
        url: "https://linktr.ee/MerSaloon",
        redraws: ['HYRU']
    },
	{
        name : "ChiliDAWWGS", 
        imageNameOverride: "",
        uniqueId: "CHIL",
        url: "https://scratch.mit.edu/users/ChiliDAWWGS_/",
        redraws: ['KRBA']
    },
    {
        name : "ChJa", // aka cjlm123
        imageNameOverride: "",
        uniqueId: "CHJA",
        url: "https://pixeljoint.com/p/220173.htm",
        redraws: ['HYRU', 'KANT', 'SMB3']
    },
    {
        name : "Chren", 
        imageNameOverride: "",
        uniqueId: "CHRE",
        url: "https://x.com/chreniafoka",
        redraws: ['KANT', 'SMB3']
    },
    {
        name : "chromegnomes", 
        imageNameOverride: "",
        uniqueId: "CHRO",
        url: "https://bsky.app/profile/chromegnomes.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "Chubbo", 
        imageNameOverride: "",
        uniqueId: "CHUB",
        url: "https://www.instagram.com/chubbopx",
        redraws: ['CAST', 'JOHT', 'KANT', 'SMB3']
    },
    {
        name : "CJJammies", 
        imageNameOverride: "",
        uniqueId: "CJJA",
        url: "https://linktr.ee/CJJammies",
        redraws: ['HYRU']
    },
    {
        name : "ckelsallpxls", 
        imageNameOverride: "",
        uniqueId: "CKEL",
        url: "https://bsky.app/profile/ckelsallpxls.bsky.social",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Clarissa", // aka maruki
        imageNameOverride: "",
        uniqueId: "CLAR",
        url: "https://bsky.app/profile/clarigaricus.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Cloditu", 
        imageNameOverride: "",
        uniqueId: "CLOD",
        url: "https://linktr.ee/Cloditu",
        redraws: ['HYRU']
    },
    {
        name : "COD31N3", 
        imageNameOverride: "",
        uniqueId: "COD3",
        url: "https://x.com/cod31n3",
        redraws: ['KRBA']
    },
    {
        name : "Coelacamth", 
        imageNameOverride: "",
        uniqueId: "COEL",
        url: "https://bsky.app/profile/coelacamth.bsky.social",
        redraws: ['CAST', 'KRBA']
    },
    {
        name : "Corb\u{ED}", 
        imageNameOverride: "Corbi",
        uniqueId: "CORB",
        url: "https://x.com/VCorbi",
        redraws: ['SMB3']
    },
    {
        name : "Cortoony",
        imageNameOverride: "",
        uniqueId: "CORT",
        url: "https://cort.carrd.co/",
        redraws: ['PTCG']
    },
    {
        name : "Corvilia", // aka Emi
        imageNameOverride: "",
        uniqueId: "CORV",
        url: "https://bsky.app/profile/corvilia.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "Cozzie",
        imageNameOverride: "",
        uniqueId: "COZZ",
        url: "https://bsky.app/profile/justcoz.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Crimson Kero", // aka Anonymous-Frog
        imageNameOverride: "CrimsonKero",
        uniqueId: "CRIM",
        url: "https://anonymous-frog.newgrounds.com/",
        redraws: ['SMB3']
    },
    {
        name : "crizz", 
        imageNameOverride: "",
        uniqueId: "CRIZ",
        url: "https://x.com/crizzpix",
        redraws: ['HYRU']
    },
    {
        name : "Croey", 
        imageNameOverride: "",
        uniqueId: "CROE",
        url: "https://bsky.app/profile/croey.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Crowno", 
        imageNameOverride: "",
        uniqueId: "CROW",
        url: "https://bsky.app/profile/crowno.bsky.social",
        redraws: ['CAST', 'HYRU', 'KOHO']
    },
    {
        name : "cure_pixel", 
        imageNameOverride: "",
        uniqueId: "CURE_2",
        url: "https://bsky.app/profile/curepixel.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "Curelapse", 
        imageNameOverride: "",
        uniqueId: "CURE",
        url: "https://bsky.app/profile/curelapse.bsky.social",
        redraws: ['CAST']
    },
    //#endregion
    //#region D
    {
        name : "Daeron", 
        imageNameOverride: "",
        uniqueId: "DAER",
        url: "https://bsky.app/profile/daeron-pixel.bsky.social",
        redraws: ['HYRU', 'MEG2']
    },
    {
        name : "Daizha", // aka scribulls
        imageNameOverride: "",
        uniqueId: "DAIZ",
        url: "https://ohfivethirty.tumblr.com/",
        redraws: ['JOHT', 'KANT', 'KOHO', 'KRBA', 'SMB3']
    },
    {
        name : "Damian", 
        imageNameOverride: "",
        uniqueId: "DAMI",
        url: "https://x.com/koopajr",
        redraws: ['SMB3']
    },
    {
        name : "Dan Velasquez", 
        imageNameOverride: "DanVelasquez",
        uniqueId: "DANV",
        url: "https://linktr.ee/danvelasquezart",
        redraws: ['SMB3']
    },
    {
        name : "Daniel James Diggle", 
        imageNameOverride: "DanielJamesDiggle",
        uniqueId: "DANI_3",
        url: "https://bsky.app/profile/danieldiggle.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "DaNinjaManZ", 
        imageNameOverride: "",
        uniqueId: "DANI_2",
        url: "https://bsky.app/profile/daninjamanz.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Dax_zZ", 
        imageNameOverride: "",
        uniqueId: "DAXZ",
        url: "https://daxid.ch/pixelart/",
        redraws: ['KANT']
    },
    {
        name : "Daydreamer", 
        imageNameOverride: "",
        uniqueId: "DAYD",
        url: "https://bsky.app/profile/daydreamer94.bsky.social",
        redraws: ['KANT', 'PTCG', 'SMB3']
    },
    {
        name : "ddoobysnax", // aka ddooby
        imageNameOverride: "ddooby",
        uniqueId: "DDOO",
        url: "https://bsky.app/profile/ddoobysnax.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Dema", // aka xtrarare
        imageNameOverride: "",
        uniqueId: "DEMA",
        url: "https://bsky.app/profile/xtrarare.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Deutilt", // aka Adriel
        imageNameOverride: "",
        uniqueId: "DEUT",
        url: "https://bsky.app/profile/adrieldeutilt.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Deon Quinlivan",
        imageNameOverride: "DeonQuinlivan",
        uniqueId: "DEON",
        url: "https://x.com/DeonQuinlivan",
        redraws: ['PIKM']
    },
    {
        name : "Derpkip", 
        imageNameOverride: "",
        uniqueId: "DERP",
        url: "https://bsky.app/profile/derpkip.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "DeviFoxx", 
        imageNameOverride: "",
        uniqueId: "DEVI",
        url: "https://bsky.app/profile/devifoxx.bsky.social",
        redraws: ['JOHT', 'KOHO', 'KRBA']
    },
    {
        name : "Dewdneym", // aka Dewndeym 
        imageNameOverride: "",
        uniqueId: "DEWN",
        url: "http://dewdneym.cool/",
        redraws: ['JOHT', 'KANT', 'KOHO', 'KRBA', 'MEG2', 'SMB3']
    },
    {
        name : "diamchan", 
        imageNameOverride: "",
        uniqueId: "DIAM",
        url: "https://bsky.app/profile/dioshiba.newgrounds.com",
        redraws: ['KANT']
    },
    {
        name : "DioShiba", 
        imageNameOverride: "",
        uniqueId: "DIOS",
        url: "https://bsky.app/profile/dioshiba.newgrounds.com",
        redraws: ['CAST']
    },
    {
        name : "_discocats", 
        imageNameOverride: "discocats",
        uniqueId: "DISC",
        url: "https://x.com/_discocats",
        redraws: ['JOHT', 'KANT', 'HYRU']
    },
    {
        name : "discoduro", 
        imageNameOverride: "",
        uniqueId: "DISC_2",
        url: "https://bsky.app/profile/discoduro.bsky.social",
        redraws: ['HYRU', 'PTCG']
    },
    {
        name : "DL", 
        imageNameOverride: "",
        uniqueId: "DL00",
        url: "https://bsky.app/profile/lafontaine-dl.bsky.social",
        redraws: ['MEG2']
    },
    {
        name : "Doki", 
        imageNameOverride: "",
        uniqueId: "DOKI",
        url: "https://bsky.app/profile/zabludoki.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "DonFastidius", 
        imageNameOverride: "",
        uniqueId: "DONF",
        url: "https://www.instagram.com/donfastidius1337/",
        redraws: ['CAST', 'KOHO']
    },    
	{
        name : "DontaeRiceArt", 
        imageNameOverride: "",
        uniqueId: "DONT",
        url: "https://bsky.app/profile/dontaericeart.bsky.social",
        redraws: ['JOHT', 'KRBA']
    },
    {
        name : "Donpo", // aka Don
        imageNameOverride: "",
        uniqueId: "DONP",
        url: "https://bsky.app/profile/donpixels.bsky.social",
        redraws: ['CAST', 'KOHO']
    }, 
    {
        name : "DonutDespair", // aka Snownut
        imageNameOverride: "",
        uniqueId: "DONU",
        url: "https://bsky.app/profile/donutdespair.bsky.social",
        redraws: ['JOHT', 'KRBA']
    }, 
    {
        name : "Drak", 
        imageNameOverride: "",
        uniqueId: "DRAK",
        url: "https://bsky.app/profile/draktheone.bsky.social",
        redraws: ['PTCG']
    }, 
    {
        name : "DrSpectre", 
        imageNameOverride: "",
        uniqueId: "DRSP",
        url: "https://bsky.app/profile/drspectre.bsky.social",
        redraws: ['KRBA']
    }, 
    {
        name : "DumDrums", 
        imageNameOverride: "",
        uniqueId: "DUMD",
        url: "https://bsky.app/profile/dumdrums.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Fantom Flash", // aka Dunca 
        imageNameOverride: "FantomFlash",
        uniqueId: "FANT",
        url: "https://bsky.app/profile/fantomflasch.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "DutchDinosaur", // aka lily
        imageNameOverride: "",
        uniqueId: "DUTC",
        url: "https://www.illy95.nl/",
        redraws: ['HYRU']
    },
    {
        name : "Dusty", 
        imageNameOverride: "",
        uniqueId: "DUST",
        url: "https://linktr.ee/dustyshouri",
        redraws: ['KOHO']
    },
    {
        name : "Dylz49", 
        imageNameOverride: "",
        uniqueId: "DYLZ",
        url: "https://linktr.ee/Dylz49",
        redraws: ['HYRU']
    },
    //#endregion
    //#region E
    {
        name : "EclipsedZenith", 
        imageNameOverride: "",
        uniqueId: "ECLI",
        url: "",
        redraws: ['PTCG']
    },
    {
        name : "EdelweissPkmn", 
        imageNameOverride: "",
        uniqueId: "EDEL",
        url: "https://x.com/EdelweissPkmn",
        redraws: ['JOHT', 'KANT']
    },
	{
        name : "edudafa", 
        imageNameOverride: "",
        uniqueId: "EDUD",
        url: "https://edudafa.itch.io/",
        redraws: ['JOHT']
    },
	{
        name : "Egotistical Ape", 
        imageNameOverride: "EgotisticalApe",
        uniqueId: "EGOT",
        url: "https://bsky.app/profile/wrathofgibbon.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Elementalisman", 
        imageNameOverride: "",
        uniqueId: "ELEM",
        url: "https://bsky.app/profile/elementalisman.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Emmazapan", 
        imageNameOverride: "",
        uniqueId: "EMMA",
        url: "https://linktr.ee/emmazapan",
        redraws: ['JOHT', 'KANT', 'KOHO', 'KRBA']
    },
    {
        name : "Enchanteur", // aka Pick a Boo, Pikaboo 
        imageNameOverride: "",
        uniqueId: "ENCH",
        url: "https://www.artstation.com/merlinmuret",
        redraws: ['HYRU']
    },
    {
        name : "EnricosUt", 
        imageNameOverride: "",
        uniqueId: "ENRI",
        url: "https://enricosut.carrd.co/",
        redraws: ['KOHO']
    },
    {
        name : "ERIC_MACK", 
        imageNameOverride: "",
        uniqueId: "ERIC",
        url: "https://www.instagram.com/mack_gameboy/",
        redraws: ['PTCG']
    },
    {
        name : "Eto2D", 
        imageNameOverride: "",
        uniqueId: "ETO2",
        url: "https://bsky.app/profile/eto2d.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Etta3413", 
        imageNameOverride: "",
        uniqueId: "ETTA",
        url: "https://x.com/Etta3413",
        redraws: ['KANT']
    },
    //#endregion
    //#region F
    {
        name : "Ferd",
        imageNameOverride: "",
        uniqueId: "FERD",
        url: "https://bsky.app/profile/ferd-fm.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "fiopico",
        imageNameOverride: "",
        uniqueId: "FIOP",
        url: "https://fiopico.wixsite.com/fiopico",
        redraws: ['KANT']
    },
	{
        name : "Flavia-Elric",
        imageNameOverride: "flaviaelric",
        uniqueId: "FLAV",
        url: "https://flavia-elric.carrd.co/",
        redraws: ['JOHT', 'KRBA']
    },
    {
        name : "floppy",
        imageNameOverride: "",
        uniqueId: "FLOP",
        url: "https://linktr.ee/FloppyVelarde",
        redraws: ['HYRU']
    },
    {
        name : "focara", // aka ForcaraEvasion
        imageNameOverride: "",
        uniqueId: "FOCA",
        url: "https://bsky.app/profile/realfocara.bsky.social",
        redraws: ['HYRU', 'SMB3']
    },
    {
        name : "Foofarawr", // aka Foo
        imageNameOverride: "",
        uniqueId: "FOOF",
        url: "https://linktr.ee/foofarawr",
        redraws: ['CAST', 'JOHT', 'KANT', 'KOHO', 'KRBA', 'PTCG', 'SMB3']
    },
    {
        name : "FoxxDrive", 
        imageNameOverride: "",
        uniqueId: "FOXX",
        url: "https://bsky.app/profile/foxxdrive.bsky.social",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Fry",
        imageNameOverride: "",
        uniqueId: "FRY0",
        url: "https://bsky.app/profile/westenfry.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Fuzz Force", // aka Fuzz
        imageNameOverride: "FuzzForce",
        uniqueId: "FUZZ_2",
        url: "https://bsky.app/profile/fuzzforce.bsky.social",
        redraws: ['PTCG']
    },
	{
        name : "Fuzzy",
        imageNameOverride: "",
        uniqueId: "FUZZ",
        url: "https://www.instagram.com/fuzzystudios01/",
        redraws: ['JOHT']
    },
    //#endregion
    //#region G
    {
        name : "Gabe Fern", 
        imageNameOverride: "GabeFern",
        uniqueId: "GABE",
        url: "https://bsky.app/profile/gabefern.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Gabriel Cortabraz", 
        imageNameOverride: "GabrielCortabraz",
        uniqueId: "GABR",
        url: "https://bsky.app/profile/oworowo.itch.io",
        redraws: ['PTCG']
    },
    {
        name : "gatekid3", 
        imageNameOverride: "",
        uniqueId: "GATE",
        url: "https://bsky.app/profile/gatekid3.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "GenoCL", 
        imageNameOverride: "",
        uniqueId: "GENO",
        url: "https://genocl.carrd.co/",
        redraws: ['KANT', 'MEG2', 'SMB3']
    },
    {
        name : "GhostBasil",  
        imageNameOverride: "",
        uniqueId: "GHOS",
        url: "https://bsky.app/profile/ghostbasil.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Ghoulee", 
        imageNameOverride: "",
        uniqueId: "GHOU",
        url: "https://bsky.app/profile/ghouleebones.bsky.social",
        redraws: ['CAST', 'KOHO', 'SMB3']
    },
    {
        name : "gif_not_jiff", 
        imageNameOverride: "",
        uniqueId: "GIFN",
        url: "https://x.com/gif_not_jif",
        redraws: ['KANT']
    },
	{
        name : "GinkgoTrees", 
        imageNameOverride: "",
        uniqueId: "GINK",
        url: "https://x.com/MrGinkgoTrees",
        redraws: ['JOHT']
    },
    {
        name : "GlacierWold8", 
        imageNameOverride: "unknown_artist",
        uniqueId: "GLAC",
        url: "",
        redraws: ['HYRU']
    },
    {
        name : "GlitchedPie", 
        imageNameOverride: "",
        uniqueId: "GLIT",
        url: "https://bsky.app/profile/glitchedpie.bsky.social",
        redraws: ['KOHO', 'SMB3']
    },
	{
        name : "Goldstarknight", 
        imageNameOverride: "",
        uniqueId: "GOLD",
        url: "https://goldstarknight.carrd.co/",
        redraws: ['JOHT', 'PTCG']
    },
	{
        name : "Goooo?!", 
        imageNameOverride: "Goooo",
        uniqueId: "GOOO",
        url: "https://bsky.app/profile/gooooman.itch.io",
        redraws: ['JOHT', 'KRBA', 'MEG2']
    },
	{
        name : "gopokenohito", 
        imageNameOverride: "",
        uniqueId: "GOPO",
        url: "https://bsky.app/profile/gopokenohito.bsky.social",
        redraws: ['PTCG']
    },
	{
        name : "Gonstar", 
        imageNameOverride: "",
        uniqueId: "GONS",
        url: "https://www.instagram.com/gonstar_",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "gravityblocks", 
        imageNameOverride: "",
        uniqueId: "GRAV",
        url: "https://x.com/gravityblocks1",
        redraws: ['HYRU']
    },
    {
        name : "Gray", 
        imageNameOverride: "",
        uniqueId: "GRAY",
        url: "https://bsky.app/profile/graylure.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Gwen Sandel", 
        imageNameOverride: "GwenSandel",
        uniqueId: "GWEN",
        url: "https://gwensandel.neocities.org/",
        redraws: ['KANT']
    },
    //#endregion
    //#region H
    {
        name : "HadianK", 
        imageNameOverride: "",
        uniqueId: "HADI",
        url: "https://x.com/HaddianK",
        redraws: ['KOHO']
    },
    {
        name : "Hairic", 
        imageNameOverride: "",
        uniqueId: "HAIR",
        url: "https://bsky.app/profile/hairic.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Hanahomura", 
        imageNameOverride: "",
        uniqueId: "HANA",
        url: "https://bsky.app/profile/hanahomura.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "HansDenuevo", 
        imageNameOverride: "",
        uniqueId: "HANS",
        url: "https://bsky.app/profile/hansdenuevo.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Hapiel", 
        imageNameOverride: "",
        uniqueId: "HAPI",
        url: "https://x.com/Hapiel",
        redraws: ['KANT']
    },
    {
        name : "HaywireJo", 
        imageNameOverride: "",
        uniqueId: "HAYW",
        url: "https://haywirejo.com/",
        redraws: ['CAST', 'JOHT', 'KANT', 'MEG2', 'SMB3']
    },
	{
        name : "Hibi", 
        imageNameOverride: "",
        uniqueId: "HIBI",
        url: "https://beacons.ai/hibiverse",
        redraws: ['JOHT']
    },
	{
        name : "Howdy Riceball", 
        imageNameOverride: "HowdyRiceball",
        uniqueId: "HOWD",
        url: "https://bsky.app/profile/howdyriceball.itch.io",
        redraws: ['PTCG']
    },
    {
        name : "huttaburger", // aka Hut
        imageNameOverride: "",
        uniqueId: "HUTT",
        url: "https://x.com/huttaburger",
        redraws: ['JOHT', 'KANT', 'HYRU']
    },
    {
        name : "HyMyNameIsMatt", 
        imageNameOverride: "",
        uniqueId: "HYMY",
        url: "https://bsky.app/profile/hymynameismatt.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "HyperJerk", // aka Jerky
        imageNameOverride: "",
        uniqueId: "HYPE",
        url: "https://bsky.app/profile/hyperjerk.bsky.social",
        redraws: ['JOHT', 'KANT', 'PTCG']
    },
    //#endregion
    //#region I
    {
        name : "IllusionOfMana", 
        imageNameOverride: "",
        uniqueId: "ILLU",
        url: "https://bsky.app/profile/illusionofmana.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "ImionJay", 
        imageNameOverride: "",
        uniqueId: "IMIO",
        url: "https://bsky.app/profile/imionjay.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "incrediblemaker", 
        imageNameOverride: "",
        uniqueId: "INCR",
        url: "https://x.com/incrediblemaker",
        redraws: ['KANT']
    },
    {
        name : "infinitebrians", 
        imageNameOverride: "",
        uniqueId: "INFI",
        url: "https://bsky.app/profile/infinitebrians.neocities.org/",
        redraws: ['PTCG']
    },
    {
        name : "Inter", 
        imageNameOverride: "",
        uniqueId: "INTE",
        url: "https://www.pixiv.net/en/users/110502169",
        redraws: ['SMB3']
    },
	{
        name : "IronUdon", 
        imageNameOverride: "",
        uniqueId: "IRON",
        url: "https://ironudon.carrd.co/",
        redraws: ['JOHT', 'KRBA']
    },
    {
        name : "ItriPixels", 
        imageNameOverride: "", 
        uniqueId: "ITRI",
        url: "https://bsky.app/profile/itripixels.bsky.social",
        redraws: ['JOHT', 'KANT']
    },
    //#endregion
    //#region J
    {
        name : "Jaquiox", 
        imageNameOverride: "",
        uniqueId: "JAQU",
        url: "https://www.instagram.com/jaquiox/",
        redraws: ['CAST', 'MEG2']
    },
    {
        name : "jamesskevich", 
        imageNameOverride: "",
        uniqueId: "JAME",
        url: "https://linktr.ee/Jameskevich",
        redraws: ['HYRU']
    },
    {
        name : "JamesTDG", 
        imageNameOverride: "",
        uniqueId: "JAME_2",
        url: "https://bsky.app/profile/jamestdg.bsky.social",
        redraws: ['MEG2']
    },
    {
        name : "jammigans", 
        imageNameOverride: "",
        uniqueId: "JAMM",
        url: "https://bio.link/jammigans",
        redraws: ['SMB3']
    },
    {
        name : "javve", 
        imageNameOverride: "",
        uniqueId: "JAVE",
        url: "https://linktr.ee/javve",
        redraws: ['HYRU']
    },
    {
        name : "jdzombi_", 
        imageNameOverride: "",
        uniqueId: "JDZO",
        url: "https://bsky.app/profile/jdzombi.com",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Jenny", 
        imageNameOverride: "",
        uniqueId: "JENN",
        url: "https://bsky.app/profile/rainovershine.bsky.social",
        redraws: ['KOHO']
    },
    {
        name : "Jess9800", // aka JessTheGamingHero 
        imageNameOverride: "",
        uniqueId: "JESS",
        url: "https://bsky.app/profile/jess9800.bsky.social",
        redraws: ['JOHT', 'KRBA']
    },
    {
        name : "Jesthe_de",
        imageNameOverride: "",
        uniqueId: "JEST",
        url: "https://www.instagram.com/jesthe_dex/",
        redraws: ['PTCG']
    },
    {
        name : "JohnDAnims", 
        imageNameOverride: "",
        uniqueId: "JOHN",
        url: "https://linktr.ee/johndanims",
        redraws: ['HYRU']
    },
    {
        name : "Jonas Q", 
        imageNameOverride: "JonasQ",
        uniqueId: "JONA",
        url: "https://x.com/tripleafrog",
        redraws: ['HYRU']
    },
    {
        name : "Joogleous", 
        imageNameOverride: "",
        uniqueId: "JOOG",
        url: "https://x.com/Joogleous",
        redraws: ['KANT']
    },
    {
        name : "jooniverz", 
        imageNameOverride: "",
        uniqueId: "JOON",
        url: "https://x.com/jooniverz",
        redraws: ['KANT']
    },
    {
        name : "Joules", 
        imageNameOverride: "",
        uniqueId: "JOUL",
        url: "https://bsky.app/profile/joulespixels.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Jovvilo", 
        imageNameOverride: "",
        uniqueId: "JOVV",
        url: "https://bsky.app/profile/jovvilo.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "JPTom", 
        imageNameOverride: "",
        uniqueId: "JPTO",
        url: "https://bsky.app/profile/jptom.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "jRaido", 
        imageNameOverride: "",
        uniqueId: "JRAI",
        url: "https://bsky.app/profile/raido.moe",
        redraws: ['HYRU']
    },
    {
        name : "Juanito", // aka juanitomedinart
        imageNameOverride: "",
        uniqueId: "JUAN",
        url: "https://bsky.app/profile/juanitomedinart.bsky.social",
        redraws: ['CAST', 'HYRU', 'JOHT', 'KANT', 'KOHO', 'KRBA', 'PTCG', 'SMB3']
    },
    {
        name : "JuliaGoodish",  // aka Julia
        imageNameOverride: "",
        uniqueId: "JULI",
        url: "https://bsky.app/profile/juliagoodish.bsky.social",
        redraws: ['KANT', 'PTCG']
    },
    {
        name : "Julian Creutz", // aka julcreutz
        imageNameOverride: "JulianCreutz",
        uniqueId: "JULI_2",
        url: "https://x.com/julcreutz",
        redraws: ['HYRU']
    },
    //#endregion
    //#region K
    {
        name : "kam2D", 
        imageNameOverride: "",
        uniqueId: "KAM2",
        url: "https://x.com/kam2d",
        redraws: ['JOHT']
    },
    {
        name : "Kaos-Mass", 
        imageNameOverride: "",
        uniqueId: "KAOS",
        url: "https://bsky.app/profile/kaosmass95.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "Karhu", // aka Karhu the Bear
        imageNameOverride: "",
        uniqueId: "KARH",
        url: "https://bsky.app/profile/karhuthebear.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "KarlestonChew", 
        imageNameOverride: "",
        uniqueId: "KARL",
        url: "https://bsky.app/profile/karlestonchew.newgrounds.com",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "KawaiiKimu", 
        imageNameOverride: "",
        uniqueId: "KAWA",
        url: "https://kawaiikimu.carrd.co/",
        redraws: ['HYRU']
    },
    {
        name : "Keith_E", 
        imageNameOverride: "",
        uniqueId: "KEIT",
        url: "https://linktr.ee/keith_e",
        redraws: ['KRBA', 'MEG2']
    },
    {
        name : "kékéflipnote", 
        imageNameOverride: "kekeflipnote",
        uniqueId: "KEKE",
        url: "https://bsky.app/profile/kekeflipnote.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Kenchinator", 
        imageNameOverride: "",
        uniqueId: "KENC",
        url: "https://x.com/K3nch44",
        redraws: ['HYRU', 'KOHO']
    },
    {
        name : "Kensuyjin33", 
        imageNameOverride: "",
        uniqueId: "KENS",
        url: "https://bsky.app/profile/kensuyjin33.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Kerrie Lake", 
        imageNameOverride: "KerrieLake",
        uniqueId: "KERR",
        url: "https://bsky.app/profile/kerrielake.bsky.social",
        redraws: ['KANT', 'SMB3']
    },
    {
        name : "KhyleThePixelPrince", // aka khyledaniels
        imageNameOverride: "",
        uniqueId: "KHYL",
        url: "https://www.artstation.com/khyledaniels6",
        redraws: ['CAST', 'HYRU']
    },
    {
        name : "Kibito", 
        imageNameOverride: "",
        uniqueId: "KIBI",
        url: "https://bsky.app/profile/kibito.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Kiln", 
        imageNameOverride: "",
        uniqueId: "KILN",
        url: "https://x.com/azlef123",
        redraws: ['HYRU']
    },
    {
        name : "Kimo", 
        imageNameOverride: "",
        uniqueId: "KIMO",
        url: "https://bsky.app/profile/kimo.games",
        redraws: ['PTCG']
    },
    {
        name : "kingw", // aka King_Worrell
        imageNameOverride: "",
        uniqueId: "KING",
        url: "https://bsky.app/profile/kingworrell.bsky.social",
        redraws: ['JOHT', 'KANT', 'SMB3']
    },
    {
        name : "kinpraw", // aka Daniel Pascal
        imageNameOverride: "DanielPascal",
        uniqueId: "DANI",
        url: "https://kinpraw.carrd.co/",
        redraws: ['KRBA', 'SMB3']
    },
    {
        name : "Kitasu", 
        imageNameOverride: "",
        uniqueId: "KITA",
        url: "https://x.com/kitwahsu",
        redraws: ['HYRU']
    },
    {
        name : "KiwiComet", 
        imageNameOverride: "",
        uniqueId: "KIWI",
        url: "https://x.com/Kiwi_Comet",
        redraws: ['HYRU']
    },
    {
        name : "Klardonics", 
        imageNameOverride: "",
        uniqueId: "KLAR",
        url: "https://linktr.ee/Klardonics",
        redraws: ['KOHO']
    },
    {
        name : "Klonoz", 
        imageNameOverride: "",
        uniqueId: "KLON",
        url: "https://bsky.app/profile/klonoz.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Koguiga", 
        imageNameOverride: "",
        uniqueId: "KOGU",
        url: "https://bsky.app/profile/koguiga.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "kohemy", 
        imageNameOverride: "Kohemy",
        uniqueId: "KOHE",
        url: "https://x.com/kohemy1",
        redraws: ['CAST', 'SMB3']
    },
    {
        name : "Kosena", 
        imageNameOverride: "",
        uniqueId: "KOSE",
        url: "https://x.com/KosenaMaster",
        redraws: ['CAST']
    },
    {
        name : "Knightly", 
        imageNameOverride: "",
        uniqueId: "KNIG",
        url: "https://bsky.app/profile/knightlyphantom.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Kumpo", 
        imageNameOverride: "",
        uniqueId: "KUMP",
        url: "https://www.instagram.com/kumporigin/",
        redraws: ['HYRU']
    },
	{
        name : "Kyx", 
        imageNameOverride: "",
        uniqueId: "KYX0",
        url: "https://bsky.app/profile/channelkyx.bsky.social",
        redraws: ['JOHT']
    },
    //#endregion
    //#region L
    {
        name : "Lamington", 
        imageNameOverride: "",
        uniqueId: "LAMI",
        url: "https://linktr.ee/lamington",
        redraws: ['JOHT', 'KANT', 'KOHO', 'PTCG', 'SMB3']
    },
    {
        name : "LCSkeleton", 
        imageNameOverride: "",
        uniqueId: "LCSK",
        url: "https://bsky.app/profile/lcskeleton.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Lelm", 
        imageNameOverride: "",
        uniqueId: "LELM",
        url: "https://x.com/homuragod",
        redraws: ['KRBA']
    },
    {
        name : "Levi Bond", 
        imageNameOverride: "LeviBond",
        uniqueId: "LEVI",
        url: "https://x.com/dBXYLevi",
        redraws: ['PTCG']
    },
    {
        name : "lilolryan", 
        imageNameOverride: "",
        uniqueId: "LILO",
        url: "https://bsky.app/profile/lilolryan.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Limitiv", 
        imageNameOverride: "",
        uniqueId: "LIMI",
        url: "https://bsky.app/profile/limitiv.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "Lodeman", // aka MonsterIndieDev
        imageNameOverride: "",
        uniqueId: "LODE",
        url: "https://x.com/MonsterIndieDev",
        redraws: ['JOHT', 'KANT', 'SMB3']
    },
    {
        name : "Looloopaa", 
        imageNameOverride: "",
        uniqueId: "LOOL",
        url: "https://bsky.app/profile/looloopaa.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "LovetheLoveland", 
        imageNameOverride: "",
        uniqueId: "LOVE",
        url: "https://x.com/LovetheLoveland",
        redraws: ['KANT']
    },
	{
        name : "luciano", 
        imageNameOverride: "",
        uniqueId: "LUCI",
        url: "https://www.instagram.com/luciano.draws/",
        redraws: ['JOHT']
    },
    {
        name : "LuisEnr13182831", 
        imageNameOverride: "",
        uniqueId: "LUIS",
        url: "https://x.com/LuisEnr13182831",
        redraws: ['KANT']
    },
	{
        name : "lumena-tan", 
        imageNameOverride: "lumena_tan",
        uniqueId: "LUME",
        url: "https://x.com/lumena_tan",
        redraws: [] // Johto BGM, pending credit icon
    },
	{
        name : "Lu Nascimento", 
        imageNameOverride: "LuNascimento",
        uniqueId: "LUNA",
        url: "https://bsky.app/profile/lunascimento.art",
        redraws: ['PTCG']
    },
    {
        name : "Lyzerus", 
        imageNameOverride: "",
        uniqueId: "LYZE",
        url: "https://bsky.app/profile/lyzerus.bsky.social",
        redraws: ['CAST', 'KANT', 'KOHO', 'KRBA', 'MEG2', 'SMB3']
    },
    //#endregion
    //#region M
    {
        name : "M3ch4 N1nj4", 
        imageNameOverride: "M3ch4N1nj4",
        uniqueId: "M3CH",
        url: "https://bsky.app/profile/m3ch4n1nj4.bsky.social",
        redraws: ['KOHO']
    },
    {
        name : "mage", // aka pixelmage
        imageNameOverride: "",
        uniqueId: "PIXE",
        url: "https://linktr.ee/pixelmage",
        redraws: ['JOHT', 'KRBA', 'SMB3']
    },
    {
        name : "Mamoru",
        imageNameOverride: "",
        uniqueId: "MAMO",
        url: "https://bsky.app/profile/mamoruhik.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Manoel Gomes Neto", // aka manelsworld
        imageNameOverride: "manelsworld",
        uniqueId: "MANO",
        url: "https://bsky.app/profile/manelsworld.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Marceles", 
        imageNameOverride: "",
        uniqueId: "MARC",
        url: "https://x.com/marceles_pxl",
        redraws: ['CAST', 'JOHT']
    },
    {
        name : "Marina", // aka panno catto
        imageNameOverride: "",
        uniqueId: "MARI",
        url: "https://pannocat.to/index.html",
        redraws: ['CAST', 'JOHT', 'KOHO', 'MEG2', 'SMB3']
    },
    {
        name : "Marlowe Dobbe", 
        imageNameOverride: "MarloweDobbe",
        uniqueId: "MARL",
        url: "https://bsky.app/profile/marlowedobbe.com",
        redraws: ['PTCG']
    },
    {
        name : "Marmot", 
        imageNameOverride: "",
        uniqueId: "MARM",
        url: "https://bsky.app/profile/aminus.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "MattStov", 
        imageNameOverride: "",
        uniqueId: "MATT",
        url: "https://bsky.app/profile/mattstov.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Mattyace", 
        imageNameOverride: "unknown_artist",
        uniqueId: "MATT_2",
        url: "",
        redraws: ['HYRU']
    },
    {
        name : "MaxiSZ", 
        imageNameOverride: "",
        uniqueId: "MAXI",
        url: "https://bsky.app/profile/maxisz.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Maxime", // aka ChocoPain
        imageNameOverride: "",
        uniqueId: "MAXI_2",
        url: "https://linktr.ee/ChocoPain",
        redraws: ['HYRU']
    },
    {
        name : "Maxuwl", // aka Crab Maxuwl
        imageNameOverride: "CrabMaxuwl",
        uniqueId: "CRAB",
        url: "https://linktr.ee/maxuwlneto0",
        redraws: ['KRBA', 'SMB3']
    },
    {
        name : "Maytch", 
        imageNameOverride: "",
        uniqueId: "MAYT",
        url: "https://linktr.ee/maytch",
        redraws: ['HYRU']
    },
    {
        name : "Mazzymuse", 
        imageNameOverride: "",
        uniqueId: "MAZZ",
        url: "https://www.x.com/mazzymuse",
        redraws: ['HYRU']
    },
    {
        name : "Mechano", 
        imageNameOverride: "",
        uniqueId: "MECH",
        url: "https://bsky.app/profile/mechano.bsky.social",
        redraws: ['JOHT', 'KANT', 'SMB3']
    },
    {
        name : "MegaToon1234", 
        imageNameOverride: "",
        uniqueId: "MEGA",
        url: "https://bsky.app/profile/megatoon1234.bsky.social",
        redraws: ['KRBA', 'SMB3']
    },
	{
        name : "meleew", // aka Donin
        imageNameOverride: "",
        uniqueId: "MELE",
        url: "https://bsky.app/profile/meleew.bsky.social",
        redraws: ['KRBA', 'PIKM']
    },
	{
        name : "Meno", 
        imageNameOverride: "",
        uniqueId: "MENO",
        url: "https://menopixel.net",
        redraws: ['JOHT']
    },
    {
        name : "MetaruPX", 
        imageNameOverride: "",
        uniqueId: "META",
        url: "https://linktr.ee/MetaruPX",
        redraws: ['CAST', 'KANT', 'MEG2', 'SMB3']
    },
    {
        name : "MHBali", 
        imageNameOverride: "",
        uniqueId: "MHBA",
        url: "https://linktr.ee/mhbali",
        redraws: ['SMB3']
    },
    {
        name : "miascugh", 
        imageNameOverride: "",
        uniqueId: "MIAS",
        url: "https://linktr.ee/miascugh",
        redraws: ['MEG2']
    },
    {
        name : "Midrava", // aka Adriano Hernandez
        imageNameOverride: "",
        uniqueId: "MIDR",
        url: "https://bsky.app/profile/midrava.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Mikel Ojea", 
        imageNameOverride: "Mikel",
        uniqueId: "MIKE",
        url: "https://bsky.app/profile/romanoojea.bsky.social",
        redraws: ['JOHT', 'KOHO', 'KRBA', 'PIKM']
    },
    {
        name : "MikManc", 
        imageNameOverride: "",
        uniqueId: "MIKM",
        url: "https://x.com/mik_manc/status/1381968838393139208",
        redraws: ['HYRU']
    },
    {
        name : "minichibis", 
        imageNameOverride: "",
        uniqueId: "MINI",
        url: "https://bsky.app/profile/minichibisart.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Mintly", 
        imageNameOverride: "",
        uniqueId: "MINT",
        url: "https://bsky.app/profile/mintlyfresh.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "MIRAGE", 
        imageNameOverride: "",
        uniqueId: "MIRA",
        url: "https://bsky.app/profile/elmorethemagician.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "MobyPixel", // aka Nick Culbertson
        imageNameOverride: "",
        uniqueId: "MOBY",
        url: "https://bsky.app/profile/mobypixel.bsky.social",
        redraws: ['CAST', 'HYRU']
    },
    {
        name : "Montamer",
        imageNameOverride: "",
        uniqueId: "MONT",
        url: "https://linktr.ee/montamerkc",
        redraws: ['PTCG']
    },
    {
        name : "MoriNoAndrei", 
        imageNameOverride: "",
        uniqueId: "MORI",
        url: "https://linktr.ee/MoriNoAndrei",
        redraws: ['SMB3']
    },
    {
        name : "MorlockArt", // aka LiamCuthbertArt
        imageNameOverride: "",
        uniqueId: "MORL",
        url: "https://x.com/MorlockArt",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "MürsellJ", 
        imageNameOverride: "MursellJ",
        uniqueId: "MURS",
        url: "https://x.com/MursellJ_art",
        redraws: ['HYRU']
    },
    {
        name : "Musicajosh", 
        imageNameOverride: "",
        uniqueId: "MUSI",
        url: "https://bsky.app/profile/musicajosh.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "mysticaldrop", 
        imageNameOverride: "",
        uniqueId: "MYST",
        url: "https://www.instagram.com/mysticaldrop/",
        redraws: ['KANT']
    },
    //#endregion
    //#region N
    {
        name : "&#x3093;&#x3099;", // ん゙ ; pronounced 'nnn'
        imageNameOverride: "nnnn",
        uniqueId: "NNNN",
        url: "",
        redraws: ['JOHT']
    },
    {
        name : "natnatart", 
        imageNameOverride: "",
        uniqueId: "NATN",
        url: "https://bsky.app/profile/natnatart.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "nCesium", 
        imageNameOverride: "",
        uniqueId: "NCES",
        url: "https://bsky.app/profile/ncesium.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "NdieCity", 
        imageNameOverride: "",
        uniqueId: "NDIE",
        url: "https://bsky.app/profile/ndiecity.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "NekoCrocodile", 
        imageNameOverride: "",
        uniqueId: "NEKO",
        url: "https://linktr.ee/nekocrocodile",
        redraws: ['CAST', 'JOHT', 'KOHO', 'SMB3', 'KRBA']
    },
    {
        name : "Nekofresa", // aka floriandcp
        imageNameOverride: "nekofresa",
        uniqueId: "NEKO_2",
        url: "https://x.com/nekofresa",
        redraws: ['HYRU', 'JOHT', 'KANT']
    },
    {
        name : "NekuDemon", 
        imageNameOverride: "",
        uniqueId: "NEKU",
        url: "https://bsky.app/profile/nekudemon.bsky.social",
        redraws: ['SMB3']
    }, 
    {
        name : "Neos", 
        imageNameOverride: "",
        uniqueId: "NEOS",
        url: "https://bsky.app/profile/neos-ex.bsky.social",
        redraws: ['PTCG']
    }, 
    {
        name : "Neweegee", 
        imageNameOverride: "",
        uniqueId: "NEWE",
        url: "https://x.com/Neweegee",
        redraws: ['PTCG']
    }, 
    {
        name : "NHMoon", 
        imageNameOverride: "",
        uniqueId: "NHMO",
        url: "https://x.com/NHorologiumRPG",
        redraws: ['HYRU']
    },
    {
        name : "Ninety", 
        imageNameOverride: "",
        uniqueId: "NINE",
        url: "https://x.com/NinetyDev",
        redraws: ['KANT', 'SMB3']
    },
	{
        name : "NnekArt", 
        imageNameOverride: "",
        uniqueId: "NNEK",
        url: "https://bsky.app/profile/nnekart.bsky.sociall",
        redraws: ['JOHT']
    },
    {
        name : "NOION", 
        imageNameOverride: "",
        uniqueId: "NOIO",
        url: "https://bsky.app/profile/noionart.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "NOP", 
        imageNameOverride: "",
        uniqueId: "NOP0",
        url: "https://bsky.app/profile/noppixels.bsky.social",
        redraws: ['KOHO']
    },
    {
        name : "Normal_Neighbor", 
        imageNameOverride: "",
        uniqueId: "NORM",
        url: "https://www.instagram.com/normal_neighbor/",
        redraws: ['CAST', 'KOHO', 'PIKM', 'SMB3']
    },
    {
        name : "Nyru", 
        imageNameOverride: "",
        uniqueId: "NYRU",
        url: "https://bsky.app/profile/nyrusin.bsky.social",
        redraws: ['PTCG']
    },
    //#endregion
    //#region O
    {
        name : "Ogladian", 
        imageNameOverride: "",
        uniqueId: "OGLA",
        url: "https://bsky.app/profile/ogladian.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "OhNoItsMonroe", 
        imageNameOverride: "",
        uniqueId: "OHNO",
        url: "https://bsky.app/profile/ohnoitsmonroe.bsky.social",
        redraws: ['KANT']
    },
	{
        name : "Okkle", 
        imageNameOverride: "",
        uniqueId: "OKKL",
        url: "https://www.artstation.com/okkle",
        redraws: ['PIKM']
    },
	{
        name : "Olive",  // aka livvygizzy
        imageNameOverride: "",
        uniqueId: "OLIV",
        url: "https://livvyglizzy.carrd.co/",
        redraws: ['JOHT']
	},
    {
        name : "oouhriu", 
        imageNameOverride: "unknown_artist",
        uniqueId: "OOUH",
        url: "https://www.reddit.com/user/oouhriu",
        redraws: ['JOHT']
    },
    {
        name : "Oroshibu", 
        imageNameOverride: "",
        uniqueId: "OROS",
        url: "https://bsky.app/profile/oroshibu.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Ota", 
        imageNameOverride: "",
        uniqueId: "OTA0",
        url: "https://linktr.ee/otapxl",
        redraws: ['KOHO', 'KRBA', 'SMB3']
    },
    {
        name : "OvergrownRobot", 
        imageNameOverride: "",
        uniqueId: "OVER",
        url: "https://bsky.app/profile/overgrownrobot.zip",
        redraws: ['HYRU']
    },
    //#endregion
    //#region P
    {
        name : "PaperFire88", 
        imageNameOverride: "",
        uniqueId: "PAPE",
        url: "https://bsky.app/profile/paperfire88.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Paprika_d", 
        imageNameOverride: "",
        uniqueId: "PAPR",
        url: "https://x.com/Paprika_d",
        redraws: ['KANT']
    },
    {
        name : "Pavanz", 
        imageNameOverride: "",
        uniqueId: "PAVA",
        url: "https://bsky.app/profile/pavanz.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "PawkiUwU", 
        imageNameOverride: "",
        uniqueId: "PAWK",
        url: "https://bsky.app/profile/pawkiuwu.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "peachpxl", 
        imageNameOverride: "",
        uniqueId: "PEAC",
        url: "https://bsky.app/profile/peachpxl.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "pedroxturbo", 
        imageNameOverride: "",
        uniqueId: "PEDR",
        url: "https://bsky.app/profile/pedroxturbo.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "PeepingOwl", // aka beckyOwlMusic
        imageNameOverride: "",
        uniqueId: "PEEP",
        url: "https://bsky.app/profile/peepingowl.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Pencilwing", 
        imageNameOverride: "",
        uniqueId: "PENC",
        url: "https://bsky.app/profile/pencilwing.bsky.social",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Pikethorne", 
        imageNameOverride: "",
        uniqueId: "PIKE",
        url: "https://www.pikethorne.net/",
        redraws: ['KOHO', 'MEG2', 'SMB3']
    },
    {
        name : "pinselschubser", 
        imageNameOverride: "",
        uniqueId: "PINS",
        url: "https://x.com/pinselschubser",
        redraws: ['CAST', 'SMB3']
    },
    {
        name : "Pixel_Pit", 
        imageNameOverride: "",
        uniqueId: "PIXE_3",
        url: "https://x.com/Pixel_Pit",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Pixel Profligate", 
        imageNameOverride: "PixelProfligate",
        uniqueId: "PIXE_9",
        url: "https://www.tumblr.com/pixelprofligate",
        redraws: ['PTCG']
    },
    {
        name : "Pixel Scorpion", // aka Darth_Scorpion
        imageNameOverride: "Darth_Scorpion",
        uniqueId: "DART",
        url: "https://darkscorpion19.carrd.co/",
        redraws: ['JOHT', 'KOHO', 'PTCG']
    },
    {
        name : "PixelEric", 
        imageNameOverride: "",
        uniqueId: "PIXE_2",
        url: "https://pixeleric.carrd.co/",
        redraws: ['CAST']
    },
    {
        name : "PixelTeriyaki", 
        imageNameOverride: "",
        uniqueId: "PIXE_0",
        url: "https://bsky.app/profile/pixelteriyaki.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "PixeledBeard", 
        imageNameOverride: "",
        uniqueId: "PIXE_8",
        url: "https://bsky.app/profile/pixeledbeard.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Pixelgroover", 
        imageNameOverride: "pixelgroover",
        uniqueId: "PIXE_6",
        url: "https://bsky.app/profile/pixelgroover.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "Pixelkauz", 
        imageNameOverride: "",
        uniqueId: "PIXE_4",
        url: "https://bsky.app/profile/pixelkauz.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "pixellerjeremy", 
        imageNameOverride: "",
        uniqueId: "PIXE_5",
        url: "https://x.com/pixellerjeremy",
        redraws: ['KANT']
    },
    {
        name : "PixelSword94", 
        imageNameOverride: "",
        uniqueId: "PIXE_7",
        url: "https://bsky.app/profile/pixelsword94.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "PixlToast", 
        imageNameOverride: "",
        uniqueId: "PIXL",
        url: "https://pixltoast.art/",
        redraws: ['PTCG']
    },
    {
        name : "PizzaFrankza", 
        imageNameOverride: "",
        uniqueId: "PIZZ",
        url: "https://bsky.app/profile/pizzafrank.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "PJBgamer", 
        imageNameOverride: "",
        uniqueId: "PJBG",
        url: "https://bsky.app/profile/pjbgamer.bsky.social",
        redraws: ['MEG2', 'SMB3']
    },
    {
        name : "Pkdotts", 
        imageNameOverride: "",
        uniqueId: "PKDO",
        url: "https://linktr.ee/pkdotts",
        redraws: ['KOHO']
    },
	{
        name : "Poinko", 
        imageNameOverride: "",
        uniqueId: "POIN",
        url: "https://bsky.app/profile/poinko.bsky.social",
        redraws: ['PTCG']
    },
	{
        name : "Pokerus", 
        imageNameOverride: "",
        uniqueId: "PRUS",
        url: "https://www.youtube.com/@pokerusproject",
        redraws: []
    },
	{
        name : "pokets", 
        imageNameOverride: "",
        uniqueId: "POKE",
        url: "https://bsky.app/profile/pokets.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Polinovodno", // aka PolonoAbono
        imageNameOverride: "",
        uniqueId: "POLI",
        url: "https://bsky.app/profile/polinovodno.bsky.social ",
        redraws: ['KRBA']
    },
    {
        name : "PolyB", 
        imageNameOverride: "",
        uniqueId: "POLY_2",
        url: "https://linktr.ee/datpolyb",
        redraws: ['HYRU']
    },
    {
        name : "Polyducks", 
        imageNameOverride: "",
        uniqueId: "POLY",
        url: "https://bsky.app/profile/polyducks.co.uk",
        redraws: ['KANT', 'PTCG']
    },
    {
        name : "Porble", // aka Benjamin Wendt
        imageNameOverride: "",
        uniqueId: "PORB",
        url: "https://linktr.ee/porblegames",
        redraws: ['HYRU']
    },
    {
        name : "PotatoCheep", 
        imageNameOverride: "",
        uniqueId: "POTA",
        url: "https://x.com/generic_most",
        redraws: ['JOHT', 'KOHO', 'KRBA']
    },
    {
        name : "Profesor Tabarra", 
        imageNameOverride: "ProfesorTabarra",
        uniqueId: "PROF",
        url: "https://bsky.app/profile/profesortabarra.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Purple Sea", 
        imageNameOverride: "PurpleSea",
        uniqueId: "PURP",
        url: "https://bsky.app/profile/purplesea.bsky.social",
        redraws: ['PTCG']
    },
    //#endregion
    //#region Q
	{
        name : "Chris Quay", // aka Quay
        imageNameOverride: "Quay",
        uniqueId: "QUAY",
        url: "https://bsky.app/profile/chrisquay.com",
        redraws: ['PIKM', 'KRBA']
    },
    {
        name : "Quickalas", 
        imageNameOverride: "quickalas",
        uniqueId: "QUIC",
        url: "https://bsky.app/profile/quickalas.bsky.social",
        redraws: ['KANT']
    },
    //#endregion
    //#region R
    {
        name : "Rakun", 
        imageNameOverride: "",
        uniqueId: "RAKU",
        url: "https://bsky.app/profile/rakun01.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Rami", 
        imageNameOverride: "",
        uniqueId: "RAMI",
        url: "https://x.com/r_ramenoodles",
        redraws: ['JOHT', 'KANT', 'SMB3']
    },
    {
        name : "Raspberry Milkshake",
        imageNameOverride: "RaspberryMilks1",
        uniqueId: "RASP",
        url: "https://bsky.app/profile/raspberrymilkshake.bsky.social",
        redraws: ['HYRU', 'JOHT', 'KANT']
    },
    {
        name : "RaSy",
        imageNameOverride: "",
        uniqueId: "RASY",
        url: "https://bsky.app/profile/rasy0809.bsky.social",
        redraws: ['KRBA']
    },
    {
        name : "Rata", // aka nasCobolo
        imageNameOverride: "",
        uniqueId: "RATA",
        url: "https://bsky.app/profile/ratazart.bsky.social",
        redraws: ['CAST', 'KOHO', 'SMB3']
    },
    {
        name : "rbatistadelima", 
        imageNameOverride: "",
        uniqueId: "RBAT",
        url: "https://bsky.app/profile/rbatistadelima.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "RedRachis", // aka JonTheRealJon
        imageNameOverride: "",
        uniqueId: "REDR",
        url: "https://bsky.app/profile/redrachis.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "re4mat", 
        imageNameOverride: "",
        uniqueId: "RE4M",
        url: "https://bsky.app/profile/re4mat.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Reesereeserson", 
        imageNameOverride: "",
        uniqueId: "REES",
        url: "https://x.com/reesereeserson",
        redraws: ['SMB3']
    },
    {
        name : "Reineke", 
        imageNameOverride: "",
        uniqueId: "REIN",
        url: "https://linktr.ee/reineke",
        redraws: ['HYRU']
    },
    {
        name : "RENREN", // aka MistaJub
        imageNameOverride: "",
        uniqueId: "RENR",
        url: "https://bsky.app/profile/mistajub.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "rephildesign", // aka Phil Giarrusso
        imageNameOverride: "",
        uniqueId: "REPH",
        url: "https://bsky.app/profile/rephildesign.bsky.social",
        redraws: ['JOHT', 'KRBA', 'MEG2', 'SONP']
    },
    {
        name : "rh_thing", // aka Whawha, Wawa
        imageNameOverride: "",
        uniqueId: "WHAW",
        url: "https://bsky.app/profile/rhthing.bsky.social",
        redraws: ['KRBA', 'MEG2']
    },
    {
        name : "Robin Quinn", 
        imageNameOverride: "RobinQuinn",
        uniqueId: "ROBI",
        url: "https://bsky.app/profile/robinquinn.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Robster89", 
        imageNameOverride: "",
        uniqueId: "ROBS",
        url: "https://x.com/Robsterpixels",
        redraws: ['SMB3']
    },
    {
        name : "ROger", // aka rugi_kong
        imageNameOverride: "",
        uniqueId: "ROGE",
        url: "https://bsky.app/profile/rugikong.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Rongiebyul", 
        imageNameOverride: "",
        uniqueId: "RONG",
        url: "https://www.instagram.com/rongiebyul/",
        redraws: ['PTCG']
    },
    {
        name : "rose-bushes",
        imageNameOverride: "",
        uniqueId: "ROSE",
        url: "https://bsky.app/profile/rose-bushes.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Roybot", 
        imageNameOverride: "unknown_artist",
        uniqueId: "ROYB",
        url: "",
        redraws: ['HYRU']
    },
    {
        name : "Rudy Flores", 
        imageNameOverride: "RudyFlores",
        uniqueId: "RUDY",
        url: "https://bsky.app/profile/rudyflores93.bsky.social",
        redraws: ['CAST', 'SMB3']
    },
    {
        name : "Rukvsin", 
        imageNameOverride: "",
        uniqueId: "RUKV",
        url: "https://x.com/Rukvsin",
        redraws: ['KANT']
    },
    {
        name : "RunicPixels", 
        imageNameOverride: "",
        uniqueId: "RUNI",
        url: "https://bsky.app/profile/runicpixels.nl",
        redraws: ['KANT']
    },
    {
        name : "Runtd", 
        imageNameOverride: "",
        uniqueId: "RUNT",
        url: "https://linktr.ee/runtd",
        redraws: ['CAST', 'KOHO', 'KRBA', 'MEG2']
    },
    {
        name : "RyanKeeton", 
        imageNameOverride: "",
        uniqueId: "RYAN",
        url: "https://bsky.app/profile/ryankeeton.bsky.social",
        redraws: ['CAST']
    },
    //#endregion
    //#region S
    {
        name : "SalamiChild", 
        imageNameOverride: "",
        uniqueId: "SALA",
        url: "https://x.com/SalamiChild",
        redraws: ['KANT']
    },
    {
        name : "Salem", 
        imageNameOverride: "",
        uniqueId: "SALE",
        url: "https://bsky.app/profile/salem1337.newgrounds.com",
        redraws: ['PTCG']
    },
    {
        name : "saltiestbunny", 
        imageNameOverride: "",
        uniqueId: "SALT",
        url: "https://bsky.app/profile/saltiestbunny.bsky.social",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Sam Webster", // aka Webster Likes Games, webster89
        imageNameOverride: "SamWebster",
        uniqueId: "WEBS",
        url: "https://bsky.app/profile/samwebster.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "SamtheSalmon", 
        imageNameOverride: "",
        uniqueId: "SAMT",
        url: "https://x.com/SamThe_Salmon",
        redraws: ['KOHO']
    },
    {
        name : "SarahBoevingArt", 
        imageNameOverride: "",
        uniqueId: "SARA",
        url: "https://bsky.app/profile/sarahboev.bsky.social",
        redraws: ['KANT', 'KRBA']
    },
    {
        name : "Sarnyoger", // aka sarn, plutobirdo
        imageNameOverride: "",
        uniqueId: "SARN",
        url: "https://bsky.app/profile/plutobirdo.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Sazdx", 
        imageNameOverride: "",
        uniqueId: "SAZD",
        url: "https://linktr.ee/SazdxHikari",
        redraws: ['HYRU']
    },
    {
        name : "Scooter", // aka Loren Radis
        imageNameOverride: "",
        uniqueId: "SCOO",
        url: "https://www.lorenradis.com/",
        redraws: ['CAST', 'HYRU', 'SMB3']
    },
    {
        name : "SethInTheSpace", 
        imageNameOverride: "",
        uniqueId: "SETH",
        url: "https://linktr.ee/SethInTheSpace",
        redraws: ['CAST', 'JOHT', 'SMB3']
    },
    {
        name : "Seva86706122", 
        imageNameOverride: "",
        uniqueId: "SEVA",
        url: "https://x.com/Seva86706122",
        redraws: ['KANT']
    },
    {
        name : "shdCharm",
        imageNameOverride: "",
        uniqueId: "SHDC",
        url: "https://x.com/shdcharm",
        redraws: ['JOHT']
    },
    {
        name : "ShinoSarna", // aka shino1 
        imageNameOverride: "",
        uniqueId: "SHIN",
        url: "https://bsky.app/profile/shino1.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "ShinySeabass", 
        imageNameOverride: "",
        uniqueId: "SHIN_2",
        url: "https://linktr.ee/ShinySeabass",
        redraws: ['HYRU']
    }, 
    {
        name : "Sienna Blumstengel", 
        imageNameOverride: "SiennaBlumstengel",
        uniqueId: "SIEN",
        url: "https://bsky.app/profile/blumstengel.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "SilssP", 
        imageNameOverride: "",
        uniqueId: "SILS",
        url: "https://bsky.app/profile/silssp.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Sinvilla", // aka 1Sinvilla
        imageNameOverride: "",
        uniqueId: "1SIN",
        url: "https://bsky.app/profile/sinvilla.bsky.social",
        redraws: ['HYRU', 'KANT']
    },
    {
        name : "SJPixels", // aka PixelsSj
        imageNameOverride: "",
        uniqueId: "SJPI",
        url: "https://scottwelfare2.wixsite.com/sjpixels",
        redraws: ['HYRU', 'JOHT', 'KANT', 'SMB3']
    },
    {
        name : "skeddles", 
        imageNameOverride: "",
        uniqueId: "SKED",
        url: "https://bsky.app/profile/skeddles.com",
        redraws: ['PTCG']
    },
    {
        name : "Skemonde", 
        imageNameOverride: "",
        uniqueId: "SKEM",
        url: "https://bsky.app/profile/skemonde.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Slash", 
        imageNameOverride: "",
        uniqueId: "SLAS",
        url: "",
        redraws: ['PTCG']
    },
    {
        name : "Sleezy", 
        imageNameOverride: "",
        uniqueId: "SLEE",
        url: "https://bsky.app/profile/sleezy.art",
        redraws: ['SMB3']
    },
    {
        name : "Slima", 
        imageNameOverride: "",
        uniqueId: "SLIM",
        url: "https://slima11.nekoweb.org/",
        redraws: ['KRBA']
    },
    {
        name : "SmarmyElf", 
        imageNameOverride: "",
        uniqueId: "SMAR",
        url: "https://x.com/SmarmyElf",
        redraws: ['KANT']
    },
    {
        name : "Smoking Moon", 
        imageNameOverride: "Smokingmoon",
        uniqueId: "SMOK",
        url: "https://linktr.ee/smokingmoon",
        redraws: ['KOHO']
    },
    {
        name : "SnakeBlock", 
        imageNameOverride: "",
        uniqueId: "SNAK",
        url: "https://bsky.app/profile/snakeblock.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "Sofi Solorzano", // aka sofi
        imageNameOverride: "sofi",
        uniqueId: "SOFI",
        url: "https://x.com/Sofimei_JMJ",
        redraws: ['JOHT']
    },
    {
        name : "Sora_x2", 
        imageNameOverride: "",
        uniqueId: "SORA",
        url: "https://x.com/sora_pixel",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Space-AgeWrangler", 
        imageNameOverride: "",
        uniqueId: "SPAC",
        url: "https://space-agewrangler.newgrounds.com/",
        redraws: ['KRBA', 'MEG2', 'SMB3']
    },
    {
        name : "SpaceBiker", 
        imageNameOverride: "",
        uniqueId: "SPAC_2",
        url: "https://bsky.app/profile/spacebiker.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Sperbs", 
        imageNameOverride: "",
        uniqueId: "SPER",
        url: "https://x.com/DrZicter",
        redraws: ['HYRU']
    },
    {
        name : "squp", 
        imageNameOverride: "",
        uniqueId: "SQUP",
        url: "https://bsky.app/profile/did:plc:xye6v4txjbv7agxbie5hjjlk",
        redraws: ['HYRU']
    },
    {
        name : "Sr Pelo", 
        imageNameOverride: "SrPelo",
        uniqueId: "SRPE",
        url: "https://bsky.app/profile/srpelo.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "starzxjing", 
        imageNameOverride: "",
        uniqueId: "STAR",
        url: "https://www.instagram.com/starzxjing",
        redraws: ['PTCG']
    },
    {
        name : "stdio.gypsy", // aka art_vandelay
        imageNameOverride: "stdiogypsy",
        uniqueId: "STDI",
        url: "",
        redraws: ['JOHT']
    },
    {
        name : "Steel",
        imageNameOverride: "",
        uniqueId: "STEE",
        url: "https://bsky.app/profile/steelstyle.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Stefan", // aka MercuryBD
        imageNameOverride: "",
        uniqueId: "STEF",
        url: "https://x.com/MercuryBD",
        redraws: ['CAST']
    },
    {
        name : "Steven McCarthy", 
        imageNameOverride: "StevenMcCarthy",
        uniqueId: "STEV",
        url: "https://bsky.app/profile/1988stevenm.bsky.social",
        redraws: ['CAST', 'JOHT', 'KRBA', 'MEG2', 'SMB3']
    },
    {
        name : "StrawBe", // aka StrawPact, StrawB
        imageNameOverride: "",
        uniqueId: "STRA",
        url: "https://bsky.app/profile/strawpact.bsky.social",
        redraws: ['CAST', 'KANT', 'KOHO', 'KRBA', 'MEG2', 'PTCG', 'SMB3']
    },
    {
        name : "Strix", // aka StrixPixels
        imageNameOverride: "",
        uniqueId: "STRI",
        url: "https://bsky.app/profile/strixpixels.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "sukinapan", 
        imageNameOverride: "",
        uniqueId: "SUKI",
        url: "https://www.instagram.com/sukinapan/",
        redraws: ['KANT']
    },
    {
        name : "Super Edco", 
        imageNameOverride: "SuperEdco",
        uniqueId: "SUPE_2",
        url: "https://www.instagram.com/super_edco/",
        redraws: ['KRBA']
    },
    {
        name : "sus", 
        imageNameOverride: "",
        uniqueId: "SUS0",
        url: "https://x.com/suspixelart",
        redraws: ['HYRU']
    },
    //#endregion
    //#region T
    {
        name : "t3nshi", 
        imageNameOverride: "",
        uniqueId: "T3NS",
        url: "https://bsky.app/profile/t3nshi.bsky.social",
        redraws: ['KANT', 'SMB3']
    },
    {
        name : "Tanu", 
        imageNameOverride: "",
        uniqueId: "TANU",
        url: "https://linktr.ee/tanupxl",
        redraws: ['HYRU', 'KANT', 'KOHO']
    },
    {
        name : "Tanuki", 
        imageNameOverride: "",
        uniqueId: "TANU_2",
        url: "https://linktr.ee/tanukitype",
        redraws: ['CAST']
    },
    {
        name : "TDW", // aka TheDarkWarrior, Lord_SForcer
        imageNameOverride: "",
        uniqueId: "TDW0",
        url: "https://x.com/Lord_SForcer",
        redraws: ['JOHT', 'SMB3']
    },
    {
        name : "Tetra", // aka Lombre, ElHombreLombre
        imageNameOverride: "",
        uniqueId: "TETR",
        url: "https://bsky.app/profile/tetraminose.bsky.social",
        redraws: ['CAST', 'PTCG', 'SMB3']
    },
    {
        name : "ThatLeftHandMan", 
        imageNameOverride: "",
        uniqueId: "THAT",
        url: "https://bsky.app/profile/thatlefthandman.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "TheBurningFlare", // aka CordRocker
        imageNameOverride: "",
        uniqueId: "THEB",
        url: "https://cordrocker.carrd.co/",
        redraws: ["PIKM", 'SMB3']
    },
    {
        name : "thedragonllama", 
        imageNameOverride: "",
        uniqueId: "THED",
        url: "https://linktr.ee/thedragonllama",
        redraws: ['HYRU', 'SMB3']
    },
    {
        name : "TheMightyAndre", 
        imageNameOverride: "",
        uniqueId: "THEM",
        url: "https://bsky.app/profile/themightyandre.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "thoughtwavelet", 
        imageNameOverride: "",
        uniqueId: "THOU",
        url: "https://x.com/thoughtwavelet",
        redraws: ['JOHT', 'KANT']
    }, 
    {
        name : "TidnBits", // aka Tiddles'N'Bits
        imageNameOverride: "",
        uniqueId: "TIDN",
        url: "https://x.com/TidnBits",
        redraws: ['HYRU']
    },
    {
        name : "TimelessShrine", 
        imageNameOverride: "",
        uniqueId: "TIME",
        url: "https://x.com/TimelessShrine",
        redraws: ['PTCG']
    },
    {
        name : "Tippedchair", 
        imageNameOverride: "",
        uniqueId: "TIPP",
        url: "https://bsky.app/profile/tippedchair.bsky.social",
        redraws: ['HYRU', 'KRBA']
    },
    {
        name : "toadinspace", 
        imageNameOverride: "",
        uniqueId: "TOAD",
        url: "https://ko-fi.com/toadinspace",
        redraws: ['KANT']
    },
    {
        name : "Toadzillart", 
        imageNameOverride: "",
        uniqueId: "TODZ",
        url: "https://x.com/Toadzillart",
        redraws: ['JOHT']
    },
	{
        name : "Toasted", 
        imageNameOverride: "",
        uniqueId: "TOAS",
        url: "https://bsky.app/profile/toastedpixel.bsky.social",
        redraws: ['JOHT']
    },	
    {
        name : "TolerableToast", // aka MageUntalented 
        imageNameOverride: "",
        uniqueId: "TOLE",
        url: "https://x.com/MageUntalented",
        redraws: ['HYRU']
    },
    {
        name : "Toni M", 
        imageNameOverride: "ToniM",
        uniqueId: "TONI",
        url: "https://bsky.app/profile/pixelsmil.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Tony Redmer", 
        imageNameOverride: "TonyRedmer",
        uniqueId: "TONY",
        url: "https://bsky.app/profile/tonyredmer.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Tori Roberts", 
        imageNameOverride: "Toribobs",
        uniqueId: "TORI",
        url: "https://bsky.app/profile/toribobs.bsky.social",
        redraws: ['HYRU']
    },
    {
        name : "TortleDove", 
        imageNameOverride: "",
        uniqueId: "TORT",
        url: "https://bsky.app/profile/tortledove.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Trevor Lowe", 
        imageNameOverride: "TrevorLowe",
        uniqueId: "TREV",
        url: "https://bsky.app/profile/moncraft.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Trianull", 
        imageNameOverride: "",
        uniqueId: "TRIA",
        url: "https://x.com/Trianull",
        redraws: ['KRBA']
    },
    {
        name : "Tyler Friedel", 
        imageNameOverride: "TylerFriedel",
        uniqueId: "TYLE",
        url: "https://bsky.app/profile/tfriedel217.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Tyltal", 
        imageNameOverride: "",
        uniqueId: "TYLT",
        url: "https://bsky.app/profile/tyltal.bsky.social",
        redraws: ['KANT', 'JOHT', 'PIKM', 'SMB3']
    },
    //#endregion
    //#region U
    {
        name : "undermuncher",
        imageNameOverride: "",
        uniqueId: "UNDE",
        url: "https://x.com/UnderMuncher",
        redraws: ['PTCG']
    },
    {
        name : "Unsettled", // aka _unsettled_
        imageNameOverride: "",
        uniqueId: "UNSE",
        url: "https://x.com/_unsettled_",
        redraws: ['JOHT', 'KANT', 'SMB3']
    },
    {
        name : "unsilentwill", 
        imageNameOverride: "",
        uniqueId: "UNSI",
        url: "https://linktr.ee/unsilentwill",
        redraws: ['JOHT', 'KOHO', 'KRBA', 'MEG2', 'SMB3']
    },
    //#endregion
    //#region V
    {
        name : "VCorbi", 
        imageNameOverride: "",
        uniqueId: "VCOR",
        url: "https://x.com/VCorbi",
        redraws: ['KANT']
    },
    {
        name : "victoria", 
        imageNameOverride: "",
        uniqueId: "VICT",
        url: "https://bsky.app/profile/came2slide.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Vierbit", 
        imageNameOverride: "",
        uniqueId: "VIER",
        url: "https://x.com/vierbit",
        redraws: ['CAST']
    },
    {
        name : "VioletVT_", 
        imageNameOverride: "",
        uniqueId: "VIOL",
        url: "https://x.com/violetvt_",
        redraws: ['JOHT']
    },
    {
        name : "Vulpixis", 
        imageNameOverride: "",
        uniqueId: "VULP",
        url: "https://bsky.app/profile/vulpixis.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "vvvultures", // aka vvvvvvv
        imageNameOverride: "",
        uniqueId: "VVVU",
        url: "https://bsky.app/profile/vvvultures.bsky.social",
        redraws: ['HYRU', 'JOHT', 'MEG2', 'PIKM']
    },
    //#endregion
    //#region W
    {
        name : "Warxwell", 
        imageNameOverride: "",
        uniqueId: "WARX",
        url: "https://x.com/warxwell",
        redraws: ['JOHT']
    },
    {
        name : "weny_arts", 
        imageNameOverride: "",
        uniqueId: "WENY",
        url: "https://www.instagram.com/weny_arts4",
        redraws: ['KANT']
    },
    {
        name : "Will Lewis", 
        imageNameOverride: "WillLewis",
        uniqueId: "WILL_2",
        url: "https://bsky.app/profile/gamewill.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "willsmithx4", 
        imageNameOverride: "",
        uniqueId: "WILL",
        url: "https://bsky.app/profile/willsmithx4.bsky.social",
        redraws: ['KANT']
    },
    {
        name : "Wilperi", // aka Wilbs
        imageNameOverride: "",
        uniqueId: "WILP",
        url: "https://linktr.ee/wilperi",
        redraws: ['KOHO', 'KRBA', 'PTCG', 'SMB3']
    },
    {
        name : "Winston Chan",
        imageNameOverride: "WinstonChan",
        uniqueId: "WINS",
        url: "https://bsky.app/profile/cwingsyun.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "witch_warren", 
        imageNameOverride: "",
        uniqueId: "WITC",
        url: "https://linktr.ee/myles_mccoy",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Wlqwos", 
        imageNameOverride: "",
        uniqueId: "WLQW",
        url: "https://readymag.website/u871104037/wlqwos/",
        redraws: ['PTCG']
    }, 
    {
        name : "Woodspixl", 
        imageNameOverride: "",
        uniqueId: "WOOD",
        url: "https://bsky.app/profile/woodspixl.bsky.social",
        redraws: ['JOHT', 'KANT', 'KOHO']
    },
    {
        name : "Wortel", 
        imageNameOverride: "",
        uniqueId: "WORT",
        url: "https://bsky.app/profile/wortelkk.neocities.org",
        redraws: ['SMB3']
    },
    {
        name : "Wuchta", 
        imageNameOverride: "",
        uniqueId: "WUCH",
        url: "https://bsky.app/profile/wuchta.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "WukongJr", 
        imageNameOverride: "",
        uniqueId: "WUKO",
        url: "https://x.com/WuKongJr_Art",
        redraws: ['KOHO', 'SMB3']
    },
    //#endregion
    //#region X
    {
        name : "Xanday", 
        imageNameOverride: "",
        uniqueId: "XAND",
        url: "http://www.xanday.com",
        redraws: ['CAST']
    },
    {
        name : "xCoolswiftx", 
        imageNameOverride: "",
        uniqueId: "XCOO",
        url: "https://x.com/xCoolswiftx",
        redraws: ['KANT']
    },
    //#endregion
    //#region Y
    {
        name : "YaBoiMatteeDubbz", 
        imageNameOverride: "",
        uniqueId: "YABO",
        url: "https://yaboimatteedubbz.carrd.co/",
        redraws: ['HYRU']
    },
    {
        name : "Yam_Boy_", 
        imageNameOverride: "",
        uniqueId: "YAMB",
        url: "https://x.com/Yam_Boy_",
        redraws: ['JOHT', 'KANT']
    },
    {
        name : "Yammy", 
        imageNameOverride: "",
        uniqueId: "YAMM",
        url: "https://bsky.app/profile/yammy16.bsky.social",
        redraws: ['SMB3']
    },
    {
        name : "Yo-Hokki", 
        imageNameOverride: "",
        uniqueId: "YOHO",
        url: "https://bsky.app/profile/yohokki.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Yokaiy", 
        imageNameOverride: "",
        uniqueId: "YOKA",
        url: "https://bsky.app/profile/yokaiy.bsky.social",
        redraws: ['JOHT', 'KANT', 'KOHO']
    },
    {
        name : "Yolkghost", // aka Yolklyghostly, Justice8Knight
        imageNameOverride: "",
        uniqueId: "YOLK",
        url: "https://x.com/yolklyghostly/",
        redraws: ['JOHT', 'KANT', 'SMB3']
    },
    {
        name : "YukiPixels", // aka Yuki
        imageNameOverride: "",
        uniqueId: "YUKI",
        url: "https://bsky.app/profile/yukipixels.bsky.social",
        redraws: ['KANT', 'PTCG']
    },
    {
        name : "Yumipiku", 
        imageNameOverride: "",
        uniqueId: "YUMI",
        url: "https://yumipiku.carrd.co/",
        redraws: ['SMB3']
    },
    {
        name : "Yutami", 
        imageNameOverride: "",
        uniqueId: "YUTA",
        url: "https://bsky.app/profile/artbyyutami.bsky.social",
        redraws: ['PTCG']
    },
    //#endregion
    //#region Z
    {
        name : "Zach Soares", 
        imageNameOverride: "ZachSoares",
        uniqueId: "ZACH",
        url: "https://voxels.ca/",
        redraws: ['PTCG']
    },
    {
        name : "Zaebucca",
        imageNameOverride: "",
        uniqueId: "ZAEB",
        url: "https://zaebucca.carrd.co/",
        redraws: ['HYRU', 'JOHT', 'KANT', 'KOHO', 'PTCG'] 
    },
    {
        name : "ZaniPixels", 
        imageNameOverride: "",
        uniqueId: "ZANI",
        url: "https://bsky.app/profile/zanipixels.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Zernek", 
        imageNameOverride: "",
        uniqueId: "ZERN",
        url: "https://bsky.app/profile/zernek.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Zikoure", // aka SuperZikoure 
        imageNameOverride: "",
        uniqueId: "SUPE",
        url: "https://bsky.app/profile/zikoure.me",
        redraws: ['KANT']
    },
    {
        name : "Zuko Dave", 
        imageNameOverride: "ZukoDave",
        uniqueId: "ZUKO",
        url: "https://bsky.app/profile/zukodave.bsky.social",
        redraws: ['PTCG']
    },
    {
        name : "Zushi3DHero", 
        imageNameOverride: "",
        uniqueId: "ZUSH",
        url: "https://linktr.ee/zushi3dhero",
        redraws: ['JOHT', 'KOHO', 'KRBA']
    },
    //#endregion
    //#region ?
    {
        name : "????",   // Used for dummy
        imageNameOverride: "unknown_artist",
        uniqueId: "UNDF",       
        url: ""
    },
	{
        name : "Unclaimed",   // Used for unclaimed maps
        imageNameOverride: "discord",
        uniqueId: "OPEN",       
        url: "https://discord.gg/gCVj29v7rM"
    }
    //#endregion
];
