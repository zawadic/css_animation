function showMessage() {
  const msg = document.getElementById("message");
  msg.textContent = "🎉 Happy Birthday! 🎉";
  msg.style.opacity = 1;

  document.querySelectorAll('.flame').forEach(flame => {
    flame.style.display = "none";
  });

  launchConfetti();
}

function launchConfetti() {
  const confettiContainer = document.getElementById("confetti");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = getRandomColor();
    confetti.style.position = "absolute";
    confetti.style.top = "50%";
    confetti.style.left = "50%";
    confetti.style.borderRadius = "50%";
    confetti.style.opacity = 0.8;
    confetti.style.setProperty('--x', `${Math.random() * 400 - 200}px`);
    confetti.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    confetti.style.animation = `drop ${Math.random() * 2 + 2}s ease-out forwards`;

    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });

    confettiContainer.appendChild(confetti);
  }
}

function getRandomColor() {
  const colors = ["#e17055", "#fdcb6e", "#00b894", "#74b9ff", "#a29bfe", "#ff7675"];
  return colors[Math.floor(Math.random() * colors.length)];
}
