export default class initOperation {
  constructor(operation) {
    this.operation = document.querySelector(operation);
  }

  operationData() {
    this.weekDays = this.operation.dataset.semana.split(',').map(Number);
    this.timeWeek = this.operation.dataset.horario.split(',').map(Number);
  }

  nowData() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  isItOpen() {
    this.weekOpen = this.weekDays.indexOf(this.dayNow) !== -1;
    this.timeOpen =
      this.timeNow >= this.timeWeek[0] && this.timeNow < this.timeWeek[1];
    return this.weekOpen && this.timeOpen;
  }

  activeOpen() {
    if (this.isItOpen()) {
      this.operation.classList.add('open');
    } else {
      operation.classList.remove('open');
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.nowData();
      this.activeOpen();
    }
    return this;
  }
}
