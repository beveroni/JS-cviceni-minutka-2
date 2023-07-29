const zapniMinutku = (e) => {
  e.preventDefault();
  let cas = Number(document.querySelector('.time-input').value);

  const sekundy = document.querySelector('.alarm__seconds');
  const alarm = document.querySelector('.alarm');

  alarm.classList.remove('alarm--ring');
  sekundy.textContent = String(cas);

  const odpocet = () => {
    if (cas > 0) {
      cas -= 1;
      sekundy.textContent = String(cas);
    }
    if (cas <= 0) {
      clearInterval(casovac);
      alarm.classList.add('alarm--ring');
      document.querySelector('audio').play();
    }
  };
  const casovac = setInterval(odpocet, 1000);
};
const formular = document.querySelector('form');
formular.addEventListener('submit', zapniMinutku);
