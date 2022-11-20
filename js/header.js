const header = document.querySelector('.header')
const headerBefore = document.querySelector('.header::before')

const header__list = document.querySelector('.header__list')
const burgerBtn = document.querySelector('.burger-btn')
const burgerBtn__line = document.querySelector('.burger-btn__line')
const bgShadow = document.querySelector('.bg-shadow')



headerBefore_visible()



window.addEventListener('scroll', (e) => {
  headerBefore_visible()
})

function headerBefore_visible() {
  if (pageYOffset > 10) {
    header.classList.add('before-visible')
  } else {
    header.classList.remove('before-visible')
  }
}



burgerBtn.onclick = () => {
  if (header.classList.contains('open')) {
    close()
  } else {
    open()
  }
}


function open() {
  header.classList.add('open')
  // bgShadow.classList.add('open')

  document.body.style.overflowY = 'hidden'
}

function close() {
  header.classList.remove('open')
  // bgShadow.classList.remove('open')

  document.body.style.overflowY = 'auto'
}





/* ==========================
SCROLL TO TAP HEADER LINKS */

const headerLinks = document.querySelectorAll('.header__list .header__link')

// sections to scroll
const home = document.getElementById('home')
const consulting = document.getElementById('consulting')
const deliveryng = document.getElementById('delivering')
const caseStudy = document.getElementById('case-study')
const finance = document.getElementById('finance')

const sectionsList = [home, consulting, deliveryng, caseStudy, finance]


for (let i=0; i<headerLinks.length; i++) {
  headerLinks[i].onclick = () => {
    sectionsList[i].scrollIntoView({behavior: "smooth"});
  
    if (window.innerWidth <= 992) {
      console.log('work')
      burgerBtn.click()
    }
  }
}