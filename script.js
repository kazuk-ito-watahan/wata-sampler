// 各パッドに対応する音声をプリロード
const pads = document.querySelectorAll('.pad');
pads.forEach(pad => {
  const idx = pad.dataset.sound;
  const audio = new Audio(`sounds/${idx}.mp3`);
  // 再生時に必ず先頭に戻す
  pad.addEventListener('pointerdown', () => {
    audio.currentTime = 0;
    audio.play();
  });
});
