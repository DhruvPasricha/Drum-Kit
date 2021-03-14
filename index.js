let keys = new Map();
keys.set("w", 1);
keys.set("a", 2);
keys.set("s", 3);
keys.set("d", 4);
keys.set("j", 5);
keys.set("k", 6);
keys.set("l", 7);
function playSound(i) {
  let s = "sounds/tom-";
  s += i;
  s += ".mp3";
  var audio = new Audio(s);
  audio.play();
}

// Click Events
for (let i = 1; i <= 7; i++) {
  document
    .querySelectorAll("button")
    [i - 1].addEventListener("click", function () {
      playSound(i);

      let s = this.classList[0];
      document.querySelector("." + s).classList.add("pressed");
      setTimeout(function () {
        document.querySelector("." + s).classList.remove("pressed");
      }, 100);
    });
}
// KeyPress Events
document.addEventListener("keypress", function (event) {
  if (keys.has(event.key)) {
    playSound(keys.get(event.key));
    document.querySelector("." + event.key).classList.add("pressed");
    setTimeout(function () {
      document.querySelector("." + event.key).classList.remove("pressed");
    }, 100);
  }
});
