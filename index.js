function getDate() {
  return new Date().getFullYear();
}

document.getElementsByClassName('footer-info')[0].innerHTML += getDate();

const pushZeroConditional = (unit) => {
  if (unit < 10) {
    return '0' + unit;
  }
  return unit;
};

function beginClock() {
  let today = new Date();
  let hours = pushZeroConditional(today.getUTCHours());
  let minute = pushZeroConditional(today.getUTCMinutes());
  let seconds = pushZeroConditional(today.getUTCSeconds());

  document.querySelector(
    '.utcclock'
  ).innerHTML = `${hours}:${minute}:${seconds} UTC`;
  setTimeout(beginClock, 500);
}

beginClock();
