let map = [];
let k = 0;
let isSticky = false;
let timeout = 0;
document.addEventListener("keydown", (event) => {
  if (event.key === "Shift") {
    if (!isSticky) {
      map[k] = Date.now();
      k++;
      checkForStickey();
    } else {
      setTimeout((fn) => {
        isSticky = false;
      }, timeout);
    }
  } else {
    k = 0;
    map = [];
  }
  // console.log(map);
});
const checkForStickey = () => {
  if (map.length < 5) return;
  for (let i = 0; i <= map.length - 4; i++) {
    console.log(map[i + 4] - map[i]);
    if (map[i + 4] - map[i] < 5000) {
      alert("sticky key activated");
      console.log("sticky key activated");

      isSticky = true;
      timeout = 5000 - (Date.now() - map[k - 4]);
      map = [];
      k = 0;
    }
  }
};
