function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const form = document.getElementById("formContainer");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const localisation = document.querySelectorAll('input[name="location"]');
const term = document.getElementById("checkbox1");

//Regex
const mailRgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const quantityRgx = /^[0-9]{1,2}$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//close modal event
modalCloseBtn.forEach(elt => elt.addEventListener("click", modalClose));

//close modal form
function modalClose() {
    modalbg.style.display = "none";
}

//formulaire soumis
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

function validate() {
    // récupération des values provenant des inputs + suppression des blancs en debut et fin

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const birthValue = birthdate.value.trim();
    const quantityValue = quantity.value.trim();

    if (firstnameValue.length < 2) {
        // Erreur
        setErrorFor(firstname, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    } else {
        // Valider
        setSuccess(firstname);
    }

    if (lastnameValue.length < 2) {
        // Erreur
        setErrorFor(lastname, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    } else {
        //valider
        setSuccess(lastname);
    }

    if (emailValue.match(mailRgx)) {
        // Valider
        setSuccess(email);
    } else {
        // Erreur
        setErrorFor(email, "Veuillez entrer une adresse email valide.");
    }

    if (birthValue == "") {
        // Erreur
        setErrorFor(birthdate, "Vous devez entrer votre date de naissance.");
    } else {
        //Valider
        setSuccess(birthdate);
    }

    if (quantityValue.match(quantityRgx)) {
        // Valider
        setSuccess(quantity);
    } else {
        // Erreur
        setErrorFor(quantity, "Veuillez choisir un nombre en 0 et 99");
    }
    for (i = 0; i < localisation.length; i++) {
        if (!localisation[i].checked) {
            // Erreur
            setErrorFor(localisation[i], "Choisissez une option");
        } else {
            //Valider
            setSuccess(localisation[5]);
            console.log("good");
        }
    }

    if (!term.checked) {
        // Erreur
        setErrorFor(term, "Vous devez vérifier que vous acceptez les termes et conditions.");
    } else {
        //Valider
        setSuccess(term);
    }
}

function setErrorFor(input, message) {
    const formDataElt = input.parentElement;
    const small = formDataElt.querySelector('small');
    // rajout message d'erreur dans l'élément et le place en état visible <small>
    small.innerText = message;
    small.style.visibility = 'visible';

    //rajout de la classe error
    formDataElt.className = "formData error";
}

function setSuccess(input) {
    const formDataElt = input.parentElement;
    const small = formDataElt.querySelector('small');
    // place l'élément small caché
    small.style.visibility = 'hidden';
}