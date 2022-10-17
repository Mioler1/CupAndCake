function app(){
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.catalog-col');

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            return isItemFiltered && !isShowAll ? item.classList.add('hide') : item.classList.remove('hide')
        })
    }

    let btnContainer = document.getElementById("filter");
    let btns = btnContainer.getElementsByClassName("button");

    for(let i=0; i < btns.length; i++){
        btns[i].addEventListener('click', function(){
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active");
            this.className += " active";
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () =>{
            const currentCategoty = button.dataset.filter;
            return filter(currentCategoty, cards);
        })
    })

    const swiper2 = new Swiper(".slide-content", {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "progressbar",
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    
        breakpoints:{
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
        },
      });


    const swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depht: 100,
            modifier: 1,
            slideShadows: true,
        },

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
      });

}
function burgerMenu() {
    const menu = document.querySelector('#menu');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.toggle('hidden')
        menu.classList.toggle('flex')
    })
}

app()
burgerMenu()
