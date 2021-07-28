const times = process.argv.slice(2);

const alarmClock = (times) => {
  times.forEach(time => {
    if (!Number.isNaN(time) && time > 0) {
      const delay = time * 1000
      setTimeout(() => {
        process.stdout.write('\x07')}, delay/*input from the node*/);
        console.log("Beep!")
    }
  })
}

alarmClock(times)