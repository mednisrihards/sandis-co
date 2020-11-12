const articles = document.querySelectorAll('.article');
const heading1 = document.querySelector('.first');
const heading2 = document.querySelector('.second');
const navBar = document.querySelector('.nav');
const navBtns = document.querySelector('.nav__btns');
const burger = document.querySelector('.fa-bars');
const cross = document.querySelector('.cross');
const hero = document.querySelector('.hero');
const windowHeight = window.innerHeight;

function allLoaded(){

gsap.from(hero, {opacity: 0, duration: 1, delay: 1.3});
gsap.from(heading2, {opacity: 0, duration: .9, delay: .7, y: -150});
gsap.from(heading1, {opacity: 0, duration: .9, delay: .7, y: -150});
// gsap.from(navBar, {opacity: 0, duration: .9, delay: 0.5, y: -150});

burger.addEventListener('click', () => {
  navBtns.classList.toggle('nav-active'); 
  burger.style.display = 'none';
  cross.style.display = 'block';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    burger.style.display = 'none';
    cross.style.display = 'none';
  } else {
    burger.style.display = 'block';
  }
});

cross.addEventListener('click', () => {
  navBtns.classList.toggle('nav-active'); 
  burger.style.display = 'block';
  cross.style.display = 'none';
});

(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.article');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
};

var queue = new createjs.LoadQueue(false);

queue.on('complete', event => {
  document.querySelector('body').style.scrollBehavior = 'none';

    gsap.to(document.querySelector('.lds-ring'), {opacity: 0, duration: .2});
    gsap.to(document.querySelector('body'), {display: 'block', duration: .2});
    gsap.to(document.querySelector('.overlay'), {transformOrigin: 'top', scaleY: 0, duration: .2, delay: .5});
    allLoaded();
});

queue.loadFile('http://165.22.17.31/RihardsMednisCom/cleaning-services/img/hero.jpg');