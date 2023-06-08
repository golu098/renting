const carousel = document.querySelector('.carousel');
const cardContainers = document.querySelectorAll('.card-container');
let currentCardIndex = 0;

function scrollCards(direction) {
  currentCardIndex += direction;
  if (currentCardIndex < 0) {
    currentCardIndex = cardContainers.length - 1;
  } else if (currentCardIndex >= cardContainers.length) {
    currentCardIndex = 0;
  }

  const scrollOffset = cardContainers[currentCardIndex].offsetLeft - cardContainers[0].offsetLeft;
  carousel.scrollLeft = scrollOffset;
}

const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.title').textContent;

    // Redirect to the product details page with query parameters
    window.location.href = `product.html?product=${encodeURIComponent(title)}`;
  });
});


const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const title = card.querySelector('.title').textContent;
    alert(`Clicked Like button for ${title}`);
  });
});

// Get all social media icons
const socialIcons = document.querySelectorAll('.social-icons a');

// Add click event to each social media icon
socialIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Replace with your desired functionality
    console.log('Social media icon clicked!');
  });
});

