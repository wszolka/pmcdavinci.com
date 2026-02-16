let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;

window.addEventListener('mousemove', (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
});

gsap.registerPlugin(ScrollTrigger);

export function resetScrollTriggers(){
  ScrollTrigger.refresh();
}

export function killScrollTrigger(selector) {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger && trigger.trigger.matches(selector)) {
      trigger.kill();
    }
  });
}

export function debounce(fn, delay) {
  let timerId;
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  };
}

let scrollPosition = 0;

export function disableScrolling() {
  scrollPosition = window.pageYOffset;
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = '100%';
  /* document.documentElement.style.scrollBehavior = 'auto'; */
   
}
   
export function enableScrolling(scrollToPosition = true) {
  document.body.style.removeProperty('overflow');
  document.body.style.removeProperty('position');
  document.body.style.removeProperty('top');
  document.body.style.removeProperty('width');
  if(scrollToPosition){
    window.scrollTo(0, scrollPosition);
  }
  /* document.documentElement.style.scrollBehavior = 'smooth'; */
}

let lenis;

export function setSmoothScroll() {
  if(window.safari !== undefined) return;

  if (lenis) {
    lenis.destroy();
  }

  let attribute = document.querySelector('html').getAttribute('data-smooth-scroll');
  let speed = 0;
  
  switch (attribute) {
    case 'Subtle':
      speed = 0.4;    
      break;

    case 'Moderate':
      speed = 0.7;    
      break;

    case 'Intense':
      speed = 1.2;    
      break;

    default:
      speed = 0.7;
      break;
  }

  lenis = new Lenis({
    duration: speed,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false
  })

  function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf);

  if(attribute == 'None' && lenis){
    lenis.destroy();
  }
}

export function setToggle() {
  const toggleHeadingElements = document.getElementsByClassName("toggle-heading");
  
  const toggleFn = function(event) {
      const targetElement = event.target;
      const parentElement = targetElement.closest('.toggle-card');
      var toggleState = parentElement.getAttribute("data-toggle-state");
      if (toggleState === 'close') {
          parentElement.setAttribute('data-toggle-state', 'open');
      } else {
          parentElement.setAttribute('data-toggle-state', 'close');
      }
  };

  for (let i = 0; i < toggleHeadingElements.length; i++) {
      toggleHeadingElements[i].addEventListener('click', toggleFn, false);
  }
}

export function pageLoadAnimations() {
  let easeInAnimations = document.querySelectorAll('.ease-in-animation');
  let easeInAnimationsNoStagger = document.querySelectorAll('.ease-in-animation-no-stagger');
  let opacityAnimations = document.querySelectorAll('.opacity-animation');
  let imageAnimations = document.querySelector('.image-animation');

  if(easeInAnimations.length > 0){
    gsap.to(easeInAnimations, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.25,
      stagger: 0.03,
      ease: 'expo.out',
    });
  }

  if(easeInAnimationsNoStagger.length > 0){
    
    gsap.to(easeInAnimationsNoStagger, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      delay: 0.2,
      ease: 'expo.out',
    });
  }

  if(opacityAnimations.length > 0){
    gsap.to(opacityAnimations, {
      opacity: 1,
      duration: 1.2,
      delay: 0.25,
      stagger: 0.1,
      ease: 'expo.out',
    });
  }

  if(imageAnimations){
    gsap.fromTo(
      imageAnimations,
      {
          opacity: 0
      },
      {
          opacity: 1,
          duration: 0,
          ease: 'power2.out',
      }
    );
  }

  //Adding a class here instead of animation because there was a problem with Lightense & this animation
  let postContent = document.querySelector('.post-content');
  if(postContent){
      postContent.classList.add('visible-content')
  }  
}

export function setLightense(){
  window.addEventListener('DOMContentLoaded', function () {
      const imagesInAnchors = document.querySelectorAll('.post-content a img');
  
      imagesInAnchors.forEach((img) => {
          img.classList.add('no-lightense');  
      });
  
      Lightense('.post-content img:not(.no-lightense)', {
          background: 'var(--background-color)'
      });
  }, false);
}

export function copyUrlToClipboard(parentElement){
  let parent = document.querySelector(`.${parentElement}`)
  let alert = parent.querySelector('.clipboard-alert');

  parent.querySelector('.clipboard-link').addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      alert.style.display = "block";

      setTimeout(function () {
          alert.style.display = "none";
      }, 3000);
  })
}

export async function setImageGallery() {
  const images = document.querySelectorAll('.gallery-image img');

  const waitForImageLoad = (img) =>
    new Promise((resolve) => {
      if (img.complete && img.naturalWidth > 0) {
        resolve();
      } else {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      }
    });

  await Promise.all(Array.from(images).map((img) => waitForImageLoad(img)));

  images.forEach((image) => {
    const container = image.closest('.gallery-image');
    if (container) {
      const width = image.naturalWidth;
      const height = image.naturalHeight;
      const ratio = width / height;
      container.style.flex = `${ratio} 1 0%`;
    }
  });
}

function creativeLatestPostsTrigger(){
  let selector = '.creative-post-card, .all-posts-link';

  gsap.registerPlugin(ScrollTrigger);

  killScrollTrigger(selector);

  document.querySelectorAll(selector).forEach(heading => {
    let img = heading.querySelector('.creative-post-card-image-wrapper');
    let headingInner = heading.querySelector('.creative-post-card-title');
    let arrow = heading.querySelector('.arrow-link-button');

    ScrollTrigger.matchMedia({
      "(max-width: 1080px)": function () {
        gsap.to(headingInner, {
          scrollTrigger: {
            trigger: heading,
            start: "top center",
            end: "bottom+=1 center",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              onEnterAnimation();
            },
            onLeave: () => {
              onLeaveAnimation();
            },
            onEnterBack: () => {
              onEnterAnimation();
            },
            onLeaveBack: () => {
              onLeaveAnimation();
            }
          }
        });
      },
      "(min-width: 1081px)": function () {
         removeStyles(); 
      }
    });

    function removeStyles(){
      gsap.set(headingInner, {
        clearProps: "all"
      });
      if(img){
        gsap.set(img, {
          clearProps: "all"
        });
      }else{
        gsap.set(arrow, {
          clearProps: "all"
        });
      } 
    }

    function onEnterAnimation(){
      headingInner.style.opacity = 1;
      if(img){
        img.style.opacity = 1;
      }else{
        arrow.style.transform = 'translateX(120%) scale(1)';
      }   
    }

    function onLeaveAnimation(){
      headingInner.style.opacity = 0.2;
      if(img){
        img.style.opacity = 0;
      }else{
        arrow.style.transform = 'translateX(120%) scale(0)';
      }   
    }
  });
}

export function setCreativePostImages() {
  let selector = '.creative-post-card, .all-posts-link';

  let getSelectors = document.querySelectorAll(selector);
  if(getSelectors.length == 0) return;
  
  let currentX = targetX;
  let currentY = targetY;
  const ease = 0.11;

  creativeLatestPostsTrigger();

  const animate = () => {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    document.querySelectorAll('.creative-post-card-image-container').forEach(img => {
      img.style.transform = `translate(${currentX}px, ${currentY}px)`;
    });

    requestAnimationFrame(animate);
  };

  animate();
}

export function setImageParallax() {
  killScrollTrigger('.parallax-image');

  document.querySelectorAll('.parallax-image img').forEach((image) => {
    const container = image.closest('.parallax-image');

    if(container.classList.contains('parallax-image-mobile') && window.innerWidth > 1080){
      image.style.transform = 'translateX(0%)';
      return;
    }else if(container.classList.contains('parallax-image-desktop') && window.innerWidth <= 1080){
      image.style.transform = 'translateX(0%)';
      return;
    }

    gsap.fromTo(
      image,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
      }
    );
  });
}

export function setH2position() {
  if(window.innerWidth <= 1080) return;

  const navbar = document.querySelector('.navbar .wide-container');
  const width = window.getComputedStyle(navbar).width;
  document.documentElement.style.setProperty('--post-container-width', width);
}

