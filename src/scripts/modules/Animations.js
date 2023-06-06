import { gsap, ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

gsap.set('.hero__title, hero__desc, .section-heading__desc', { autoAlpha: 0 });

function heroSplit() {
  const headings = new SplitText(document.querySelector('.hero__title'), {
    type: 'lines, chars',
  });

  const tl = gsap.timeline({});

  tl.set(headings.lines, { overflow: 'hidden' });

  tl.to('.hero__title', {
    autoAlpha: 1,
  });

  tl.from(headings.chars, {
    autoAlpha: 0,
    y: 400,
  });
  tl.from(
    '.hero__desc',
    {
      autoAlpha: 0,
    },
    '>',
  );
}

const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
});

smoother.effects('.hero img', { speed: 'auto' });

const headings = document.querySelectorAll('.section-heading__title');

headings.forEach((t) => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: t,
      start: 'top 80%',
      end: '+=300px center',
    },
  });

  timeline.fromTo(
    t,
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
    },
  );
  timeline.fromTo(
    '.section-heading__desc',
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
    },
  );
});

window.addEventListener('load', heroSplit);

//  scroll to archon

const archonLinks = document.querySelectorAll('a[href^="#"]');
archonLinks.forEach((t) => {
  t.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    smoother.scrollTo(target);
  });
});

//  sticky

const sticky = document.querySelector('.sticky');

// sticky.forEach(t => {

// })

if (sticky) {
  ScrollTrigger.create({
    trigger: sticky.parentElement,
    scrub: 0.5,
    start: 'top 20px',
    end: 'bottom bottom',
    pin: sticky,
    pinSpacing: false,
  });
}
