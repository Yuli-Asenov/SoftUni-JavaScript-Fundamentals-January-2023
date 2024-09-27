function loadingBar(n) {
  if (n == 10) {
    console.log(`${n}% [%.........]`);
    console.log(`Still loading...`);
  } else if (n == 20) {
    console.log(`${n}% [%%........]`);
    console.log(`Still loading...`);
  } else if (n == 30) {
    console.log(`${n}% [%%%.......]`);
    console.log(`Still loading...`);
  } else if (n == 40) {
    console.log(`${n}% [%%%%......]`);
    console.log(`Still loading...`);
  } else if (n == 50) {
    console.log(`${n}% [%%%%%.....]`);
    console.log(`Still loading...`);
  } else if (n == 60) {
    console.log(`${n}% [%%%%%%....]`);
    console.log(`Still loading...`);
  } else if (n == 70) {
    console.log(`${n}% [%%%%%%%...]`);
    console.log(`Still loading...`);
  } else if (n == 80) {
    console.log(`${n}% [%%%%%%%%..]`);
    console.log(`Still loading...`);
  } else if (n == 90) {
    console.log(`${n}% [%%%%%%%%%.]`);
    console.log(`Still loading...`);
  } else if (n == 100) {
    console.log(`${n}% Complete!`);
    console.log(`[%%%%%%%%%%]`);
  }
}
loadingBar(10);
