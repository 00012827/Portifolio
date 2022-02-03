const  navMenu = document.getElementById('nav-menu'),
navToggele = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


if(navToggele) {
    navToggele.addEventListener('click', () => {
        navMenu.classList.add('show-menu')

    })

}

if(navClose) {
    navClose    .addEventListener('click', () => {
        navMenu.classList.remove('show-menu')

    })

}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



const skillsconten = document.getElementsByClassName('skills__content'),
      skillsheader = document.querySelectorAll('.skills__header')


function toogeskill(){
    let itemclaa = this.parentNode.className
    for(i = 0; i < skillsconten.length; i++){
        skillsconten[i].className = 'skills__content skills__close'
    }
    if(itemclaa === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }

}
skillsheader.forEach((el) => {
    el.addEventListener('click', toogeskill)
})

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qaulification__active')
        })

        target.classList.add('qaulification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qaulification__active')
        })

        tab.classList.add('qaulification__active')


    })
})

const modalviews = document.querySelectorAll('.services__modal'),
      modelBtn = document.querySelectorAll('.services__button'),
      modelcloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalviews[modalClick].classList.add('active-model')
}

modelBtn.forEach((modalbtn, i) => {
    modalbtn.addEventListener('click', () =>{
        modal(i)
    })
})

modelcloses.forEach((modalclose) =>{
    modalclose.addEventListener('click', () =>{
        modalviews.forEach((modelvie) => {
            modelvie.classList.remove('active-model')
        })
    })
})


let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
  


function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if (selectedTheme) {

  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})