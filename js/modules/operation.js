export default function initOperation(){
  
  const operation = document.querySelector('[data-semana]')
  const weekDays = operation.dataset.semana.split(",").map(Number)
  const timeWeek = operation.dataset.horario.split(",").map(Number)
  
  console.log(timeWeek)
  
  const dateNow = new Date()
  const dayNow = dateNow.getDay()
  const timeNow = dateNow.getHours()
  
  const weekOpen = weekDays.indexOf(dayNow) !== -1
  
  if(weekOpen && timeNow >= timeWeek[0] && timeNow < timeWeek[1]){
    operation.classList.add("open")
  }else{
    operation.classList.remove("open")
  }
}

