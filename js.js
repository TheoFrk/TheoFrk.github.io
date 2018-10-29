var WortDesTages = '';   //Hier einfügen

function WortDesTagesf() {
    window.open('https://www.wikipedia.org/wiki/' + WortDesTages, '_blank');
}

function Input() {
    WortDesTages = document.getElementById('UserInput').value;
    var elem = document.getElementById('WordDesTages');
    elem.innerHTML = WortDesTages;
}

function hidefooter() {
    var x = document.getElementById("footerbar1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        /*"Press F7 to escape Fullscreen");*/
    }}

    function anmeldung() {}