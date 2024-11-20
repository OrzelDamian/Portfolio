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
            phone.innerHTML = `<img src="./src/phone.png" alt="Phone"></img>`;
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
            email.innerHTML = `<img src="./src/email.png" alt="Email">`;
            email.classList.remove("contact-active");
        },300)
        
        
        
    }
})

window.onload = ()=>{
        document.querySelector('#home').scrollIntoView();
        location.href = '#home'
}




