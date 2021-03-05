window.addEventListener('keydown', play);

function pause(x) {
    if (x.propertyName !== 'transform') return;
    x.target.classList.remove('playing');
}

function play(y) {
    const audio = document.querySelector(`audio[data-key="${y.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${y.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key =>
    key.addEventListener('transitionend', pause)
);