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
    "Gefühl","Hefe","Katapult","Karsten Stahl","Genghis Kan","Zwergenwerfen","Selbstjustiz","sturzfluten","Lepra","Ethnische Säuberung","Erektile Dysfunktion","Spießbürgertum","Tischtennis","Multimediale Veranstaltung","Haargel","Weiß","Zentaure","Freiwillige Vergewaltigung","Fabelhaft Sein","Spitze","Schwarz","Frühstücksdöner","Nierenstein","Stichwunden","Hundebabies","Vorzeigeminderheit","Verebungslehre","Urknall","Jogurtwerbespot","amisch",
    "Angst","Milchmann","absolutismus"];

var WortDesTages = $.rand(words);//'Doublehyped-Oldies';   //Hier

function WortDesTagesf() {
    window.open('https://de.wikipedia.org/wiki/' + WortDesTages, '_blank');
}
