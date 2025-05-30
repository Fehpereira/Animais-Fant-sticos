export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPrice = document.querySelector(target);
      btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
