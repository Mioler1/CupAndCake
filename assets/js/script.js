function app(){
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.card');

    function filter(category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if(isItemFiltered && !isShowAll){
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }
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
            filter(currentCategoty, cards);
        })
    })

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

app()

