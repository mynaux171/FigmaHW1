let toggle = document.getElementById("toggle");
let mobileNav = document.getElementById("mobile-nav");
let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");

toggle.addEventListener("click", function(){
    mobileNav.classList.toggle("active");

    if(mobileNav.classList.contains("active")){
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    }else{
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    }

});
