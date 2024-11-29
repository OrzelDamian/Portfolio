



const hamburger = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");

const menuElements = document.querySelectorAll("#menu li a");

let arrayIndex;




const slider = (arrow)=>{

    
    
    if(arrow.innerHTML === "&lt;"){
        
            arrayIndex = arrayIndex -1;
            if(arrayIndex<0){
                arrayIndex = portfolioImages.length-1;
                sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
            }
            else{
        
                sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
            }
        }
        else{

        arrayIndex = arrayIndex +1;
        if(arrayIndex > portfolioImages.length-1){
            arrayIndex = 0;

            sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
        }
        else{
            sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
        }
        
    }
}



hamburger.addEventListener('click', (e)=>{
    hamburger.classList.toggle("hamburger-menu-open")
        if(menu.classList.contains("menu-open")){
            menu.classList.remove("menu-open")
            menu.classList.add("menu-close")
        }else{
            
            menu.classList.remove("menu-close")
            menu.classList.add("menu-open")
        }    
});

menuElements.forEach(e=>{
    e.addEventListener('click',()=>{
        menu.classList.remove("menu-open")
        menu.classList.add("menu-close")
        hamburger.classList.toggle("hamburger-menu-open")
    })
})

const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
let phoneActive = false;
let emailActive = false;
phone.addEventListener('click',()=>{
    phoneActive = !phoneActive;
    
    if(phoneActive){
        phone.innerHTML = "796092136";
        
        phone.classList.add("contact-active");
        navigator.clipboard.writeText(phone.innerHTML);
    }else{
        phone.innerHTML = `Skopiowano`;
        setTimeout(()=>{
            phone.innerHTML = `<img src="./src/contact-icon/phone.png" alt="Phone"></img>`;
            phone.classList.remove("contact-active");
        },300)
        
        
       
    }  
})


email.addEventListener('click', ()=>{
    emailActive = !emailActive;
    
    if(emailActive){
        email.innerHTML = "odamian687@gmail.com";
        
        email.classList.add("contact-active");
        navigator.clipboard.writeText(email.innerHTML);
    }else{
        email.innerHTML = `Skopiowano`;
        setTimeout(()=>{
            email.innerHTML = `<img src="./src/contact-icon/email.png" alt="Email">`;
            email.classList.remove("contact-active");
        },300)
        
        
        
    }
})


const portfolioImages = document.querySelectorAll(".portfolio img");
const portfolioSection = document.querySelector("#portfolio");


const sliderImg = document.createElement("img");
const backgroundSlaiderImg = document.createElement("div");
const containerSlaider = document.createElement("div");



const htmlE = document.querySelector("html");

let imgEelementShift;

let windowPositionBottom;

let windowSemiPosition;

const leftArrow = document.createElement("div");
const rightArrow = document.createElement("div");
const closeSlider = document.createElement("div");

let slideImageUrl; 

const imagesSrc = [...portfolioImages].map(src=>src.getAttribute("src"));

leftArrow.classList.add("arrow-button", "arrow-left");
rightArrow.classList.add("arrow-button", "arrow-right");
closeSlider.classList.add("arrow-button", "close-button");

leftArrow.innerHTML = "<";
rightArrow.innerHTML = ">";
closeSlider.innerHTML = "X";





portfolioImages.forEach((e)=>{


    e.addEventListener("click",()=>{
 
            htmlE.style.overflowY = 'hidden';


            if(window.screen.width>320){
                sliderImg.setAttribute("src", e.getAttribute("src"));
            }
            
            sliderImg.setAttribute("alt", e.getAttribute("alt"));

            arrayIndex = imagesSrc.indexOf(`${e.getAttribute("src")}`)
            

            sliderImg.classList.add("slider-img");
            
            backgroundSlaiderImg.appendChild(sliderImg);
            backgroundSlaiderImg.classList.add("bg-slider-image");
            containerSlaider.classList.add("slider-div");
            containerSlaider.appendChild(leftArrow);
        
            containerSlaider.appendChild(backgroundSlaiderImg);
            containerSlaider.appendChild(rightArrow);

            containerSlaider.appendChild(closeSlider);


            imgEelementShift = window.scrollY - portfolioSection.offsetTop;

            windowPositionBottom = window.scrollY + window.innerHeight;

            windowSemiPosition = (windowPositionBottom - window.scrollY)/2;
            
            portfolioSection.appendChild(containerSlaider);
            containerSlaider.style.top = `${imgEelementShift + windowSemiPosition}px`;

    })
})

rightArrow.addEventListener("click", (e)=>{
    e.stopPropagation();
    slider(e.target);
})


leftArrow.addEventListener("click", (e)=>{
    e.stopPropagation();
    slider(e.target);    
})

backgroundSlaiderImg.addEventListener("click", (e)=>{
    e.stopPropagation();
    slider(e.target);    
})



containerSlaider.addEventListener("click", ()=>{
        htmlE.style.overflowY = 'visible';
        portfolioSection.removeChild(containerSlaider);
});

backgroundSlaiderImg.addEventListener("click", (e)=>{
    e.stopPropagation();
})



window.onload = ()=>{
        document.querySelector('#home').scrollIntoView();
        location.href = '#home'
}
