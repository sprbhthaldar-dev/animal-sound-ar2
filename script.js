function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}
