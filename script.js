// Attende il caricamento del DOM
document.addEventListener("DOMContentLoaded", function () {

    //Code...

    //Selettore per il form
    const form = document.querySelector('.form');
    const campiObbligatori = ['name','lastaname','username'];
    console.log(form);

    for(const element of campiObbligatori){
        /*nome = "name: " + form;
        lastname = "lastname: " + form;
        username = "username: " + form;
        document.write(nome + "name" + lastname + "\nlastname" + username + "\nusername");
        */
       console.log(element);
    }

    
    form.addEventListener('submit', e => {
    e.preventDefault(); //previene l'azione submit de default

    alert("name")

    });
});

function validaObbligatori(field) {
    const input = document.getElementById(field).value;
    if(input==""){
        document.getElementsById(field).innerHTMl = "Campo Obbligatorio";
    }else{
        document.getElementsById(field).innerHTMl = "";
    }
}

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