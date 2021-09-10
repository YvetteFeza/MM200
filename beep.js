const readline = require("readline");

const COUNTDOWN_TICK_IN_MS = 1000;
const COUNTDOWN_TIME_INDEX = 2;
const BEEP_SOUND = "\x07";
const DEFAULT_COUNTDOWN_TIME_SECONDS = 30;
const countDownTimeSec = getCountDownTime();
let remainingTime = countDownTimeSec;

if (isNaN(countDownTimeSec)) {
  console.log(
    `Beklager, nedtelling må angis som et tall. Du skrev :${countDownTimeSec}`
  );
  process.exit(-1);
}

process.stdout.write(`${countDownTimeSec} s countdown started`);

let intervalId = setInterval(() => {
  remainingTime--;
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0, null);
  process.stdout.write(`${remainingTime}s`);
  if (remainingTime == 0) {
    clearInterval(intervalId);
    console.log("\nCountdown complete 🎉");
    console.log(BEEP_SOUND);
  }
}, COUNTDOWN_TICK_IN_MS);

function getCountDownTime() {
  return process.argv[COUNTDOWN_TIME_INDEX] || DEFAULT_COUNTDOWN_TIME_SECONDS;
}

