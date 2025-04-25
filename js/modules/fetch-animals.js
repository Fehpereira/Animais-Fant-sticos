import initNumbersAnimate from "./numbers-animate.js"

export default function initFetchAnimals() {
  async function fetchAnimals(url){
    try{
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()
      const numbersGrid = document.querySelector(".numeros-grid")
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal)
        numbersGrid.appendChild(divAnimal)
      })
      initNumbersAnimate()
    } catch(error){
      console.log(error)
    }
  }
  
  function createAnimal(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
  
    div.innerHTML =`<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`
    return div
  }
  
  fetchAnimals("./animals-api.json")

}

