function iniTabNav (){

  const tabMenu = document.querySelectorAll(".js-tabmenu li")
  const tabContent = document.querySelectorAll(".js-tabcontent section")

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add("active")

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active")
      })
      tabContent[index].classList.add('active')
      
    }

    tabMenu.forEach((li, index) => {

      li.addEventListener("click", () => {
        activeTab(index)
      })
    })
  }
}
iniTabNav ()

function initAccordion(){
    const accordionList = document.querySelectorAll(".js-accordion dt")
    const activeClass = "active"
    if(accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    activeAccordion = (event) => {
      event.currentTarget.classList.toggle(activeClass)
      event.currentTarget.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion)
    })
  }
}
initAccordion()

function initScrollSmooth(){
  const internalLinks = document.querySelectorAll(".js-menu a[href^='#'")

  scrollToSection = (event) => {
    event.preventDefault()
    const href = event.currentTarget.getAttribute("href")
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    //forma alternativa
    // const topOfSection = section.offsetTop
    // window.scrollTo({
    //   top: topOfSection,
    //   behavior: "smooth"
    // })
  }


  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection)
  })
}

initScrollSmooth()

function initAnimateScroll(){
  const sections = document.querySelectorAll(".js-scroll")

  if(sections.length){
    const windowHalf = window.innerHeight * 0.6

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowHalf) < 0
        if(isSectionVisible){
          section.classList.add("active")
        } else {
          section.classList.remove("active")
        }
      })
    }


    animateScroll()

    window.addEventListener("scroll", animateScroll)
  }
}

initAnimateScroll()