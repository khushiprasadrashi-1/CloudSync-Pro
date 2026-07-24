// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ===============================
// Smooth Scrolling
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Active Navigation Link
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ===============================
// Statistics Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText = "0";

    const updateCounter = ()=>{

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target;

        }

    }

    updateCounter();

});


// ===============================
// FAQ Accordion
// ===============================

const faq = document.querySelectorAll(".faq-item");

faq.forEach(item=>{

    item.addEventListener("click",()=>{

        item.classList.toggle("open");

    });

});


// ===============================
// Contact Form Validation
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name=="" || email=="" || phone=="" || message==""){

        alert("Please fill all fields.");

        return;

    }

    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        alert("Enter valid Email");

        return;

    }

    alert("Form Submitted Successfully!");

    form.reset();

});

}


// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.padding="12px 18px";
topBtn.style.fontSize="20px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="white";
topBtn.style.cursor="pointer";
topBtn.style.display="none";


window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});


topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ===============================
// Welcome Message
// ===============================

console.log("Welcome to CloudSync Pro");