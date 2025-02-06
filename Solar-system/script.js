function createStars(numStars) {
  const body = document.body;

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div'); 
      star.classList.add('star');

      // Randomize stars position creation
      const x = Math.random() * window.innerWidth; 
      const y = Math.random() * window.innerHeight; 

      // Positioning the stars
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;

      // Append star to the body
      body.appendChild(star);
  }
}

createStars(900); 
