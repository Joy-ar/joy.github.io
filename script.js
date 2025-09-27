const body = document.body;
const drawerToggle = document.getElementById('drawerToggle');
const navDrawer = document.getElementById('navDrawer');



// Drawer toggle logic
if (drawerToggle && navDrawer) {
  drawerToggle.addEventListener('click', () => {
    const isOpen = navDrawer.getAttribute('aria-hidden') === 'false';
    navDrawer.setAttribute('aria-hidden', String(isOpen));
    drawerToggle.setAttribute('aria-expanded', String(!isOpen));
    navDrawer.style.display = isOpen ? 'none' : 'block';
  });
}

// Project filter buttons logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Scroll down indicator click behavior
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
  scrollDown.style.cursor = 'pointer';
  scrollDown.addEventListener('click', () => {
    const nextSection = document.querySelector('.about-me-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Back and Forward button navigation
const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');

// Define the page order
const pages = ['index.html', 'about.html', 'projects.html', 'contact.html'];

// Get current page
const currentPath = window.location.pathname;
const currentPage = currentPath.split('/').pop() || 'index.html';
const currentIndex = pages.indexOf(currentPage);

if (backButton) {
  backButton.addEventListener('click', () => {
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    window.location.href = pages[prevIndex];
  });
}

if (forwardButton) {
  forwardButton.addEventListener('click', () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    window.location.href = pages[nextIndex];
  });
}
