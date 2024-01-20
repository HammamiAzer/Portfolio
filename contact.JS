document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Enregistrement des informations par défaut

    // Valider les chapms du formulaire
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    var isValid = true;

    // Validation nom
    if (!validateName(fname)) {
      alert("s'il vous plait entrez un nom valide.");
      isValid = false;
    }

    // Validation prénom
    if (!validateName(lname)) {
      alert("s'il vous plait entrez un prénom valide..");
      isValid = false;
    }

    // Validation Email
    if (!validateEmail(email)) {
      alert("s'il vous plait entrez un email valide.");
      isValid = false;
    }

    // Validation numéro de téléphone
    if (!validatePhoneNumber(tel)) {
      alert("s'il vous plait entrez un numéro de 8 chiffre .");
      isValid = false;
    }

    //  si toutes les entrées sont valides, vous pouvez soumettre le formulaire
    if (isValid) {
      alert("coordonnées envoyés avec succées");
    }
  });

  function validateName(name) {
    return /^[a-zA-Z]+$/.test(name);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhoneNumber(phoneNumber) {
    var numericPhoneNumber = phoneNumber.replace(/\D/g, "");
    return numericPhoneNumber.length === 8;
  }
});
