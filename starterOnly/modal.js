function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
let modalbg = document.querySelector(".bground");
const modalInput = document.querySelector("input");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let modalCloseBtn = document.querySelectorAll(".btn-close");
const form = document.getElementById("formContainer");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const term = document.getElementById("checkbox1");
const locMess = document.getElementById("location__message");

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

//input.addEventListener("change, event")

//formulaire soumis
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const birthValue = birthdate.value.trim();
    const quantityValue = quantity.value.trim();
    const localisation = document.querySelector("input[name=location]:checked");
    let erreur;
    let modalInput = document.querySelector("input");
    const modalBody = document.querySelector(".modal-body");
    let submitting = document.createElement('h2')
    let close = document.createElement('button');

    if (firstnameValue.length < 2) {
        erreur = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        document.getElementById("erreur_firstname").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_firstname").innerHTML = erreur;
    }

    if (lastnameValue.length < 2) {
        erreur = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        document.getElementById("erreur_lastname").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_lastname").innerHTML = erreur;
    }

    if (!emailValue.match(mailRgx)) {
        erreur = "Veuillez entrer une adresse email valide.";
        document.getElementById("erreur_email").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_email").innerHTML = erreur;
    }

    if (!birthValue) {
        erreur = "Vous devez entrer votre date de naissance.";
        document.getElementById("erreur_birthdate").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_birthdate").innerHTML = erreur;
    }

    if (!quantityValue.match(quantityRgx)) {
        erreur = "Veuillez choisir un nombre entre 0 et 99";
        document.getElementById("erreur_quantity").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_quantity").innerHTML = erreur;
    }

    if (!localisation) {
        erreur = "Vous devez choisir une option";
        document.getElementById("erreur_location").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_location").innerHTML = erreur;
    }

    if (!term.checked) {
        erreur = "Veuillez vérifier que vous acceptez les termes et conditions.";
        document.getElementById("erreur_condition").innerHTML = erreur;
    } else {
        erreur = "";
        document.getElementById("erreur_condition").innerHTML = erreur;
    }

    if (firstnameValue.length >= 2 && lastnameValue.length >= 2 && emailValue.match(mailRgx) && birthValue && quantityValue.match(quantityRgx) && localisation && term.checked) {
        form.style.visibility = "hidden";
        modalBody.classList.add('modal-body', 'd-flex');
        submitting.textContent = "Thank you for submitting your registration details.";
        close.classList.add('btn-signup', 'btn-dead');
        close.textContent = "Close"
        modalBody.prepend(submitting, close);

        let modalCloseMod = document.querySelectorAll(".btn-dead");
        //close modal event
        modalCloseMod.forEach(elt => elt.addEventListener("click", modalClose));

    }
});