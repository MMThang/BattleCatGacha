export { rare, superRare, uberRare, legendRare }

var rareColor = "transparent";
var superColor = "#8585fb";
var uberColor = "#ff4646";
var legendColor = "linear-gradient(6deg, rgba(255,196,249,1) 41%, rgba(0,212,255,1) 100%)"

const rare = [
    { id: 0, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Onmyoji_Cat_(Rare_Cat)",name: "rare:  Onmyoji Cat" },
    { id: 1, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Psychocat_(Rare_Cat)",name: "rare:  Psychocat" },
    { id: 2, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Mer-Cat_(Rare_Cat)",name: "rare:  Mer-Cat" },
    { id: 3, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Rocker_Cat_(Rare_Cat)",name: "rare:  Rocker Cat" },
    { id: 4, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Tin_Cat_(Rare_Cat)",name: "rare:  Tin Cat" },
    { id: 5, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Stilts_Cat_(Rare_Cat)",name: "rare:  Stilts Cat" },
    { id: 6, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Cat_Gunslinger_(Rare_Cat)",name: "rare:  Cat Gunslinger" },
    { id: 7, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Swordsman_Cat_(Rare_Cat)",name: "rare:  Swordsman Cat" },
    { id: 8, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Archer_Cat_(Rare_Cat)",name: "rare:  Archer Cat" },
    { id: 9, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Witch_Cat_(Rare_Cat)",name: "rare:  Witch Cat" },
    { id: 10, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Shaman_Cat_(Rare_Cat)", name: "rare:  Shaman Cat" },
    { id: 11, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Fortune_Teller_Cat_(Rare_Cat)", name: "rare:  Fortune Teller Cat" },
    { id: 12, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Bishop_Cat_(Rare_Cat)", name: "rare:  Bishop Cat" },
    { id: 13, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Thief_Cat_(Rare_Cat)", name: "rare:  Thief Cat" },
    { id: 14, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Pirate_Cat_(Rare_Cat)", name: "rare:  Pirate Cat" },
    { id: 15, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Viking_Cat_(Rare_Cat)", name: "rare:  Viking Cat" },
    { id: 16, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Jurassic_Cat_(Rare_Cat)", name: "rare:  Jurassic Cat" },
    { id: 17, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Salon_Cat_(Rare_Cat)", name: "rare:  Salon Cat" },
    { id: 18, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Wheel_Cat_(Rare_Cat)", name: "rare:  Wheel Cat" },
    { id: 19, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Pogo_Cat_(Rare_Cat)", name: "rare:  Pogo Cat" },
    { id: 20, type: rareColor, link:"https://battle-cats.fandom.com/wiki/Gardener_Cat_(Rare_Cat)", name: "rare:  Gardener Cat" }
];

const superRare = [
    { id: 0 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Surfer_Cat_(Super_Rare_Cat)", name: "super: Surfer Cat" },
    { id: 1 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Cat_Toaster_(Super_Rare_Cat)", name: "super: Cat Toaster" },
    { id: 2 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Figure_Skating_Cats_(Super_Rare_Cat)", name: "super: Figure Skating Cats" },
    { id: 3 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Weightlifter_Cat_(Super_Rare_Cat)", name: "super: Weightlifter Cat" },
    { id: 4 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Juliet_Cat_(Super_Rare_Cat)", name: "super: Juliet Cat" },
    { id: 5 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Sushi_Cat_(Super_Rare_Cat)", name: "super: Sushi Cat" },
    { id: 6 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Bath_Cat_(Super_Rare_Cat)", name: "super: Bath Cat" },
    { id: 7 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Kotatsu_Cat_(Super_Rare_Cat)", name: "super: Apple Cat" },
    { id: 8 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Swimmer_Cat_(Super_Rare_Cat)", name: "super: Swimmer Cat" },
    { id: 9 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Nerd_Cat_(Super_Rare_Cat)", name: "super: Nerd Cat" },
    { id: 10 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Kotatsu_Cat_(Super_Rare_Cat)", name: "super: Kotatsu Cat" },
    { id: 11 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Hip_Hop_Cat_(Super_Rare_Cat)", name: "super: Hip Hop Cat" },
    { id: 12 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Delinquent_Cat_(Super_Rare_Cat)", name: "super: Delinquent Cat" },
    { id: 13 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Bodhisattva_Cat_(Super_Rare_Cat)", name: "super: Bodhisattva Cat" },
    { id: 14 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Vaulter_Cat_(Super_Rare_Cat)", name: "super: Vaulter Cat" },
    { id: 15 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Fencer_Cat_(Super_Rare_Cat)", name: "super: Fencer Cat" },
    { id: 16 , type: superColor, link: "https://battle-cats.fandom.com/wiki/Nymph_Cat_(Super_Rare_Cat)", name: "super: Nymph Cat" }
    // { id: 15 , type: " #8585fb;", link: "", name: "super: Gold Cat" },
    // { id: 16 , type: " #8585fb;", link: "", name: "super: Cat Base Mini" },
    // { id: 17 , type: " #8585fb;", link: "", name: "super: Neneko" },
    // { id: 18 , type: " #8585fb;", link: "", name: "super: Metal Cat" },
    // { id: 19 , type: " #8585fb;", link: "", name: "super: Sniper the Recruit" },
    // { id: 20 , type: " #8585fb;", link: "", name: "super: Rich Cat III" },
    // { id: 21 , type: " #8585fb;", link: "", name: "super: Freshman Cat Jobs" }
];

const uberRare = [
    [
        { id: 0, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Nekoluga_(Uber_Rare_Cat)", name: "uber:  Nekoluga" },
        { id: 1, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Asiluga_(Uber_Rare_Cat)", name: "uber:  Asiluga" },
        { id: 2, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Kubiluga_(Uber_Rare_Cat)", name: "uber:  Kubiluga" },
        { id: 3, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Tecoluga_(Uber_Rare_Cat)", name: "uber:  Tecoluga" },
        { id: 4, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Balaluga_(Uber_Rare_Cat)", name: "uber:  Balaluga" },
        { id: 5, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Togeluga_(Uber_Rare_Cat)", name: "uber:  Togeluga" },
        { id: 6, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Nobiluga_(Uber_Rare_Cat)", name: "uber:  Nobiluga" },
        { id: 7, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Papaluga_(Uber_Rare_Cat)", name: "uber:  Papaluga" },
        { id: 8, type: uberColor, banner:"Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Furiluga_(Uber_Rare_Cat)", name: "uber:  Furiluga" }
    ],

    [
        { id: 0, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Ice_Cat_(Uber_Rare_Cat)", name: "uber:  Ice Cat" },
        { id: 1, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Cat_Machine_(Uber_Rare_Cat)", name: "uber:  Cat Machine" },
        { id: 2, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Lesser_Demon_Cat_(Uber_Rare_Cat)", name: "uber:  Lesser Demon Cat" },
        { id: 3, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Marauder_Cat_(Uber_Rare_Cat)", name: "uber:  Marauder Cat" },
        { id: 4, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Baby_Cat_(Uber_Rare_Cat)", name: "uber:  Baby Cat" },
        { id: 5, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Nurse_Cat_(Uber_Rare_Cat)", name: "uber:  Nurse Cat" },
        { id: 6, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Cat_Clan_Heroes_(Uber_Rare_Cat)", name: "uber:  Cat Clan Heroes" },
        { id: 7, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Lasvoss_(Uber_Rare_Cat)", name: "uber:  Lasvoss" },
        { id: 8, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Summoner_Satoru_(Uber_Rare_Cat)", name: "uber:  Summoner Satoru" },
        { id: 9, type: uberColor, banner:"The Dynamites", link: "https://battle-cats.fandom.com/wiki/Cat_Tengu_(Uber_Rare_Cat)", name: "uber:  Cat Tengu" }
    ],

    [
        { id: 0, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Sanada_Yukimura_(Uber_Rare_Cat)", name: "uber:  Sanada Yukimura" },
        { id: 1, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Maeda_Keiji_(Uber_Rare_Cat)", name: "uber:  Maeda Keiji" },
        { id: 2, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Oda_Nobunaga_(Uber_Rare_Cat)", name: "uber:  Oda Nobunaga" },
        { id: 3, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Date_Masamune_(Uber_Rare_Cat)", name: "uber:  Date Masamune" },
        { id: 4, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Takeda_Shingen_(Uber_Rare_Cat)", name: "uber:  Takeda Shingen" },
        { id: 5, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Uesugi_Kenshin_(Uber_Rare_Cat)", name: "uber:  Uesugi Kenshin" },
        { id: 6, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Imagawa_Yoshimoto_(Uber_Rare_Cat)", name: "uber:  Imagawa Yoshimoto" },
        { id: 7, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Narita_Kaihime_(Uber_Rare_Cat)", name: "uber:  Narita Kaihime" },
        { id: 8, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Shiro_Amakusa_(Uber_Rare_Cat)", name: "uber:  Shiro Amakusa" },
        { id: 9, type: uberColor, banner:"Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Hattori_Hanzo_(Uber_Rare_Cat)", name: "uber:  Hattori Hanzo" }
    ],

    [
        { id: 0, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Windy_(Uber_Rare_Cat)", name: "uber:  Windy" },
        { id: 1, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Thundia_(Uber_Rare_Cat)", name: "uber:  Thundia" },
        { id: 2, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Kuu_(Uber_Rare_Cat)", name: "uber:  Kuu" },
        { id: 3, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Kai_(Uber_Rare_Cat)", name: "uber:  Kai" },
        { id: 4, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Coppermine_(Uber_Rare_Cat)", name: "uber:  Coppermine" },
        { id: 5, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Kalisa_(Uber_Rare_Cat)", name: "uber:  Kalisa" },
        { id: 6, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Twinstars_(Uber_Rare_Cat)", name: "uber:  The Twinstars" },
        { id: 7, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Myrcia_(Uber_Rare_Cat)", name: "uber:  Myrcia" },
        { id: 8, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Lilin_(Uber_Rare_Cat)", name: "uber:  Lilin" },
        { id: 9, type: uberColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Huntress_Terun_(Uber_Rare_Cat)", name: "uber:  Huntress Terun" }
    ],

    [
        { id: 0, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Megidora_(Uber_Rare_Cat)", name: "uber:  Megidora" },
        { id: 1, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Sodom_(Uber_Rare_Cat)", name: "uber:  Sodom" },
        { id: 2, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Raiden_(Uber_Rare_Cat)", name: "uber:  Raiden" }, 
        { id: 3, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Vars_(Uber_Rare_Cat)", name: "uber:  Vars" },
        { id: 4, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Kamukura_(Uber_Rare_Cat)", name: "uber:  Kamukura" },
        { id: 5, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Dioramos_(Uber_Rare_Cat)", name: "uber:  Dioramos" },
        { id: 6, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Ganglion_(Uber_Rare_Cat)", name: "uber:  Ganglion" },
        { id: 7, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Relentless_Gladios_(Uber_Rare_Cat)", name: "uber:  Relentless Gladios" },
        { id: 8, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Hevijak_the_Wicked_(Uber_Rare_Cat)", name: "uber:  Hevijak" },
        { id: 9, type: uberColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/Sea_Serpent_Daliasan_(Uber_Rare_Cat)", name: "uber:  Sea Serpent Daliasan" }
    ],

    [
        { id: 0, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Momotaro_(Uber_Rare_Cat)", name: "uber:  Momotaro" },
        { id: 1, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Urashima_Taro_(Uber_Rare_Cat)", name: "uber:  Urashima Taro" },
        { id: 2, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/The_Grateful_Crane_(Uber_Rare_Cat)", name: "uber:  The Grateful Crane" },
        { id: 3, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Kasa_Jizo_(Uber_Rare_Cat)", name: "uber:  Kasa Jizo" },
        { id: 4, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Princess_Kaguya_(Uber_Rare_Cat)", name: "uber:  Princess Kaguya" },
        { id: 5, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Kachi-Kachi_(Uber_Rare_Cat)", name: "uber:  Kachi Kachi" },
        { id: 6, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Sarukani_(Uber_Rare_Cat)", name: "uber:  Sarukani" },
        { id: 7, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Kintaro_(Uber_Rare_Cat)", name: "uber:  Kintaro" },
        { id: 8, type: uberColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Shitakiri_Sparrow_(Uber_Rare_Cat)", name: "uber:  Shitakiri Sparrow" }
    ],

    [
        { id: 0, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Akira_(Uber_Rare_Cat)", name: "uber:  Akira" },
        { id: 1, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Catman_(Uber_Rare_Cat)", name: "uber:  Catman" },
        { id: 2, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Mekako_Saionji_(Uber_Rare_Cat)", name: "uber:  Mekako Saionji" },
        { id: 3, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/The_White_Rabbit_(Uber_Rare_Cat)", name: "uber:  The White Rabbit" },
        { id: 4, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Warlock_and_Pierre_(Uber_Rare_Cat)", name: "uber:  Warlock and Pierre" },
        { id: 5, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Hayabusa_(Uber_Rare_Cat)", name: "uber:  Hayabusa" },
        { id: 6, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Detective_Vigler_(Uber_Rare_Cat)", name: "uber:  Detective Vigler" },
        { id: 7, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Sharpshooter_Saki_(Uber_Rare_Cat)", name: "uber:  Sharpshooter Saki" },
        { id: 8, type: uberColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/White_Knight_Cyclops_(Uber_Rare_Cat)", name: "uber:  White Knight Cyclops" }
    ],

    [
        { id: 0, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Thunder_God_Zeus_(Uber_Rare_Cat)", name: "uber:  Thunder God Zeus" },
        { id: 1, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Radiant_Aphrodite_(Uber_Rare_Cat)", name: "uber:  Radiant Aphrodite" },
        { id: 2, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Anubis_the_Protector_(Uber_Rare_Cat)", name: "uber:  Anubis the Protector" },
        { id: 3, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Shining_Amaterasu_(Uber_Rare_Cat)", name: "uber:  Shining Amaterasu" },
        { id: 4, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Splendid_Ganesha_(Uber_Rare_Cat)", name: "uber:  Splendid Ganesha" },
        { id: 5, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Wrathful_Poseidon_(Uber_Rare_Cat)", name: "uber:  Wrathful Poseidon" },
        { id: 6, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Empress_Chronos_(Uber_Rare_Cat)", name: "uber:  Empress Chronos" },
        { id: 7, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Hades_the_Punisher_(Uber_Rare_Cat)", name: "uber:  Hades the Punisher" },
        { id: 8, type: uberColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Lucifer_the_Fallen_(Uber_Rare_Cat)", name: "uber:  Lucifer the Fallen" }
    ],

    [
        { id: 0, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Kat-A-Pult_(Uber_Rare_Cat)", name: "uber:  Mighty Kat-A-Pult" },
        { id: 1, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Drednot_(Uber_Rare_Cat)", name: "uber:  Mighty Drednot" },
        { id: 2, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Bomburr_(Uber_Rare_Cat)", name: "uber:  Mighty Bomburr" },
        { id: 3, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Rekon_Korps_(Uber_Rare_Cat)", name: "uber:  Mighty Rekon Korps" },
        { id: 4, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Thermae_D-Lux_(Uber_Rare_Cat)", name: "uber:  Mighty Thermae D-Lux" },
        { id: 5, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Aethur_Ltd._(Uber_Rare_Cat)", name: "uber:  Mighty Aethur Ltd." },
        { id: 6, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Deth-Troy-R_(Uber_Rare_Cat)", name: "uber:  Mighty Deth-Troy-R" },
        { id: 7, type: uberColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Carrowsell_(Uber_Rare_Cat)", name: "uber:  Mighty Carrowsell" }
    ],

    [
        { id: 0, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Bora_(Uber_Rare_Cat)", name: "uber:  Bora" },
        { id: 1, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Mizli_(Uber_Rare_Cat)", name: "uber:  Mizli" },
        { id: 2, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Aer_(Uber_Rare_Cat)", name: "uber:  Aer" },
        { id: 3, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Voli_(Uber_Rare_Cat)", name: "uber:  Voli" },
        { id: 4, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Gravi_(Uber_Rare_Cat)", name: "uber:  Gravi" },
        { id: 5, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Yamii_(Uber_Rare_Cat)", name: "uber:  Yamii" },
        { id: 6, type: uberColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Bliza_(Uber_Rare_Cat)", name: "uber:  Bliza" }
    ],

    [
        { id: 0, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Trickster_Himeyuri_(Uber_Rare_Cat)", name: "uber:  Trickster Himeyuti" },
        { id: 1, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Sea_Maiden_Ruri_(Uber_Rare_Cat)", name: "uber:  Sea Maiden Ruri" },
        { id: 2, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Queen_Reika_(Uber_Rare_Cat)", name: "uber:  Queen Reika" },
        { id: 3, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Wolfchild_Deale_(Uber_Rare_Cat)", name: "uber:  Wolfchild Deale" },
        { id: 4, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Graveflower_Verbena_(Uber_Rare_Cat)", name: "uber:  Graveflower Verbena" },
        { id: 5, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Adventurer_Kanna_(Uber_Rare_Cat)", name: "uber:  Adventurer Kanna" },
        { id: 6, type: uberColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Spectral_Goth_Vega_(Uber_Rare_Cat)#Spectral_Goth_Vega", name: "uber:  Spectral Goth Vega" },
    ],

    [
        { id: 0, type: uberColor, banner: "Uberfest", link: "https://battle-cats.fandom.com/wiki/Baby_Gao_(Uber_Rare_Cat)", name: "uber:  Baby Gao" },
        { id: 1, type: uberColor, banner: "Uberfest", link: "https://battle-cats.fandom.com/wiki/Miko_Mitama_(Uber_Rare_Cat)", name: "uber:  Miko Mitama" },
        { id: 2, type: uberColor, banner: "Uberfest", link: "https://battle-cats.fandom.com/wiki/D%27artanyan_(Uber_Rare_Cat)", name: "uber:  Dartanyan" },
        { id: 3, type: uberColor, banner: "Uberfest", link: "https://battle-cats.fandom.com/wiki/Kasli_the_Scourge_(Uber_Rare_Cat)", name: "uber:  Kasli the Scourge" },
        { id: 4, type: uberColor, banner: "Uberfest", link: "https://battle-cats.fandom.com/wiki/Baby_Garu_(Uber_Rare_Cat)", name: "uber:  Baby Garu" },
        { id: 5, type: uberColor, banner: "Uberfest", link: "https://battle-cats.fandom.com/wiki/Iz_the_Dancer_(Uber_Rare_Cat)", name: "uber:  Iz the Dancer" }
    ],

]

const legendRare = [
    { id: 0, type: legendColor, banner: "Tales of the Nekoluga", link: "https://battle-cats.fandom.com/wiki/Legeluga_(Legend_Rare_Cat)", name: "legend:  Legeluga" },
    { id: 1, type: legendColor, banner: "The Dynamites", link: "https://battle-cats.fandom.com/wiki/Wonder_MOMOCO_(Legend_Rare_Cat)", name: "legend:  Wonder MOMOCO" },
    { id: 2, type: legendColor, banner: "Sengoku Wargods Varijas", link: "https://battle-cats.fandom.com/wiki/Musashi_Miyamoto_(Legend_Rare_Cat)", name: "legend:  Musashi Miyamoto" },
    { id: 3, type: legendColor, banner: "Cyber Academy Galaxy Gals", link: "https://battle-cats.fandom.com/wiki/Headmistress_Jeanne_(Legend_Rare_Cat)", name: "legend:  Headmistress Jeanne" },
    { id: 4, type: legendColor, banner: "Lords of Destruction Dragon Emperors", link: "https://battle-cats.fandom.com/wiki/High_Lord_Babel_(Legend_Rare_Cat)", name: "legend:  High Lord Babel" },
    { id: 5, type: legendColor, banner: "Ancient Heros Ultra Souls", link: "https://battle-cats.fandom.com/wiki/Ushiwakamaru_(Legend_Rare_Cat)", name: "legend:  Ushiwakamaru" },
    { id: 6, type: legendColor, banner: "Dark Heros", link: "https://battle-cats.fandom.com/wiki/Doktor_Heaven_(Legend_Rare_Cat)", name: "legend:  Doktor Heaven" },
    { id: 7, type: legendColor, banner: "The Almighties", link: "https://battle-cats.fandom.com/wiki/Gaia_the_Creator_(Legend_Rare_Cat)", name: "legend:  Gaia the Creator" },
    { id: 8, type: legendColor, banner: "Frontline Assault Iron Legion", link: "https://battle-cats.fandom.com/wiki/Mighty_Kristul_Muu_(Legend_Rare_Cat)", name: "legend:  Mighty Kristul Muu" },
    { id: 9, type: legendColor, banner: "Nature's Guardian Elemental Pixies", link: "https://battle-cats.fandom.com/wiki/Lumina_(Legend_Rare_Cat)", name: "legend:  Lumina" },
    { id: 10, type: legendColor, banner: "Girls&Monsters Angel of Terror", link: "https://battle-cats.fandom.com/wiki/Kyosaka_Nanaho_(Legend_Rare_Cat)", name: "legend:  Kyosaka Nanaho" },
]

