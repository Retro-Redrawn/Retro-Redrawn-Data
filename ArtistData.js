var template = [
    {
        name : "The name of the artist, for string display", 
        imageNameOverride: "The name of the artist for their avatar data",
        uniqueId: "Unique identifier code used in case of dupes or name changes; standard is 4 characters, 0 for spaces, _X for common 4 letter codes",
        url: "Ideally a link hub to avoid constant updates."
    }
];

var redraws = ['HYRU', 'JOHT', 'KANT', 'CAST', 'SMB3', 'KOHO', 'PIKM', 'KRBA']

var artists = [
    //#region #
    {
        name : "1000_toasters", 
        imageNameOverride: "",
        uniqueId: "1000",
        url: "https://bsky.app/profile/1000toasters.bsky.social",
        redraws: []
    },
    {
        name : "1800FROGS", 
        imageNameOverride: "",
        uniqueId: "1800",
        url: "https://x.com/1800frogs",
        redraws: ['JOHT']
    },
    //#endregion
    //#region A
    {
        name : "a chair", 
        imageNameOverride: "achair",
        uniqueId: "ACHA",
        url: "https://bsky.app/profile/cielchair.bsky.social",
        redraws: []
    },
    {
        name : "ac2Dart", 
        imageNameOverride: "",
        uniqueId: "AC2D",
        url: "https://x.com/ac2dart",
        redraws: ['CAST']
    },
    {
        name : "AceCanti", 
        imageNameOverride: "",
        uniqueId: "ACEC",
        url: "https://x.com/AceCanti",
        redraws: []
    },
    {
        name : "Agua Hervida", // aka h2ohervida
        imageNameOverride: "AguaHervida",
        uniqueId: "AGUA",
        url: "https://linktr.ee/AguaHervida",
        redraws: []
    },
    {
        name : "Aina", 
        imageNameOverride: "",
        uniqueId: "AINA",
        url: "https://ainasge.carrd.co/",
        redraws: []
    },
    {
        name : "Airyucat", 
        imageNameOverride: "",
        uniqueId: "AIRY",
        url: "http://airyu.cat/",
        redraws: []
    },
    {
        name : "Alwore", 
        imageNameOverride: "",
        uniqueId: "ALWO",
        url: "https://x.com/alwore_",
        redraws: []
    }, 
    {
        name : "Anima_nel", 
        imageNameOverride: "",
        uniqueId: "ANIM",
        url: "https://bsky.app/profile/anima-nel.bsky.social",
        redraws: ['CAST', 'JOHT']
    },
    {
        name : "Arisuki", 
        imageNameOverride: "",
        uniqueId: "ARIS",
        url: "https://bsky.app/profile/arisuki.bsky.social",
        redraws: []
    },
    {
        name : "Arkflinn", 
        imageNameOverride: "",
        uniqueId: "ARKF",
        url: "https://linktr.ee/arkflinn",
        redraws: ['CAST']
    },
	{
        name : "ARONBAE", 
        imageNameOverride: "",
        uniqueId: "ARON",
        url: "https://linktr.ee/aronbae",
        redraws: ['JOHT']
    },
    {
        name : "Artificer", 
        imageNameOverride: "",
        uniqueId: "ARTI",
        url: "https://artificer111.carrd.co/",
        redraws: []
    },
    {
        name : "ArtOfLaurel", 
        imageNameOverride: "",
        uniqueId: "ARTO",
        url: "https://art.laurelkoeniger.com/",
        redraws: []
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
        redraws: []
    },
    {
        name : "Ashton: Retrocade Media", 
        imageNameOverride: "AshtonArnold",
        uniqueId: "ASHT",
        url: "https://bsky.app/profile/retrocademedia.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Atcero", 
        imageNameOverride: "",
        uniqueId: "ATCE",
        url: "https://bsky.app/profile/atcero.bsky.social",
        redraws: []
    },
    {
        name : "AtticusFinn", 
        imageNameOverride: "",
        uniqueId: "ATTI",
        url: "https://linktr.ee/atticusfinn",
        redraws: ['JOHT']
    },
    {
        name : "audreyTBDS", 
        imageNameOverride: "",
        uniqueId: "AUDR",
        url: "https://x.com/audreytbds",
        redraws: ['JOHT']
    },
    //#endregion
    //#region B
    {
        name : "Backflipsimmons", 
        imageNameOverride: "",
        uniqueId: "BACK",
        url: "https://linktr.ee/backflipsimmons",
        redraws: []
    },
    {
        name : "barosaros", 
        imageNameOverride: "",
        uniqueId: "BARO",
        url: "https://bsky.app/profile/barosaros.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "batfeula", 
        imageNameOverride: "",
        uniqueId: "BATF",
        url: "https://bsky.app/profile/batfeula.bsky.social",
        redraws: ['CAST', 'JOHT']
    },
    {
        name : "BG", 
        imageNameOverride: "",
        uniqueId: "BG00",
        url: "https://linktr.ee/bg_pixlarnD",
        redraws: []
    },
    {
        name : "Beetroot Paul", 
        imageNameOverride: "beetrootpaul",
        uniqueId: "BEET",
        url: "https://beetrootpaul.com/",
        redraws: []
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
        redraws: []
    },
    {
        name : "BleuPale", 
        imageNameOverride: "",
        uniqueId: "BLEU",
        url: "https://linktr.ee/bleu_pale",
        redraws: []
    },
    {
        name : "blind3dbylight", 
        imageNameOverride: "",
        uniqueId: "BLIN",
        url: "https://linktr.ee/blind3dbylight",
        redraws: []
    },
    {
        name : "Blindeduif", 
        imageNameOverride: "",
        uniqueId: "BLIN_2",
        url: "https://linktr.ee/blindeduif",
        redraws: ['CAST']
    },
    {
        name : "Brando", // aka FullMetalBrando
        imageNameOverride: "",
        uniqueId: "BRAN",
        url: "https://linktr.ee/brandoparm",
        redraws: []
    },
    {
        name : "Broken Gamer X",
        imageNameOverride: "BrokenGamerX",
        uniqueId: "BROK",
        url: "https://bsky.app/profile/brokengamerx.bsky.social",
        redraws: []
    },
    {
        name : "BTdangelo", 
        imageNameOverride: "",
        uniqueId: "BTDA",
        url: "https://linktr.ee/btdangelo",
        redraws: []
    },
    //#endregion
    //#region C
    {
        name : "came2slide", 
        imageNameOverride: "",
        uniqueId: "CAME",
        url: "https://bsky.app/profile/came2slide.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Cerberus", 
        imageNameOverride: "",
        uniqueId: "CERB",
        url: "https://x.com/HellhoundVideo",
        redraws: []
    },
    {
        name : "chamomeow", 
        imageNameOverride: "",
        uniqueId: "CHAM",
        url: "https://bsky.app/profile/chamomeow.bsky.social",
        redraws: []
    },
    {
        name : "CheesyPaninie", 
        imageNameOverride: "",
        uniqueId: "CHEE",
        url: "https://bsky.app/profile/cheesypaninie.bsky.social",
        redraws: []
    },
    {
        name : "Chibi_Jame", 
        imageNameOverride: "",
        uniqueId: "CHIB",
        url: "https://x.com/Chibi_Jame",
        redraws: []
    },
    {
        name : "Chico D. Mar", // aka MerSaloon, offbeat
        imageNameOverride: "ChicoDMar",
        uniqueId: "CHIC",
        url: "https://linktr.ee/MerSaloon",
        redraws: []
    },
    {
        name : "ChJa", // aka cjlm123
        imageNameOverride: "",
        uniqueId: "CHJA",
        url: "https://pixeljoint.com/p/220173.htm",
        redraws: []
    },
    {
        name : "Chren", 
        imageNameOverride: "",
        uniqueId: "CHRE",
        url: "https://x.com/chreniafoka",
        redraws: []
    },
    {
        name : "chromegnomes", 
        imageNameOverride: "",
        uniqueId: "CHRO",
        url: "https://bsky.app/profile/chromegnomes.bsky.social",
        redraws: []
    },
    {
        name : "Chubbo", 
        imageNameOverride: "",
        uniqueId: "CHUB",
        url: "https://www.instagram.com/chubbopx",
        redraws: ['CAST']
    },
    {
        name : "CJJammies", 
        imageNameOverride: "",
        uniqueId: "CJJA",
        url: "https://linktr.ee/CJJammies",
        redraws: []
    },
    {
        name : "ckelsallpxls", 
        imageNameOverride: "",
        uniqueId: "CKEL",
        url: "https://bsky.app/profile/ckelsallpxls.bsky.social",
        redraws: ['JOHT']
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
        redraws: []
    },
    {
        name : "Coelacamth", 
        imageNameOverride: "",
        uniqueId: "COEL",
        url: "https://bsky.app/profile/coelacamth.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Corbí", 
        imageNameOverride: "Corbi",
        uniqueId: "CORB",
        url: "https://x.com/VCorbi",
        redraws: []
    },
    {
        name : "Crab Maxuwl", 
        imageNameOverride: "CrabMaxuwl",
        uniqueId: "CRAB",
        url: "https://linktr.ee/maxuwlneto0",
        redraws: []
    },
    {
        name : "Crimson Kero", // aka Anonymous-Frog
        imageNameOverride: "CrimsonKero",
        uniqueId: "CRIM",
        url: "https://anonymous-frog.newgrounds.com/",
        redraws: []
    },
    {
        name : "crizz", 
        imageNameOverride: "",
        uniqueId: "CRIZ",
        url: "https://x.com/crizzpix",
        redraws: []
    },
    {
        name : "Croey", 
        imageNameOverride: "",
        uniqueId: "CROE",
        url: "https://bsky.app/profile/croey.bsky.social",
        redraws: []
    },
    {
        name : "Crowno", 
        imageNameOverride: "",
        uniqueId: "CROW",
        url: "https://bsky.app/profile/crowno.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "cure_pixel", 
        imageNameOverride: "",
        uniqueId: "CURE_2",
        url: "https://bsky.app/profile/curepixel.bsky.social",
        redraws: []
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
        redraws: []
    },
    {
        name : "Daizha", // aka scribulls
        imageNameOverride: "",
        uniqueId: "DAIZ",
        url: "https://x.com/scribulls",
        redraws: []
    },
    {
        name : "Damian", 
        imageNameOverride: "",
        uniqueId: "DAMI",
        url: "https://x.com/koopajr",
        redraws: []
    },
    {
        name : "Dan Velasquez", 
        imageNameOverride: "DanVelasquez",
        uniqueId: "DANV",
        url: "https://linktr.ee/danvelasquezart",
        redraws: []
    },
    {
        name : "Daniel Pascal", // aka kinpraw
        imageNameOverride: "DanielPascal",
        uniqueId: "DANI",
        url: "https://kinpraw.carrd.co/",
        redraws: []
    },
    {
        name : "DaNinjaManZ", 
        imageNameOverride: "",
        uniqueId: "DANI_2",
        url: "https://bsky.app/profile/daninjamanz.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Darth_Scorpion", 
        imageNameOverride: "",
        uniqueId: "DART",
        url: "https://darkscorpion19.carrd.co/",
        redraws: []
    },
    {
        name : "Dax_zZ", 
        imageNameOverride: "",
        uniqueId: "DAXZ",
        url: "https://daxid.ch/pixelart/",
        redraws: []
    },
    {
        name : "Daydreamer", 
        imageNameOverride: "",
        uniqueId: "DAYD",
        url: "https://bsky.app/profile/daydreamer94.bsky.social",
        redraws: []
    },
    {
        name : "ddoobysnax", // aka ddooby
        imageNameOverride: "ddooby",
        uniqueId: "DDOO",
        url: "https://bsky.app/profile/ddoobysnax.bsky.social",
        redraws: []
    },
    {
        name : "Dema", // aka xtrarare
        imageNameOverride: "",
        uniqueId: "DEMA",
        url: "https://bsky.app/profile/xtrarare.bsky.social",
        redraws: []
    },
    {
        name : "DeviFoxx", 
        imageNameOverride: "",
        uniqueId: "DEVI",
        url: "https://bsky.app/profile/devifoxx.bsky.social",
        redraws: []
    },
    {
        name : "Dewdneym", // aka Dewndeym 
        imageNameOverride: "",
        uniqueId: "DEWN",
        url: "http://dewdneym.cool/",
        redraws: ['JOHT']
    },
    {
        name : "diamchan", 
        imageNameOverride: "",
        uniqueId: "DIAM",
        url: "https://bsky.app/profile/dioshiba.newgrounds.com",
        redraws: []
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
        redraws: ['JOHT']
    },
    {
        name : "discoduro", 
        imageNameOverride: "",
        uniqueId: "DISC_2",
        url: "https://bsky.app/profile/discoduro.bsky.social",
        redraws: []
    },
    {
        name : "Doki", 
        imageNameOverride: "",
        uniqueId: "DOKI",
        url: "https://bsky.app/profile/zabludoki.bsky.social",
        redraws: []
    },
    {
        name : "DonFastidius", 
        imageNameOverride: "",
        uniqueId: "DONF",
        url: "https://www.instagram.com/donfastidius1337/",
        redraws: ['CAST']
    },    
	{
        name : "DontaeRiceArt", 
        imageNameOverride: "",
        uniqueId: "DONT",
        url: "https://bsky.app/profile/dontaericeart.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Donpo", // aka Don
        imageNameOverride: "",
        uniqueId: "DONP",
        url: "https://bsky.app/profile/donpixels.bsky.social",
        redraws: ['CAST']
    }, 
    {
        name : "DumDrums", 
        imageNameOverride: "",
        uniqueId: "DUMD",
        url: "https://bsky.app/profile/dumdrums.bsky.social",
        redraws: []
    },
    {
        name : "DutchDinosaur", // aka lily
        imageNameOverride: "",
        uniqueId: "DUTC",
        url: "https://www.illy95.nl/",
        redraws: []
    },
    {
        name : "Dusty", 
        imageNameOverride: "",
        uniqueId: "DUST",
        url: "https://linktr.ee/dustyshouri",
        redraws: []
    },
    {
        name : "Dylz49", 
        imageNameOverride: "",
        uniqueId: "DYLZ",
        url: "https://linktr.ee/Dylz49",
        redraws: []
    },
    //#endregion
    //#region E
    {
        name : "EdelweissPkmn", 
        imageNameOverride: "",
        uniqueId: "EDEL",
        url: "https://x.com/EdelweissPkmn",
        redraws: ['JOHT']
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
        redraws: []
    },
    {
        name : "Emmazapan", 
        imageNameOverride: "",
        uniqueId: "EMMA",
        url: "https://linktr.ee/emmazapan",
        redraws: []
    },
    {
        name : "Enchanteur", // aka Pick a Boo, Pikaboo 
        imageNameOverride: "",
        uniqueId: "ENCH",
        url: "https://www.artstation.com/merlinmuret",
        redraws: []
    },
    {
        name : "EnricosUt", 
        imageNameOverride: "",
        uniqueId: "ENRI",
        url: "https://enricosut.carrd.co/",
        redraws: []
    },
    {
        name : "Eto2D", 
        imageNameOverride: "",
        uniqueId: "ETO2",
        url: "https://bsky.app/profile/eto2d.bsky.social",
        redraws: []
    },
    {
        name : "Etta3413", 
        imageNameOverride: "",
        uniqueId: "ETTA",
        url: "https://x.com/Etta3413",
        redraws: []
    },
    //#endregion
    //#region F
    {
        name : "fiopico",
        imageNameOverride: "",
        uniqueId: "FIOP",
        url: "https://fiopico.wixsite.com/fiopico",
        redraws: []
    },
	{
        name : "Flavia-Elric",
        imageNameOverride: "flaviaelric",
        uniqueId: "FLAV",
        url: "https://flavia-elric.carrd.co/",
        redraws: []
    },
    {
        name : "floppy",
        imageNameOverride: "",
        uniqueId: "FLOP",
        url: "https://linktr.ee/FloppyVelarde",
        redraws: []
    },
    {
        name : "focara", // aka ForcaraEvasion
        imageNameOverride: "",
        uniqueId: "FOCA",
        url: "https://bsky.app/profile/realfocara.bsky.social",
        redraws: []
    },
    {
        name : "Foofarawr", // aka Foo
        imageNameOverride: "",
        uniqueId: "FOOF",
        url: "https://linktr.ee/foofarawr",
        redraws: ['CAST', 'JOHT']
    },
    {
        name : "FoxxDrive", 
        imageNameOverride: "",
        uniqueId: "FOXX",
        url: "https://bsky.app/profile/foxxdrive.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Fry",
        imageNameOverride: "",
        uniqueId: "FRY0",
        url: "https://bsky.app/profile/westenfry.bsky.social",
        redraws: []
    },
	{
        name : "Fuzzy",
        imageNameOverride: "",
        uniqueId: "FUZZ",
        url: "https://www.instagram.com/fuzzystudios01/",
        redraws: []
    },
    //#endregion
    //#region G
    {
        name : "GenoCL", 
        imageNameOverride: "",
        uniqueId: "GENO",
        url: "https://genocl.carrd.co/",
        redraws: []
    },
    {
        name : "Ghoulee", 
        imageNameOverride: "",
        uniqueId: "GHOU",
        url: "https://bsky.app/profile/ghouleebones.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "gif_not_jiff", 
        imageNameOverride: "",
        uniqueId: "GIFN",
        url: "https://x.com/gif_not_jif",
        redraws: []
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
        imageNameOverride: "",
        uniqueId: "GLAC",
        url: "",
        redraws: []
    },
    {
        name : "GlitchedPie", 
        imageNameOverride: "",
        uniqueId: "GLIT",
        url: "https://bsky.app/profile/glitchedpie.bsky.social",
        redraws: []
    },
	{
        name : "Goldstarknight", 
        imageNameOverride: "",
        uniqueId: "GOLD",
        url: "https://goldstarknight.carrd.co/",
        redraws: ['JOHT']
    },
	{
        name : "Gonstar", 
        imageNameOverride: "",
        uniqueId: "GONS",
        url: "https://www.instagram.com/gonstar_",
        redraws: ['JOHT']
    },
    {
        name : "gravityblocks", 
        imageNameOverride: "",
        uniqueId: "GRAV",
        url: "https://x.com/gravityblocks1",
        redraws: []
    },
    {
        name : "Gwen Sandel", 
        imageNameOverride: "GwenSandel",
        uniqueId: "GWEN",
        url: "https://gwensandel.neocities.org/",
        redraws: []
    },
    //#endregion
    //#region H
    {
        name : "HadianK", 
        imageNameOverride: "",
        uniqueId: "HADI",
        url: "https://x.com/HaddianK",
        redraws: []
    },
    {
        name : "Hapiel", 
        imageNameOverride: "",
        uniqueId: "HAPI",
        url: "https://x.com/Hapiel",
        redraws: []
    },
    {
        name : "HansDenuevo", 
        imageNameOverride: "",
        uniqueId: "HANS",
        url: "https://bsky.app/profile/hansdenuevo.bsky.social",
        redraws: []
    },
    {
        name : "HaywireJo", 
        imageNameOverride: "",
        uniqueId: "HAYW",
        url: "https://haywirejo.com/",
        redraws: ['CAST']
    },
	{
        name : "Hibi", 
        imageNameOverride: "",
        uniqueId: "HIBI",
        url: "https://beacons.ai/hibiverse",
        redraws: ['JOHT']
    },
    {
        name : "huttaburger", // aka Hut
        imageNameOverride: "",
        uniqueId: "HUTT",
        url: "https://x.com/huttaburger",
        redraws: ['JOHT']
    },
    {
        name : "HyMyNameIsMatt", 
        imageNameOverride: "",
        uniqueId: "HYMY",
        url: "https://bsky.app/profile/hymynameismatt.bsky.social",
        redraws: []
    },
    {
        name : "HyperJerk", // aka Jerky
        imageNameOverride: "",
        uniqueId: "HYPE",
        url: "https://bsky.app/profile/hyperjerk.bsky.social",
        redraws: ['JOHT']
    },
    //#endregion
    //#region I
    {
        name : "IllusionOfMana", 
        imageNameOverride: "",
        uniqueId: "ILLU",
        url: "https://bsky.app/profile/illusionofmana.bsky.social",
        redraws: []
    },
    {
        name : "ImionJay", 
        imageNameOverride: "",
        uniqueId: "IMIO",
        url: "https://bsky.app/profile/imionjay.bsky.social",
        redraws: []
    },
    {
        name : "incrediblemaker", 
        imageNameOverride: "",
        uniqueId: "INCR",
        url: "https://x.com/incrediblemaker",
        redraws: []
    },
    {
        name : "Inter", 
        imageNameOverride: "",
        uniqueId: "INTE",
        url: "https://www.pixiv.net/en/users/110502169",
        redraws: []
    },
	{
        name : "IronUdon", 
        imageNameOverride: "",
        uniqueId: "IRON",
        url: "https://ironudon.carrd.co/",
        redraws: ['JOHT']
    },
    {
        name : "ItriPixels", 
        imageNameOverride: "",
        uniqueId: "ITRI",
        url: "https://bsky.app/profile/itripixels.bsky.social",
        redraws: []
    },
    //#endregion
    //#region J
    {
        name : "Jaquiox", 
        imageNameOverride: "",
        uniqueId: "JAQU",
        url: "https://www.instagram.com/jaquiox/",
        redraws: ['CAST']
    },
    {
        name : "jamesskevich", 
        imageNameOverride: "",
        uniqueId: "JAME",
        url: "https://linktr.ee/Jameskevich",
        redraws: []
    },
    {
        name : "jammigans", 
        imageNameOverride: "",
        uniqueId: "JAMM",
        url: "https://bio.link/jammigans",
        redraws: []
    },
    {
        name : "javve", 
        imageNameOverride: "",
        uniqueId: "JAVE",
        url: "https://linktr.ee/javve",
        redraws: []
    },
    {
        name : "jdzombi_", 
        imageNameOverride: "",
        uniqueId: "JDZO",
        url: "https://bsky.app/profile/jdzombi.com",
        redraws: ['JOHT']
    },
    {
        name : "Jenny", 
        imageNameOverride: "",
        uniqueId: "JENN",
        url: "https://bsky.app/profile/rainovershine.bsky.social",
        redraws: []
    },
    {
        name : "JohnDAnims", 
        imageNameOverride: "",
        uniqueId: "JOHN",
        url: "https://linktr.ee/johndanims",
        redraws: []
    },
    {
        name : "Jonas Q", 
        imageNameOverride: "JonasQ",
        uniqueId: "JONA",
        url: "https://x.com/tripleafrog",
        redraws: []
    },
    {
        name : "Joogleous", 
        imageNameOverride: "",
        uniqueId: "JOOG",
        url: "https://x.com/Joogleous",
        redraws: []
    },
    {
        name : "jooniverz", 
        imageNameOverride: "",
        uniqueId: "JOON",
        url: "https://x.com/jooniverz",
        redraws: []
    },
    {
        name : "Joules", 
        imageNameOverride: "",
        uniqueId: "JOUL",
        url: "https://bsky.app/profile/joulespixels.bsky.social",
        redraws: []
    },
    {
        name : "jRaido", 
        imageNameOverride: "",
        uniqueId: "JRAI",
        url: "https://bsky.app/profile/raido.moe",
        redraws: []
    },
    {
        name : "Juanito", 
        imageNameOverride: "",
        uniqueId: "JUAN",
        url: "https://bsky.app/profile/juanitomedinart.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "JuliaGoodish", 
        imageNameOverride: "",
        uniqueId: "JULI",
        url: "https://bsky.app/profile/juliagoodish.bsky.social",
        redraws: []
    },
    {
        name : "Julian Creutz", // aka julcreutz
        imageNameOverride: "JulianCreutz",
        uniqueId: "JULI_2",
        url: "https://x.com/julcreutz",
        redraws: []
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
        name : "KarlestonChew", 
        imageNameOverride: "",
        uniqueId: "KARL",
        url: "https://bsky.app/profile/karlestonchew.newgrounds.com",
        redraws: []
    },
    {
        name : "KawaiiKimu", 
        imageNameOverride: "",
        uniqueId: "KAWA",
        url: "https://kawaiikimu.carrd.co/",
        redraws: []
    },
    {
        name : "Kenchinator", 
        imageNameOverride: "",
        uniqueId: "KENC",
        url: "https://x.com/K3nch44",
        redraws: []
    },
    {
        name : "Kerrie Lake", 
        imageNameOverride: "KerrieLake",
        uniqueId: "KERR",
        url: "https://bsky.app/profile/kerrielake.bsky.social",
        redraws: []
    },
    {
        name : "KhyleThePixelPrince", // aka khyledaniels
        imageNameOverride: "",
        uniqueId: "KHYL",
        url: "https://www.artstation.com/khyledaniels6",
        redraws: ['CAST']
    },
    {
        name : "Kiln", 
        imageNameOverride: "",
        uniqueId: "KILN",
        url: "https://x.com/azlef123",
        redraws: []
    },
    {
        name : "kingw", // aka King_Worrell
        imageNameOverride: "",
        uniqueId: "KING",
        url: "https://bsky.app/profile/kingworrell.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Kitasu", 
        imageNameOverride: "",
        uniqueId: "KITA",
        url: "https://x.com/kitwahsu",
        redraws: []
    },
    {
        name : "KiwiComet", 
        imageNameOverride: "",
        uniqueId: "KIWI",
        url: "https://x.com/Kiwi_Comet",
        redraws: []
    },
    {
        name : "Klardonics", 
        imageNameOverride: "",
        uniqueId: "KLAR",
        url: "https://linktr.ee/Klardonics",
        redraws: []
    },
    {
        name : "kohemy", 
        imageNameOverride: "Kohemy",
        uniqueId: "KOHE",
        url: "https://x.com/kohemy1",
        redraws: ['CAST']
    },
    {
        name : "Kosena", 
        imageNameOverride: "",
        uniqueId: "KOSE",
        url: "https://x.com/KosenaMaster",
        redraws: ['CAST']
    },
    {
        name : "Kumpo", 
        imageNameOverride: "",
        uniqueId: "KUMP",
        url: "https://www.instagram.com/kumporigin/",
        redraws: []
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
        redraws: []
    },
    {
        name : "Lodeman", // aka MonsterIndieDev
        imageNameOverride: "",
        uniqueId: "LODE",
        url: "https://x.com/MonsterIndieDev",
        redraws: []
    },
    {
        name : "Lombre", 
        imageNameOverride: "",
        uniqueId: "LOMB",
        url: "https://x.com/ElHombreLombre",
        redraws: ['CAST']
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
        redraws: []
    },
	{
        name : "luciano", 
        imageNameOverride: "",
        uniqueId: "LUCI",
        url: "https://www.instagram.com/luciano.draws/",
        redraws: []
    },
    {
        name : "LuisEnr13182831", 
        imageNameOverride: "",
        uniqueId: "LUIS",
        url: "https://x.com/LuisEnr13182831",
        redraws: []
    },
	{
        name : "lumena-tan", 
        imageNameOverride: "lumena_tan",
        uniqueId: "LUME",
        url: "https://x.com/lumena_tan",
        redraws: []
    },
    {
        name : "Lyzerus", 
        imageNameOverride: "",
        uniqueId: "LYZE",
        url: "https://bsky.app/profile/lyzerus.bsky.social",
        redraws: ['CAST']
    },
    //#endregion
    //#region M
    {
        name : "M3ch4 N1nj4", 
        imageNameOverride: "M3ch4N1nj4",
        uniqueId: "M3CH",
        url: "https://bsky.app/profile/m3ch4n1nj4.bsky.social",
        redraws: []
    },
    {
        name : "Marceles", 
        imageNameOverride: "",
        uniqueId: "MARC",
        url: "https://x.com/marceles_pxl",
        redraws: ['CAST']
    },
    {
        name : "Marina", 
        imageNameOverride: "",
        uniqueId: "MARI",
        url: "https://cringe.ovh/",
        redraws: ['CAST']
    },
    {
        name : "Marmot", 
        imageNameOverride: "",
        uniqueId: "MARM",
        url: "https://bsky.app/profile/aminus.bsky.social",
        redraws: []
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
        imageNameOverride: "",
        uniqueId: "MATT_2",
        url: "",
        redraws: ['']
    },
    {
        name : "MaxiSZ", 
        imageNameOverride: "",
        uniqueId: "MAXI",
        url: "https://bsky.app/profile/maxisz.bsky.social",
        redraws: []
    },
    {
        name : "Maxime", // aka ChocoPain
        imageNameOverride: "",
        uniqueId: "MAXI_2",
        url: "https://linktr.ee/ChocoPain",
        redraws: []
    },
    {
        name : "Maytch", 
        imageNameOverride: "",
        uniqueId: "MAYT",
        url: "https://linktr.ee/maytch",
        redraws: []
    },
    {
        name : "Mazzymuse", 
        imageNameOverride: "",
        uniqueId: "MAZZ",
        url: "https://www.x.com/mazzymuse",
        redraws: []
    },
    {
        name : "Mechano", 
        imageNameOverride: "",
        uniqueId: "MECH",
        url: "https://bsky.app/profile/mechano.bsky.social",
        redraws: []
    },
    {
        name : "MegaToon1234", 
        imageNameOverride: "",
        uniqueId: "MEGA",
        url: "https://bsky.app/profile/megatoon1234.bsky.social",
        redraws: []
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
        redraws: ['CAST']
    },
    {
        name : "MHBali", 
        imageNameOverride: "",
        uniqueId: "MHBA",
        url: "https://linktr.ee/mhbali",
        redraws: []
    },
    {
        name : "Mikel Ojea", 
        imageNameOverride: "Mikel",
        uniqueId: "MIKE",
        url: "https://bsky.app/profile/romanoojea.bsky.social",
        redraws: []
    },
    {
        name : "MikManc", 
        imageNameOverride: "",
        uniqueId: "MIKM",
        url: "https://x.com/mik_manc/status/1381968838393139208",
        redraws: []
    },
    {
        name : "minichibis", 
        imageNameOverride: "",
        uniqueId: "MINI",
        url: "https://bsky.app/profile/minichibisart.bsky.social",
        redraws: []
    },
    {
        name : "MIRAGE", 
        imageNameOverride: "",
        uniqueId: "MIRA",
        url: "https://bsky.app/profile/elmorethemagician.bsky.social",
        redraws: []
    },
    {
        name : "MobyPixel", 
        imageNameOverride: "",
        uniqueId: "MOBY",
        url: "https://bsky.app/profile/mobypixel.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "MoriNoAndrei", 
        imageNameOverride: "",
        uniqueId: "MORI",
        url: "https://linktr.ee/MoriNoAndrei",
        redraws: []
    },
    {
        name : "MorlockArt", // aka LiamCuthbertArt
        imageNameOverride: "",
        uniqueId: "MORL",
        url: "https://x.com/MorlockArt",
        redraws: ['JOHT']
    },
    {
        name : "MürsellJ", 
        imageNameOverride: "MursellJ",
        uniqueId: "MURS",
        url: "https://x.com/MursellJ_art",
        redraws: []
    },
    {
        name : "mysticaldrop", 
        imageNameOverride: "",
        uniqueId: "MYST",
        url: "https://www.instagram.com/mysticaldrop/",
        redraws: []
    },
    //#endregion
    //#region N
    {
        name : "natnatart", 
        imageNameOverride: "",
        uniqueId: "NATN",
        url: "https://bsky.app/profile/natnatart.bsky.social",
        redraws: []
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
        redraws: ['CAST']
    },
    {
        name : "Nekofresa", // aka floriandcp
        imageNameOverride: "nekofresa",
        uniqueId: "NEKO_2",
        url: "https://x.com/nekofresa",
        redraws: ['JOHT']
    },
    {
        name : "NekuDemon", 
        imageNameOverride: "",
        uniqueId: "NEKU",
        url: "https://bsky.app/profile/nekudemon.bsky.social",
        redraws: []
    }, 
    {
        name : "NHMoon", 
        imageNameOverride: "",
        uniqueId: "NHMO",
        url: "https://x.com/NHorologiumRPG",
        redraws: []
    },
    {
        name : "Ninety", 
        imageNameOverride: "",
        uniqueId: "NINE",
        url: "https://x.com/NinetyDev",
        redraws: []
    },
	{
        name : "NnekArt", 
        imageNameOverride: "",
        uniqueId: "NNEK",
        url: "https://bsky.app/profile/nnekart.bsky.sociall",
        redraws: []
    },
    {
        name : "NOP", 
        imageNameOverride: "",
        uniqueId: "NOP0",
        url: "https://bsky.app/profile/noppixels.bsky.social",
        redraws: []
    },
    {
        name : "Normal_Neighbor", 
        imageNameOverride: "",
        uniqueId: "NORM",
        url: "https://www.instagram.com/normal_neighbor/",
        redraws: ['CAST']
    },
    //#endregion
    //#region O
    {
        name : "OhNoItsMonroe", 
        imageNameOverride: "",
        uniqueId: "OHNO",
        url: "https://bsky.app/profile/ohnoitsmonroe.bsky.social",
        redraws: []
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
        imageNameOverride: "",
        uniqueId: "OOUH",
        url: "https://www.reddit.com/user/oouhriu",
        redraws: ['JOHT']
    },
    {
        name : "Oroshibu", 
        imageNameOverride: "",
        uniqueId: "OROS",
        url: "https://bsky.app/profile/oroshibu.bsky.social",
        redraws: []
    },
    {
        name : "Ota", 
        imageNameOverride: "",
        uniqueId: "OTA0",
        url: "https://linktr.ee/otapxl",
        redraws: []
    },
    {
        name : "OvergrownRobot", 
        imageNameOverride: "",
        uniqueId: "OVER",
        url: "https://bsky.app/profile/overgrownrobot.zip",
        redraws: []
    },
    //#endregion
    //#region P
    {
        name : "Paprika_d", 
        imageNameOverride: "",
        uniqueId: "PAPR",
        url: "https://x.com/Paprika_d",
        redraws: []
    },
    {
        name : "PawkiUwU", 
        imageNameOverride: "",
        uniqueId: "PAWK",
        url: "https://bsky.app/profile/pawkiuwu.bsky.social",
        redraws: []
    },
    {
        name : "pedroxturbo", 
        imageNameOverride: "",
        uniqueId: "PEDR",
        url: "https://bsky.app/profile/pedroxturbo.bsky.social",
        redraws: []
    },
    {
        name : "PeepingOwl", // aka beckyOwlMusic
        imageNameOverride: "",
        uniqueId: "PEEP",
        url: "https://bsky.app/profile/peepingowl.bsky.social",
        redraws: []
    },
    {
        name : "Pencilwing", 
        imageNameOverride: "",
        uniqueId: "PENC",
        url: "https://bsky.app/profile/pencilwing.bsky.social",
        redraws: []
    },
    {
        name : "Pikethorne", 
        imageNameOverride: "",
        uniqueId: "PIKE",
        url: "https://www.pikethorne.net/",
        redraws: []
    },
    {
        name : "pinselschubser", 
        imageNameOverride: "",
        uniqueId: "PINS",
        url: "https://x.com/pinselschubser",
        redraws: ['CAST']
    },
    {
        name : "Pixel_Pit", 
        imageNameOverride: "",
        uniqueId: "PIXE_3",
        url: "https://x.com/Pixel_Pit",
        redraws: ['JOHT']
    },
    {
        name : "PixelEric", 
        imageNameOverride: "",
        uniqueId: "PIXE_2",
        url: "https://pixeleric.carrd.co/",
        redraws: ['CAST']
    },
    {
        name : "Pixelgroover", 
        imageNameOverride: "pixelgroover",
        uniqueId: "PIXE_6",
        url: "https://bsky.app/profile/pixelgroover.bsky.social",
        redraws: []
    },
    {
        name : "Pixelkauz", 
        imageNameOverride: "",
        uniqueId: "PIXE_4",
        url: "https://bsky.app/profile/pixelkauz.bsky.social",
        redraws: []
    },
    {
        name : "pixellerjeremy", 
        imageNameOverride: "",
        uniqueId: "PIXE_5",
        url: "https://x.com/pixellerjeremy",
        redraws: []
    },
    {
        name : "pixelmage", 
        imageNameOverride: "",
        uniqueId: "PIXE",
        url: "https://linktr.ee/pixelmage",
        redraws: []
    },
    {
        name : "PixelSword94", 
        imageNameOverride: "",
        uniqueId: "PIXE_7",
        url: "https://bsky.app/profile/pixelsword94.bsky.social",
        redraws: []
    },
    {
        name : "PizzaFrankza", 
        imageNameOverride: "",
        uniqueId: "PIZZ",
        url: "https://bsky.app/profile/pizzafrank.bsky.social",
        redraws: []
    },
    {
        name : "PJBgamer", 
        imageNameOverride: "",
        uniqueId: "PJBG",
        url: "https://bsky.app/profile/pjbgamer.bsky.social",
        redraws: []
    },
    {
        name : "Pkdotts", 
        imageNameOverride: "",
        uniqueId: "PKDO",
        url: "https://linktr.ee/pkdotts",
        redraws: []
    },
	{
        name : "Pokerus", 
        imageNameOverride: "",
        uniqueId: "PRUS",
        url: "https://www.youtube.com/@pokerusproject",
        redraws: []
    },
    {
        name : "PolyB", 
        imageNameOverride: "",
        uniqueId: "POLY_2",
        url: "https://linktr.ee/datpolyb",
        redraws: []
    },
    {
        name : "Polyducks", 
        imageNameOverride: "",
        uniqueId: "POLY",
        url: "https://bsky.app/profile/polyducks.co.uk",
        redraws: []
    },
    {
        name : "Porble", // aka Benjamin Wendt
        imageNameOverride: "",
        uniqueId: "PORB",
        url: "https://linktr.ee/porblegames",
        redraws: []
    },
    {
        name : "PotatoCheep", 
        imageNameOverride: "",
        uniqueId: "POTA",
        url: "https://x.com/generic_most",
        redraws: []
    },
    //#endregion
    //#region Q
	{
        name : "Chris Quay", // aka Quay
        imageNameOverride: "Quay",
        uniqueId: "QUAY",
        url: "https://bsky.app/profile/chrisquay.com",
        redraws: []
    },
    {
        name : "Quickalas", 
        imageNameOverride: "quickalas",
        uniqueId: "QUIC",
        url: "https://bsky.app/profile/quickalas.bsky.social",
        redraws: []
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
        redraws: []
    },
    {
        name : "Raspberry Milkshake",
        imageNameOverride: "RaspberryMilks1",
        uniqueId: "RASP",
        url: "https://bsky.app/profile/raspberrymilkshake.bsky.social",
        redraws: []
    },
    {
        name : "Rata", // aka nasCobolo
        imageNameOverride: "",
        uniqueId: "RATA",
        url: "https://bsky.app/profile/ratazart.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "rbatistadelima", 
        imageNameOverride: "",
        uniqueId: "RBAT",
        url: "https://bsky.app/profile/rbatistadelima.bsky.social",
        redraws: []
    },
    {
        name : "RedRachis", // aka JonTheRealJon
        imageNameOverride: "",
        uniqueId: "REDR",
        url: "https://bsky.app/profile/redrachis.bsky.social",
        redraws: []
    },
    {
        name : "re4mat", 
        imageNameOverride: "",
        uniqueId: "RE4M",
        url: "https://bsky.app/profile/re4mat.bsky.social",
        redraws: []
    },
    {
        name : "Reesereeserson", 
        imageNameOverride: "",
        uniqueId: "REES",
        url: "https://x.com/reesereeserson",
        redraws: []
    },
    {
        name : "Reineke", 
        imageNameOverride: "",
        uniqueId: "REIN",
        url: "https://linktr.ee/reineke",
        redraws: []
    },
    {
        name : "RENREN", // aka MistaJub
        imageNameOverride: "",
        uniqueId: "RENR",
        url: "https://bsky.app/profile/mistajub.bsky.social",
        redraws: []
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
        redraws: []
    },
    {
        name : "ROger", // aka rugi_kong
        imageNameOverride: "",
        uniqueId: "ROGE",
        url: "https://bsky.app/profile/rugikong.bsky.social",
        redraws: []
    },
    {
        name : "rose-bushes",
        imageNameOverride: "",
        uniqueId: "ROSE",
        url: "https://bsky.app/profile/rose-bushes.bsky.social",
        redraws: []
    },
    {
        name : "Roybot", 
        imageNameOverride: "",
        uniqueId: "ROYB",
        url: "",
        redraws: []
    },
    {
        name : "Rudy Flores", 
        imageNameOverride: "RudyFlores",
        uniqueId: "RUDY",
        url: "https://bsky.app/profile/rudyflores93.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "Rukvsin", 
        imageNameOverride: "",
        uniqueId: "RUKV",
        url: "https://x.com/Rukvsin",
        redraws: []
    },
    {
        name : "RunicPixels", 
        imageNameOverride: "",
        uniqueId: "RUNI",
        url: "https://bsky.app/profile/runicpixels.nl",
        redraws: []
    },
    {
        name : "Runtd", 
        imageNameOverride: "",
        uniqueId: "RUNT",
        url: "https://linktr.ee/runtd",
        redraws: ['CAST']
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
        redraws: []
    },
    {
        name : "saltiestbunny", 
        imageNameOverride: "",
        uniqueId: "SALT",
        url: "https://bsky.app/profile/saltiestbunny.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "SamtheSalmon", 
        imageNameOverride: "",
        uniqueId: "SAMT",
        url: "https://x.com/SamThe_Salmon",
        redraws: []
    },
    {
        name : "SarahBoevingArt", 
        imageNameOverride: "",
        uniqueId: "SARA",
        url: "https://bsky.app/profile/sarahboev.bsky.social",
        redraws: []
    },
    {
        name : "Sarnyoger", // aka sarn, plutobirdo
        imageNameOverride: "",
        uniqueId: "SARN",
        url: "https://bsky.app/profile/plutobirdo.bsky.social",
        redraws: []
    },
    {
        name : "Sazdx", 
        imageNameOverride: "",
        uniqueId: "SAZD",
        url: "https://linktr.ee/SazdxHikari",
        redraws: []
    },
    {
        name : "Scooter", // aka Loren Radis
        imageNameOverride: "",
        uniqueId: "SCOO",
        url: "https://www.lorenradis.com/",
        redraws: ['CAST']
    },
    {
        name : "SethInTheSpace", 
        imageNameOverride: "",
        uniqueId: "SETH",
        url: "https://linktr.ee/SethInTheSpace",
        redraws: ['CAST']
    },
    {
        name : "Seva86706122", 
        imageNameOverride: "",
        uniqueId: "SEVA",
        url: "https://x.com/Seva86706122",
        redraws: []
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
        redraws: []
    },
    {
        name : "ShinySeabass", 
        imageNameOverride: "",
        uniqueId: "SHIN_2",
        url: "https://linktr.ee/ShinySeabass",
        redraws: []
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
        redraws: []
    },
    {
        name : "SJPixels", // aka PixelsSj
        imageNameOverride: "",
        uniqueId: "SJPI",
        url: "https://scottwelfare2.wixsite.com/sjpixels",
        redraws: ['JOHT']
    },
    {
        name : "Sleezy", 
        imageNameOverride: "",
        uniqueId: "SLEE",
        url: "https://bsky.app/profile/sleezy.art",
        redraws: []
    },
    {
        name : "SmarmyElf", 
        imageNameOverride: "",
        uniqueId: "SMAR",
        url: "https://x.com/SmarmyElf",
        redraws: []
    },
    {
        name : "Smoking Moon", 
        imageNameOverride: "Smokingmoon",
        uniqueId: "SMOK",
        url: "https://linktr.ee/smokingmoon",
        redraws: []
    },
    {
        name : "SnakeBlock", 
        imageNameOverride: "",
        uniqueId: "SNAK",
        url: "https://bsky.app/profile/snakeblock.bsky.social",
        redraws: []
    },
    {
        name : "Sora_x2", 
        imageNameOverride: "",
        uniqueId: "SORA",
        url: "https://x.com/sora_pixel",
        redraws: []
    },
    {
        name : "Space-AgeWrangler", 
        imageNameOverride: "",
        uniqueId: "SPAC",
        url: "https://space-agewrangler.newgrounds.com/",
        redraws: []
    },
    {
        name : "SpaceBiker", 
        imageNameOverride: "",
        uniqueId: "SPAC_2",
        url: "https://bsky.app/profile/spacebiker.bsky.social",
        redraws: []
    },
    {
        name : "Sperbs", 
        imageNameOverride: "",
        uniqueId: "SPER",
        url: "https://x.com/DrZicter",
        redraws: []
    },
    {
        name : "squp", 
        imageNameOverride: "",
        uniqueId: "SQUP",
        url: "https://bsky.app/profile/did:plc:xye6v4txjbv7agxbie5hjjlk",
        redraws: []
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
        redraws: ['CAST']
    },
    {
        name : "StrawBe", // aka StrawPact
        imageNameOverride: "",
        uniqueId: "STRA",
        url: "https://bsky.app/profile/strawpact.bsky.social",
        redraws: ['CAST']
    },
    {
        name : "sukinapan", 
        imageNameOverride: "",
        uniqueId: "SUKI",
        url: "https://www.instagram.com/sukinapan/",
        redraws: []
    },
    {
        name : "sus", 
        imageNameOverride: "",
        uniqueId: "SUS0",
        url: "https://x.com/suspixelart",
        redraws: []
    },
    //#endregion
    //#region T
    {
        name : "t3nshi", 
        imageNameOverride: "",
        uniqueId: "T3NS",
        url: "https://bsky.app/profile/t3nshi.bsky.social",
        redraws: []
    },
    {
        name : "Tanu", 
        imageNameOverride: "",
        uniqueId: "TANU",
        url: "https://linktr.ee/tanupxl",
        redraws: []
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
        redraws: ['JOHT']
    },
    {
        name : "Tetra", 
        imageNameOverride: "",
        uniqueId: "TETR",
        url: "https://bsky.app/profile/tetraminose.bsky.social",
        redraws: []
    },
    {
        name : "ThatLeftHandMan", 
        imageNameOverride: "",
        uniqueId: "THAT",
        url: "https://bsky.app/profile/thatlefthandman.bsky.social",
        redraws: []
    },
    {
        name : "TheBurningFlare", // aka CordRocker
        imageNameOverride: "",
        uniqueId: "THEB",
        url: "https://cordrocker.carrd.co/",
        redraws: []
    },
    {
        name : "thedragonllama", 
        imageNameOverride: "",
        uniqueId: "THED",
        url: "https://linktr.ee/thedragonllama",
        redraws: []
    },
    {
        name : "TheMightyAndre", 
        imageNameOverride: "",
        uniqueId: "THEM",
        url: "https://bsky.app/profile/themightyandre.bsky.social",
        redraws: []
    },
    {
        name : "thoughtwavelet", 
        imageNameOverride: "",
        uniqueId: "THOU",
        url: "https://x.com/thoughtwavelet",
        redraws: []
    }, 
    {
        name : "TidnBits", // aka Tiddles'N'Bits
        imageNameOverride: "",
        uniqueId: "TIDN",
        url: "https://x.com/TidnBits",
        redraws: []
    },
    {
        name : "Tippedchair", 
        imageNameOverride: "",
        uniqueId: "TIPP",
        url: "https://bsky.app/profile/tippedchair.bsky.social",
        redraws: []
    },
    {
        name : "toadinspace", 
        imageNameOverride: "",
        uniqueId: "TOAD",
        url: "https://ko-fi.com/toadinspace",
        redraws: []
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
        url: "https://www.instagram.com/toasted_pixel/",
        redraws: ['JOHT']
    },	
    {
        name : "TolerableToast", // aka MageUntalented 
        imageNameOverride: "",
        uniqueId: "TOLE",
        url: "https://x.com/MageUntalented",
        redraws: []
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
        redraws: []
    },
    {
        name : "Tyltal", 
        imageNameOverride: "",
        uniqueId: "TYLT",
        url: "https://bsky.app/profile/tyltal.bsky.social",
        redraws: []
    },
    //#endregion
    //#region U
    {
        name : "Unsettled", // aka _unsettled_
        imageNameOverride: "",
        uniqueId: "UNSE",
        url: "https://x.com/_unsettled_",
        redraws: ['JOHT']
    },
    {
        name : "unsilentwill", 
        imageNameOverride: "",
        uniqueId: "UNSI",
        url: "https://linktr.ee/unsilentwill",
        redraws: []
    },
    //#endregion
    //#region V
    {
        name : "VCorbi", 
        imageNameOverride: "",
        uniqueId: "VCOR",
        url: "https://x.com/VCorbi",
        redraws: []
    },
    {
        name : "victoria", 
        imageNameOverride: "",
        uniqueId: "VICT",
        url: "https://bsky.app/profile/came2slide.bsky.social",
        redraws: []
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
        name : "vvvultures", 
        imageNameOverride: "",
        uniqueId: "VVVU",
        url: "https://bsky.app/profile/vvvultures.bsky.social",
        redraws: []
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
        redraws: []
    },
    {
        name : "willsmithx4", 
        imageNameOverride: "",
        uniqueId: "WILL",
        url: "https://bsky.app/profile/willsmithx4.bsky.social",
        redraws: []
    },
    {
        name : "Wilperi", 
        imageNameOverride: "",
        uniqueId: "WILP",
        url: "https://linktr.ee/wilperi",
        redraws: []
    },
    {
        name : "witch_warren", 
        imageNameOverride: "",
        uniqueId: "WITC",
        url: "https://linktr.ee/myles_mccoy",
        redraws: ['JOHT']
    },
    {
        name : "Woodspixl", 
        imageNameOverride: "",
        uniqueId: "WOOD",
        url: "https://bsky.app/profile/woodspixl.bsky.social",
        redraws: ['JOHT']
    },
    {
        name : "Wortel", 
        imageNameOverride: "",
        uniqueId: "WORT",
        url: "https://bsky.app/profile/wortelkk.neocities.org",
        redraws: []
    },
    {
        name : "Wuchta", 
        imageNameOverride: "",
        uniqueId: "WUCH",
        url: "https://bsky.app/profile/wuchta.bsky.social",
        redraws: []
    },
    {
        name : "WukongJr", 
        imageNameOverride: "",
        uniqueId: "WUKO",
        url: "https://x.com/WuKongJr_Art",
        redraws: []
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
        redraws: []
    },
    //#endregion
    //#region Y
    {
        name : "YaBoiMatteeDubbz", 
        imageNameOverride: "",
        uniqueId: "YABO",
        url: "https://yaboimatteedubbz.carrd.co/",
        redraws: []
    },
    {
        name : "Yam_Boy_", 
        imageNameOverride: "",
        uniqueId: "YAMB",
        url: "https://x.com/Yam_Boy_",
        redraws: ['JOHT']
    },
    {
        name : "Yammy", 
        imageNameOverride: "",
        uniqueId: "YAMM",
        url: "https://bsky.app/profile/yammy16.bsky.social",
        redraws: []
    },
    {
        name : "Yokaiy", 
        imageNameOverride: "",
        uniqueId: "YOKA",
        url: "https://bsky.app/profile/yokaiy.bsky.social",
        redraws: []
    },
    {
        name : "Yolkghost", // aka Yolklyghostly, Justice8Knight
        imageNameOverride: "",
        uniqueId: "YOLK",
        url: "https://x.com/yolklyghostly/",
        redraws: ['JOHT']
    },
    {
        name : "YukiPixels", 
        imageNameOverride: "",
        uniqueId: "YUKI",
        url: "https://bsky.app/profile/yukipixels.bsky.social",
        redraws: []
    },
    {
        name : "Yumipiku", 
        imageNameOverride: "",
        uniqueId: "YUMI",
        url: "https://yumipiku.carrd.co/",
        redraws: []
    },
    //#endregion
    //#region Z
    {
        name : "Zaebucca", // aka sus
        imageNameOverride: "",
        uniqueId: "ZAEB",
        url: "https://zaebucca.carrd.co/",
        redraws: ['JOHT']
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
        redraws: []
    },
    {
        name : "Zushi3DHero", 
        imageNameOverride: "",
        uniqueId: "ZUSH",
        url: "https://linktr.ee/zushi3dhero",
        redraws: ['JOHT']
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
