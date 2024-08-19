const submit = document.getElementById("button");
const fn = document.getElementById("firstname");
const ln = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fne = document.querySelectorAll(".errorf");
const lne = document.querySelectorAll(".errorl");
const emaile = document.querySelectorAll(".errore");
const passworde = document.querySelectorAll(".errorp");
const color1 = getComputedStyle(document.documentElement).getPropertyValue('--GrayishBlue');
const color2 = getComputedStyle(document.documentElement).getPropertyValue('--Red');

const regex = /^[\w]*@[\w]*\.([\w]*)$/g;

submit.addEventListener("click", myfunction);

function myfunction(event){
    event.preventDefault();
    if(fn.value == ""){
        fne[0].style.display = "flex";
        fne[1].style.display = "flex";
        fn.style.border = `3px solid ${color2}`;
    }
    else{
        fne[0].style.display = "none";
        fne[1].style.display = "none";
        fn.style.border = `3px solid ${color1}`;
    }
    if(ln.value == ""){
        lne[0].style.display = "flex";
        lne[1].style.display = "flex";
        ln.style.border = `3px solid ${color2}`;
    }
    else{
        lne[0].style.display = "none";
        lne[1].style.display = "none";
        ln.style.border = `3px solid ${color1}`;
    }
    if(email.value == "" || email.value.search(regex) === -1){
        emaile[0].style.display = "flex";
        emaile[1].style.display = "flex";
        email.placeholder ="email@example/com";
        email.style.border = `3px solid ${color2}`;
        email.classList.add('nani');
    }
    else{
        emaile[0].style.display = "none";
        emaile[1].style.display = "none";
        email.placeholder ="Email Address";
        email.style.border = `3px solid ${color1}`;
        email.classList.add('nani1');
    }
    if(password.value == ""){
        passworde[0].style.display = "flex";
        passworde[1].style.display = "flex";
        password.style.border = `3px solid ${color2}`;
    }
    else{
        passworde[0].style.display = "none";
        passworde[1].style.display = "none";
        password.style.border = `3px solid ${color1}`;
    }
}