const $menuTrigger = document.querySelector('.nav__menu-icon');


$menuTrigger.onclick = (e) => e.currentTarget.parentElement.classList.toggle('active');

// $menuTrigger.addEventListener('click', (e) => e.currentTarget.parentElement.classList.toggle('active'));