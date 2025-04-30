export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPrice = document.querySelector('.btc-preco');
      btcPrice.innerText = (1000 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
