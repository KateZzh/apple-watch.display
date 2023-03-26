// const dynamicTime = document.querySelector(".wrapper h1");
// const dynamicDate = document.querySelector(".wrapper p");

// function doDynamicTime(dynamicTime_) {
//   const time = new Date();
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();
//   const clock = `${hours}:${minutes}:${seconds}`;

//   dynamicTime_.innerHTML = clock;
// }

// function doDynamicDate(dynamicDate_) {
//   const time = new Date().toLocaleDateString();

//   dynamicDate_.innerHTML = time;
// }

// setTimeout(doDynamicDate, 1000, dynamicDate);
// setInterval(doDynamicTime, 1000, dynamicTime);


// class AppleWatchDisplay {
//   constructor() {
//     setTimeout(this.doDynamicDate, 1000, this.dynamicDate);
//     setInterval(this.doDynamicTime, 1000, this.dynamicTime);
//   }

//   doDynamicTime() {
//     const dynamicTime = document.querySelector(".wrapper h1");
//     const time = new Date();
//     const hours = time.getHours();
//     const minutes = time.getMinutes();
//     const seconds = time.getSeconds();
//     const clock = `${hours}:${minutes}:${seconds}`;

//     dynamicTime.innerHTML = clock;
//   }

//   doDynamicDate() {
//     const dynamicDate = document.querySelector(".wrapper p");
//     const time = new Date().toLocaleDateString();

//     dynamicDate.innerHTML = time;
//   }
// }

// const appleWatchDisplay = new AppleWatchDisplay();

class AppleWatchDisplay {
  constructor() {
    setInterval(this.doDynamicDateTime, 1000);
  }

  doDynamicDate() {
    const dynamicDate = document.querySelector(".wrapper p");
    const time = new Date().toLocaleDateString("ru-BY");

    dynamicDate.innerHTML = time;
  }

  doDynamicDateTime() {
    const dynamicTime = document.querySelector(".wrapper h1");
    const dynamicDate = document.querySelector(".wrapper p");
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const clock = `${hours}:${minutes}:${seconds}`;

    dynamicDate.innerHTML = time.toLocaleDateString("ru-BY");
    dynamicTime.innerHTML = clock;
  }
}

const appleWatchDisplay = new AppleWatchDisplay();
