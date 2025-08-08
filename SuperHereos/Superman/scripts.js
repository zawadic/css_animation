const superman = document.querySelector('.superman');

// Arms & hands
const leftArm = document.querySelector('.arm.left');
const rightArm = document.querySelector('.arm.right');
const leftHand = document.querySelector('.arm.left .hand.left');
const rightHand = document.querySelector('.arm.right .hand.right');

// Legs & shoes
const rightLeg = document.querySelector('.leg.right');
const rightShoe = document.querySelector('.leg.right .shoe.right');

// Eyes
const leftEye = document.querySelector('.eye.left');
const rightEye = document.querySelector('.eye.right');

// --- Punch ---
document.querySelector('.btn-punch').onclick = () => {
  // Left punch
  leftArm.style.transform = 'rotate(-60deg)';
  leftHand.style.transform = 'rotate(-20deg)';
  setTimeout(() => {
    // Reset left
    leftArm.style.transform = 'rotate(10deg)';
    leftHand.style.transform = 'rotate(0deg)';

    // Right punch
    rightArm.style.transform = 'rotate(-60deg)';
    rightHand.style.transform = 'rotate(-20deg)';
    setTimeout(() => {
      // Reset right
      rightArm.style.transform = 'rotate(345deg)';
      rightHand.style.transform = 'rotate(0deg)';
    }, 500);
  }, 500);
};

// --- Kick ---
document.querySelector('.btn-kick').onclick = () => {
  rightLeg.style.transform = 'rotate(60deg)';
  rightShoe.style.transform = 'rotate(30deg)';
  setTimeout(() => {
    rightLeg.style.transform = 'rotate(0deg)';
    rightShoe.style.transform = 'rotate(-30deg)';
  }, 500);
};

// --- Run ---
document.querySelector('.btn-run').onclick = () => {
  superman.classList.add('running');

  // Remove animation after 1s
  setTimeout(() => {
    superman.classList.remove('running');
  }, 1000);
};

// --- Laser Eyes ---
document.querySelector('.btn-laser').onclick = () => {
  leftEye.style.boxShadow = '0 0 10px 5px red';
  rightEye.style.boxShadow = '0 0 10px 5px red';
  setTimeout(() => {
    leftEye.style.boxShadow = 'none';
    rightEye.style.boxShadow = 'none';
  }, 500);
};

// --- None / Reset ---
document.querySelector('.btn-none').onclick = () => {
  // Reset arms and hands
  leftArm.style.transform = 'rotate(10deg)';
  leftHand.style.transform = 'rotate(0deg)';
  rightArm.style.transform = 'rotate(345deg)';
  rightHand.style.transform = 'rotate(0deg)';

  // Reset leg and shoe
  rightLeg.style.transform = 'rotate(0deg)';
  rightShoe.style.transform = 'rotate(-30deg)';

  // Reset laser eyes
  leftEye.style.boxShadow = 'none';
  rightEye.style.boxShadow = 'none';

  // Reset body position
  superman.style.transform = 'none';
  superman.classList.remove('running');
};
