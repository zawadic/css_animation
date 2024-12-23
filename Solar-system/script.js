function createStars(numStars) {
  const body = document.body;

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div'); 
      star.classList.add('star');

      // Randomize star position
      const x = Math.random() * window.innerWidth; 
      const y = Math.random() * window.innerHeight; 

      // Position the star
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      // Append star to the body
      body.appendChild(star);
  }
}

createStars(1); 
