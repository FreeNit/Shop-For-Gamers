var headerBurger=document.querySelector(".header__burger"),headerMenu=document.querySelector(".header__menu"),logo=document.querySelector(".header__logo");headerBurger.addEventListener("click",(function(e){headerBurger.classList.toggle("active"),headerMenu.classList.toggle("active"),body.classList.toggle("lock")})),logo.addEventListener("click",(function(){headerBurger.classList.contains("active")&&(headerBurger.classList.toggle("active"),headerMenu.classList.toggle("active"),body.classList.toggle("lock"))}));
//# sourceMappingURL=blog.031ba473.js.map
