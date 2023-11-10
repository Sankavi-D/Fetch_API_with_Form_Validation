let loginFormEl = document.getElementById("loginForm");
let userNameEl = document.getElementById("userName");
let userNameErrMsgEl = document.getElementById("userNameErrMsg");
let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");

let loginFormData = {
    username: "",
    password: ""
};

userNameEl.addEventListener("change", function(event){
    if (event.target.value === "") {
        userNameErrMsgEl.textContent = "User Name Required*";
    }
    else {
        userNameErrMsgEl.textContent = "";
    }

    loginFormData.username = event.target.value;
});

passwordEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Password Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }

    loginFormData.password = event.target.value;
});

let loginButtonEl = document.getElementById("loginButton");

function validateLogin(loginFormData) {
    let {username, password} = loginFormData;
    if (username === "") {
        userNameErrMsgEl.textContent = "User Name Required*";   
    }
    if (password === "") {
        passwordErrMsgEl.textContent = "Password Required*";
    }  
    loginButtonEl.onclick = function(){
        alert("Login Successful !");
    };
}

loginFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateLogin(loginFormData);
});