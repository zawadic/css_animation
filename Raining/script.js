const raindropContainer = document.querySelector('.raindrop-container');

// Function to create a raindrop
function createRaindrop() {
  const drop = document.createElement('div');
  drop.classList.add('raindrop');

  // Randomize position of each raindrop beneath the cloud
  drop.style.left = Math.random() * 350 + 'px'; // Adjust based on cloud width
  drop.style.bottom =  100 + 'px'; // Adjust based on cloud width
  drop.style.animationDuration = (Math.random() * 1 + 1) + 's'; // Randomize drop speed

  raindropContainer.appendChild(drop);

  // Remove the drop after it has fallen
  setTimeout(() => {
    raindropContainer.removeChild(drop);
  }, parseFloat(drop.style.animationDuration) * 1000);
}

// Create raindrops continuously
setInterval(createRaindrop, 1);