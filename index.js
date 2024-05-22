const buttons = document.querySelectorAll(".drum");

const sounds = {
  w: "crash",
  a: "kick-bass",
  s: "snare",
  d: "tom-1",
  j: "tom-2",
  k: "tom-3",
  l: "tom-4",
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (sound in sounds) {
      if (sound == button.classList[0]) {
        let audio = new Audio(`./sounds/${sounds[sound]}.mp3`);
        audio.play();
      }
    }
  });
});

document.addEventListener("keydown", (e) => {
  for (sound in sounds) {
    if (sound == e.key) {
      let audio = new Audio(`./sounds/${sounds[e.key]}.mp3`);
      audio.play();
    }
  }
  buttons.forEach((btn) => {
    if (btn.classList[0] == e.key) {
      btn.classList.add("scale");
    }
    setTimeout(() => {
      btn.classList.remove("scale");
    }, 100);
  });
});
