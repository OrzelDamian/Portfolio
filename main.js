const hamburger = document.querySelector("#hamburger-menu");
const menu = document.querySelector("#menu");

const menuElements = document.querySelectorAll("#menu li a");





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

console.log(portfolioSection);

let sliderImg = document.createElement("img");
let containerSlaider = document.createElement("div");
let backgroundSlaiderImg = document.createElement("div");

const htmlE = document.querySelector("html");

let imgEelementShift;

let windowPositionBottom;

let windowSemiPosition;

const leftArrow = document.createElement("div");
const rightArrow = document.createElement("div");

 

leftArrow.classList.add("arrow", "left-arrow");
rightArrow.classList.add("arrow", "right-arrow");

leftArrow.innerHTML = "<";
rightArrow.innerHTML = ">";

let arrayIndex;


const wrapper = document.querySelector("#wrapper");

let portfolioImageApply = false;


const imagesSrc = [...portfolioImages].map(src=>src.getAttribute("src"));


portfolioImages.forEach((e)=>{


    e.addEventListener("click",()=>{
 
            htmlE.style.overflowY = 'hidden';
            sliderImg.setAttribute("src", e.getAttribute("src"));
            sliderImg.setAttribute("alt", e.getAttribute("alt"));

            arrayIndex = imagesSrc.indexOf(`${e.getAttribute("src")}`)
            

            sliderImg.classList.add("slider-img");
            
            backgroundSlaiderImg.appendChild(sliderImg);
            backgroundSlaiderImg.classList.add("bg-slider-image");
            containerSlaider.classList.add("slider-div");
            containerSlaider.appendChild(leftArrow);
        
            containerSlaider.appendChild(backgroundSlaiderImg);
            containerSlaider.appendChild(rightArrow);


            imgEelementShift = window.scrollY - portfolioSection.offsetTop;

            windowPositionBottom = window.scrollY + window.innerHeight;

            windowSemiPosition = (windowPositionBottom - window.scrollY)/2;
            
            portfolioSection.appendChild(containerSlaider);
            
            containerSlaider.style.top = `${imgEelementShift + windowSemiPosition}px`;

            


    })
})

rightArrow.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log(portfolioImages.length);
    arrayIndex+=1;
    if(arrayIndex > portfolioImages.length-1){
        arrayIndex = 0;
        console.log(arrayIndex);
        sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
    }
    else{
        console.log(arrayIndex);
        sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
    }
    

})


leftArrow.addEventListener("click", (e)=>{
    e.stopPropagation();
    arrayIndex = arrayIndex -1;
    if(arrayIndex<0){
        arrayIndex = portfolioImages.length-1;
        sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
        console.log(arrayIndex);
    }
    else{
        console.log(arrayIndex);
        sliderImg.setAttribute("src", portfolioImages[arrayIndex].getAttribute("src"))
    }
        
})

containerSlaider.addEventListener("click", ()=>{
        htmlE.style.overflowY = 'visible';
        portfolioSection.removeChild(containerSlaider);
});



console.log(sliderImg.getAttribute("src"));

window.onload = ()=>{
        document.querySelector('#home').scrollIntoView();
        location.href = '#home'
}
