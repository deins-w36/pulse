
// let a = [];
// a.push(5);//[5]

// console.log('12' - 10 + '1'); // 21

// console.log([1,2,3].join(':')); //1:2:3

// const w = false;
// if (w == 1) {
//     console.log('qwe');
// } //qwe


// var foo = 4;
// switch(foo) {
//     case 3:
//         console.log(1);
//     case 4:
//         console.log(2);
//     case 5:
//         console.log(3);
//     default:
//         console.log(4);
// } //234

// console.log(2.0 == 2 ? false : true); //false


    //Slider

const slider = tns({
    container: '.slider__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});




    //TABS

const btn_more = document.querySelectorAll('.catalog-item__link'),
      btn_back = document.querySelectorAll('.catalog-item__back'),
      content = document.querySelectorAll('.catalog-item__content'),
      info  = document.querySelectorAll('.catalog-item__list');

btn_more.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        content[i].classList.remove('catalog-item__content_active');
        info[i].classList.add('catalog-item__list_active');
    });
});
btn_back.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        content[i].classList.add('catalog-item__content_active');
        info[i].classList.remove('catalog-item__list_active');
    });
});


const catalog = document.querySelectorAll('.catalog__content'),
      tabs = document.querySelectorAll('.catalog__tab');

catalog[0].style.display='flex';
catalog[1].style.display='none';
catalog[2].style.display='none';

tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
        for(let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove('catalog__tab_active');
        }
        item.classList.add('catalog__tab_active');
        window.scrollTo(0,window.pageYOffset+1); /* ! */

        for(let k = 0; k < tabs.length; k++) {
            catalog[k].style.display='none';
        }
        catalog[i].style.display='flex';
    });
});



//modal
const btnConsult = document.querySelectorAll('[data-modal="consultation"]'),
      btnOrder = document.querySelectorAll('.button_mini'),
      overlay = document.querySelector('.overlay'),
      consultation = document.querySelector('#consultation'),
      order = document.querySelector('#order'),
      thaks = document.querySelector('#thaks'),
      btnClose = document.querySelectorAll('.modal__close');

function openModal(selector,modal) {
    const subtitle = document.querySelectorAll('.catalog-item__subtitle');
    const descr = document.querySelectorAll('.modal__decr');
    selector.forEach((item, i) => {
        item.addEventListener('click', () => {
            descr[1].innerHTML = subtitle[i].textContent;
            overlay.style.display = 'block';
            modal.style.display = 'block';
        });
    });
}

openModal(btnConsult,consultation);
openModal(btnOrder,order);

btnClose.forEach((item,i) => {
    item.addEventListener('click', () => {
        overlay.style.display = 'none';
        consultation.style.display = 'none';
        order.style.display = 'none';
        thaks.style.display = 'none';
    });
});



//Animate
new WOW().init();

