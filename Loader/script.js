const button = document.getElementById('loaderButton');
const buttonText = document.querySelector('.button-text');
const loader = document.querySelector('.loader');
const loaderText = document.querySelector('.loader-text')

button.addEventListener('click', () => {
  // Show the loader and hide button text
  buttonText.classList.add('hidden');
  loader.classList.remove('hidden');
  loaderText.classList.remove('hidden');

  // Simulate a loading process
  setTimeout(() => {
    // Hide loader and show success message with icon
    loader.classList.add('hidden');
    loaderText.classList.add('hidden');
    buttonText.innerHTML = 'Success <i class="fa-solid fa-check fa-lg"></i>';
    buttonText.classList.remove('hidden');
    button.style.background = '#4caf50'; // Change button color to green
  }, 3000); // Loader runs for 3 seconds
});
