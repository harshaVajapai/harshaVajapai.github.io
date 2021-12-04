var i=0;
var txt = "I'm a passionate developer from India.";
var speed = 70;

function typeWriter(){
    if (i < txt.length) {
        document.getElementById("typewrite").innerHTML += txt[i];
        i++;
        setTimeout(typeWriter, speed);
    }
}


function loadContent(event,page){
    var content = document.getElementsByClassName("content");
    for(var i=0;i<content.length;i++){
        content[i].style.display="none";
    }
    var nav_link = document.getElementsByClassName("navlink");
    var hide_nav_link = document.getElementsByClassName("hide-nav-link");
    for(var i=0;i<nav_link.length;i++){
        nav_link[i].className=nav_link[i].className.replace("active","");
    }
    for (var i = 0; i < hide_nav_link.length; i++) {
        hide_nav_link[i].className = hide_nav_link[i].className.replace("active", "");
    }
    document.getElementById(page).style.display = "block";
    var current_link = document.getElementsByClassName(page);
    for(var i=0;i<current_link.length;i++){
        current_link[i].className += " active";
    }
}


//Get the button:
mybutton = document.getElementById("arrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
