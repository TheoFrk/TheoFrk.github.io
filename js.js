(function($) {
    $.rand = function(arg) {
        console.log(arg.length);
        if ($.isArray(arg)) {
            return arg[$.rand(arg.length)];
        } else if (typeof arg == "number") {
            return Math.floor(Math.random() * arg);
        } else {
            return 4;  // chosen by fair dice roll
        }
    };
})(jQuery);

var words = ["Galakartoffel","Holzheim","exorbitant","antisowjetische trotzkistische Verschwörergruppe","Fleisch","alkoholisch","Sanskrit","Jawacken","Kunstrasenbewegung","Luftseite","Briefmarken-Jahrgang","Frauenwappen","Kreuzschaft","DER feminismus","Tropfsteinhöhle","Restmandat","TT353","Tirhut","326. Infanterie-Division","Grenzübergang","Kampfgruppe 88","Alter jüdischer Friedhof","Grabschändung","Golconda Road","Extragalaktisches Hintergrundlicht","Pubertät","Unangebrachtes Jodeln","Amphetamine","Skalpierung","Inzest","Obdachlose","Potwahle","Mundherpes","Gott","Hulk Hogan",
    "Flüchtlingsfeindliche Angriffe","Peppadew","Würdenbube","Fahrzeugbau","Windfarbgen","Finanzinstrument","Westwallmuseum","Ausübungspreis","Nigerianischer Film","Wahlkreis","Spaltblumen","PBKDF2","Netzschleimpilze",
    "Doublehyped-Oldies","Massensterben","Hungernost","Nahtoterfahrung","Vierfüßig","Kantinenfrass","Vaterkomplexe","Klunker","Lähmende Schulden","Hormonspritzen","Spritzen teilen","AXE Deo","Achselnässe","Kiefersperre","Hodentorsion","Domino's Oreo Dessert Pizze","Smegma","Alkoholismus","Selbsthass","Bibel","Gandhi","Brennen","Judentum","Teenagerschwangerschaft","Kinder an einer Leine","Sonderschulen","Auf Rolex umsteigen","Kamikaze Piloten","RoboCop","Dreistigkeit","Uniformitätsregel","Internat","Pudding",
    "Gefühl","Hefe","Katapult","Karsten Stahl","Genghis Kan","Zwergenwerfen","Selbstjustiz","sturzfluten","Lepra","Baumwolle","isotonisches alkoholfreies Biermischgetränk","Proleten","Rollfeld","Ethnische Säuberung","Erektile Dysfunktion","Spießbürgertum","Tischtennis","Multimediale Veranstaltung","Haargel","Weiß","Zentaure","Freiwillige Vergewaltigung","Fabelhaft Sein","Spitze","Schwarz","Frühstücksdöner","Nierenstein","Stichwunden","Hundebabies","Vorzeigeminderheit","Verebungslehre","Urknall","Jogurtwerbespot","amisch",
    "Angst","Milchmann","absolutismus","Soldat","Apache","Knorke","1A","Top","Top keck","Klick Klack Peng","Astrein","Dampfwalze","Klemmhülse","Stehbunker","Ölbadluftfilter","Lästerschwester","Trantüte","Krimskrams","Rasselbande","Spitzbub","Baumwolle","MP3-Player","Walkman","Walkie-Talkie","Lenksäule THYSSEN KRUPP PRESTA","Döner","Lederhose","Zut!",
    "Kuk Kuk!","Lyon","Merkantilismus","Monty","Thüringer Klöße","La Reunion","Kaffee","Keine Ahnung!","Chinchilla","Chillinho","Pirat","Vuvuzela","Ukulele","Kazoo",
    "Warnweste","Offiziersmesser","Tschernobyler Vieraugen-Königsbarsch","CNC Fräßmaschiene","Fotobuch","ESL","MLG","Soulpride","Lord Of The Weeds","Klappsäge","Monty Don","Noah","Worthing",
    "Fancy Faktor","Hegelianismus","Helfersyndrom","Flankeneruption","Fischbandwurm"];
var WortDesTages = $.rand(words);//'Doublehyped-Oldies';   //Hier
console.log(WortDesTages);

function WortDesTagesf() {
    window.open('https://de.wikipedia.org/wiki/' + WortDesTages, '_blank');
}
