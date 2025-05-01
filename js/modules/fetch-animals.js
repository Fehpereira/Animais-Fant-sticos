import initNumbersAnimate from './numbers-animate.js';

export default function fetchAnimals(url, target) {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  function animateNumbersAnimals() {
    const numbersAnimate = new initNumbersAnimate(
      '[data-numero]',
      '.numeros',
      'active',
    );
    numbersAnimate.init();
  }

  async function createAnimals() {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach((animal) => {
        fillAnimals(animal);
      });
      animateNumbersAnimals();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
