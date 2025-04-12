export default function initScrollSmooth(){
  const internalLinks = document.querySelectorAll(" [data-menu='suave'] a[href^='#'")

  const scrollToSection = (event) => {
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

