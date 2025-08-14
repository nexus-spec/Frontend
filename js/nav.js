const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');

openMenu.addEventListener('click', () => {
  navLinks.classList.add('active');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'inline';
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
  openMenu.style.display = 'inline';
  closeMenu.style.display = 'none';
});
