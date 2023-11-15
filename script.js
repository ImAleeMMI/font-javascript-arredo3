// Attende il caricamento del DOM
document.addEventListener("DOMContentLoaded", function () {
    //Selettore per il form
    const form = document.querySelector('.form');
    const campiObbligatori = ['name', 'lastname', 'username'];
    console.log(form);

    for (const element of campiObbligatori) {

        function validaObbligatori(field) {
            const input = document.getElementById(field).value;
            if (input == "") {
                document.getElementById(field).innerHTML = "Campo Obbligatorio";
            } else {
                document.getElementById(field).innerHTML = "";
            }
        }
        validaObbligatori(element);
    }

    form.addEventListener('submit', e => {
        e.preventDefault(); //previene l'azione submit de default

        alert("name")
    });
});

//dark-light mode
let nightMode = false;

function toggleNightMode() {
    const body = document.body;
    nightMode = !nightMode;
    
    // Aggiunge o rimuove la classe 'night-mode' dal body
    body.classList.toggle('night-mode', nightMode);
    
    // Cambia il testo del pulsante in base alla modalità
    const buttonText = nightMode ? 'Disattiva Modalità Notte' : 'Attiva Modalità Notte';
    document.querySelector('.toggle-button').innerText = buttonText;
}
