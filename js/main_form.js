var button = document.getElementById("submit");
var firstName = document.getElementById("name");

var surname = document.getElementById("surname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");


button.addEventListener('click', validate);

//
//function validate(event) {
//    if (firstName.value.length == 0 || surname.value.length == 0 || email.value.length == 0 || phone.value.length < 9 || phone.value.length > 9) {
//        event.preventDefault();
//        alert("Podano błędne dane");
//    }
//
//    if (message.value.length > 100){
//        event.preventDefault();
//        alert("Wiadomość nie może zawierać więcej niż 100 znaków");
//    }
//}
