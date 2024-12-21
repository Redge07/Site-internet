function sidebar() {
    var headerphone = document.getElementById('header_phone');
    main = document.getElementById('main');
    header = document.getElementById('header');
    footer = document.getElementById('footer');
    headerphone.classList.toggle("open");

    if (headerphone.classList.contains('open')) {
      main.style.filter = "blur(5px)";
      header.style.filter = "blur(5px)";
      footer.style.filter = "blur(5px)";

      header.classList.add('open');
      main.classList.add('open');
      footer.classList.add('open');
      

      document.querySelector('.open_menu').style.display = 'none';
      document.querySelector('.close_menu').style.display = 'flex';

    }else{

      main.style.filter = "blur(0px)";
      header.style.filter = "blur(0px)";
      footer.style.filter = "blur(0px)";

      header.classList.remove('open');
      main.classList.remove('open');
      footer.classList.remove('open');

      document.querySelector('.open_menu').style.display = 'flex';
      document.querySelector('.close_menu').style.display = 'none';
    }
  }

  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
      header.style.height = '50px';
    } else {
      header.style.height = '100px';
    }
  });

  function ordi() {
    main = document.getElementById('main');
    header = document.getElementById('header');
    footer = document.getElementById('footer');
    headerphone = document.getElementById('header_phone');

    const closeMenu = document.querySelector('.close_menu');
    const displayValue = window.getComputedStyle(closeMenu).display;

    if (window.innerWidth > 950 && displayValue === 'flex') {
      main.style.filter = "blur(0px)";
      header.style.filter = "blur(0px)";
      footer.style.filter = "blur(0px)";

      header.classList.remove('open');
      main.classList.remove('open');
      footer.classList.remove('open');

      document.querySelector('.open_menu').style.display = 'flex';
      document.querySelector('.close_menu').style.display = 'none';
      headerphone.classList.remove('open');
    }
  }
window.addEventListener('resize', ordi);
window.addEventListener('load', ordi);

document.getElementById('main').addEventListener('click', () => {
  var headerphone = document.getElementById('header_phone');
  if (headerphone.classList.contains('open')) {
    sidebar();
  }
});

document.getElementById('main').addEventListener('click', () => {
  var headerphone = document.getElementById('header_phone');
  if (headerphone.classList.contains('open')) {
    sidebar();
  }
});

document.getElementById('header').addEventListener('click', () => {
  var headerphone = document.getElementById('header_phone');
  if (headerphone.classList.contains('open')) {
    sidebar();
  }
});

document.getElementById('footer').addEventListener('click', () => {
  var headerphone = document.getElementById('header_phone');
  if (headerphone.classList.contains('open')) {
    sidebar();
  }
});
