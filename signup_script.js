let registrationFormEl = document.getElementById("registrationForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let newPasswordEl = document.getElementById("newPassword");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");
let regButtonEl = document.getElementById("regButton");

let registerFormData = {
    name: "",
    email: "",
    newpassword: "",
    confirmpassword: "",
    gender: "male"
};

nameEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Enter Your Name*";
    }
    else {
        nameErrMsgEl.textContent = "";
    }

    registerFormData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Enter your Email ID*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    registerFormData.email = event.target.value;
});

newPasswordEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsgEl.textContent = "Enter New Password*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }

    registerFormData.newpassword = event.target.value;
});

confirmPasswordEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Re-enter the password to confirm*"
    }

    registerFormData.confirmpassword = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    registerFormData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    registerFormData.gender = event.target.value;
});

function validateRegistration(registerFormData) {
    let {name, email, newpassword, confirmpassword} = registerFormData;
    if (name === "") {
        nameErrMsgEl.textContent = "Enter Your Name*";        
    }
    if (email === "") {
        emailErrMsgEl.textContent = "Enter your Email ID*";
    }
    if (newpassword === "") {
        newPasswordErrMsgEl.textContent = "Enter New Password*";
    } else if (newpassword.length < 8) {
        newPasswordErrMsgEl.textContent = "Enter atleast 8 characters*";
    }
    if (confirmpassword === "") {
        confirmPasswordErrMsgEl.textContent = "Re-enter password to confirm*";
    } else if (newpassword !== confirmpassword) {
        confirmPasswordErrMsgEl.textContent = "Password does not match";
    }

    regButtonEl.onclick = function() {
        alert("Registration Successful !");
    };
}

registrationFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRegistration(registerFormData);
});