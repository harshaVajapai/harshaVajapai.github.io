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
    document.getElementsByClassName("closebtn")[0].click();
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

// ============================================= About Page =============================================
var edu_cards = document.getElementsByClassName("outer-edu");
var about_observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
        if (window.innerWidth >= 770){
            for (var i = 0; i < edu_cards.length; i++) {
                if (i % 2 == 0) {
                    edu_cards[i].classList.add("float-right");
                }
                else edu_cards[i].classList.add("float-left");
            }
        }
        else{
            for(var i=0;i<edu_cards.length;i++){
                edu_cards[i].classList.add("float-left");
            }
        }
    }
}, { threshold: [0] });

about_observer.observe(document.querySelector("#hidden-education"));


function showcontent(event){
    event.currentTarget.nextSibling.nextElementSibling.classList.toggle("toggle-display");
    window.scrollBy(0, 500);
}

// =============================================contact page animations=============================================


var info_cards = document.getElementsByClassName("info-cards");
for(var i=0;i<info_cards.length;i++){
    // selecting the icon which is the child of the particular info card
    info_cards[i].addEventListener("mouseenter",function(){
        var icon = this.children[0].children[0].children[0];
        icon.classList.add("rotate");
    })

    info_cards[i].addEventListener("mouseleave",function(){
        var icon = this.children[0].children[0].children[0];
        icon.classList.remove("rotate");
    })
}

var observer = new IntersectionObserver(function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true){
        for(var i=0;i<info_cards.length;i++){
            if(i%2==0){
                info_cards[i].classList.add("float-right");
            }
            else info_cards[i].classList.add("float-left");
        }
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#contact"));
