function contact(){
    document.querySelector(".contact").scrollIntoView({behavior : "smooth"});
}

function resume(){
    window.open("https://drive.google.com/file/d/1zlj1ZS42qcwvVSngeECCRkrHm88zmizX/view?usp=sharing","_blank");
}

function p1(){
    window.open("https://github.com/jayashish05/BloodLine-v1.git","_blank");
}

function p2(){
    window.open("https://github.com/jayashish05/Spanish-Verbs.git","_blank");
}

function p3(){
    window.open("https://github.com/jayashish05/code-collab-beta-v3.git","_blank");
}

function validate(){
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    if(name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === ""){
        alert("Fields can't be empty");
    }

    else{
        alert("Message sent successfully!! 🎉");
    }
}

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) { // Check if elements exist
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Optional: Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
});
