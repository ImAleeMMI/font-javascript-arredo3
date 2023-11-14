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

//Intercetta l'invio del form
/*
function submitForm() {

    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var username = document.getElementById('username').value;
    var city = document.getElementById('city').value;
    var email = document.getElementById('email').value;
    var tel = document.getElementById('tel').value;

    
    alert('Name: ' + name + '\nLastname: ' + lastname + '\nUsername: ' + username + '\nCity' + city + '\nEmail' + email + '\nTel' + tel );
}*/