const pads = document.querySelectorAll('.pad');

pads.forEach(pad => {
  const idx = pad.dataset.sound;
  const audio = new Audio(`sounds/${idx}.mp3`);
  audio.preload = 'auto';

  // 再生が最後まで行ったら active クラスを外す
  audio.addEventListener('ended', () => {
    pad.classList.remove('active');
    audio.currentTime = 0;
  });

  pad.addEventListener('pointerdown', () => {
    if (audio.paused) {
      // 再生開始
      audio.currentTime = 0;
      audio.play();
      pad.classList.add('active');
    } else {
      // 停止＋リセット
      audio.pause();
      audio.currentTime = 0;
      pad.classList.remove('active');
    }
  });
});
