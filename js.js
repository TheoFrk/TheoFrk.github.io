var WortDesTages = 'antisowjetische trotzkistische Verschwörergruppe';   //Hier


function WortDesTagesf() {
    window.open('https://de.wikipedia.org/wiki/' + WortDesTages, '_blank');
}

function Input() {
    WortDesTages = document.getElementById('UserInput').value;
    var elem = document.getElementById('WordDesTages');
    elem.innerHTML = WortDesTages;
}
