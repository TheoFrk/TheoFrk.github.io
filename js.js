var WortDesTages = 'Doublehyped-Oldies';   //Hier
var WortDesTagesMorgen = 'Oldies';   //Hier einfügen


a = new Date();
b = a.getMinutes();

function WortDesTagesf() {
    window.open('https://www.wikipedia.org/wiki/' + WortDesTages, '_blank');
}

function Input() {
    WortDesTages = document.getElementById('UserInput').value;
    var elem = document.getElementById('WordDesTages');
    elem.innerHTML = WortDesTages;
}
