const dynamicTime = document.querySelector(".wrapper h1");
const dynamicDate = document.querySelector(".wrapper p");

function doDynamicTime(dynamicTime_) {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const clock = `${hours}:${minutes}:${seconds}`;

  dynamicTime_.innerHTML = clock;
}

function doDynamicDate(dynamicDate_) {
  const time = new Date().toLocaleDateString();

  dynamicDate_.innerHTML = time;
}

setTimeout(doDynamicDate, 1000, dynamicDate);
setInterval(doDynamicTime, 1000, dynamicTime);
