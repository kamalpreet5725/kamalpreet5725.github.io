let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
	searchform.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginform.classList.remove('active');
	navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
	shoppingCart.classList.toggle('active');
	searchform.classList.remove('active');
	loginform.classList.remove('active');
	navbar.classList.remove('active');
}


let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
	loginform.classList.toggle('active');
	
}




let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
	navbar.classList.toggle('active');
}



window.onscroll = () =>
{
	searchform.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginform.classList.remove('active');
	navbar.classList.remove('active');
}



 var swiper = new Swiper(".product-slider", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


 var swiper = new Swiper(".review-slider", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

