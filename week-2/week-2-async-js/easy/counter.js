// let cnt = 0;

// setInterval(() => {
//     cnt++;
//     console.log(cnt);
// },1000)

let count = 0;

function counter() {
  count++;
  console.log(count);
  setTimeout(counter, 1000);
}
counter();