searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
};

window.onscroll = () => {
  searchForm.classList.toggle('active');
  if (window.scrollX > 80) {
    document.querySelector('.header .header-two').classList.add('active');
  } else {
    document.querySelector('.header .header-two').classList.remove('active');
  }
};

window.onload = () => {
  if (window.scrollX > 80) {
    document.querySelector('.header .header-two').classList.add('active');
  } else {
    document.querySelector('.header .header-two').classList.remove('active');
  }
};
