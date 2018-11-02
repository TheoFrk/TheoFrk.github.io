var WortDesTages = 'Monty Dong Strong';   //Hier


function WortDesTagesf() {
    window.open('https://www.wikipedia.org/wiki/' + WortDesTages, '_blank');
}

function Input() {
    WortDesTages = document.getElementById('UserInput').value;
    var elem = document.getElementById('WordDesTages');
    elem.innerHTML = WortDesTages;
}
