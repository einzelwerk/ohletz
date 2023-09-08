import { gsap, ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all';
import breakpoints from '../utils/MatchMedia';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function heroSplit() {
  const headings = new SplitText(document.querySelectorAll('.hero__title'), {
    type: 'lines',
    tag: 'span',
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

window.addEventListener('load', () => {
  if (window.matchMedia(breakpoints.isDesktop).matches) {
    heroSplit();
    gsap.set('.hero__title, hero__desc, .section-heading__desc', { autoAlpha: 0 });

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
  }
});

//  sticky

const sticky = document.querySelector('.sticky');

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

if (window.matchMedia(breakpoints.isDesktop).matches) {
  const smoother = ScrollSmoother.create({
    smooth: 1,
    effects: true,
  });

  smoother.effects('.hero img', { speed: 'auto' });

  //  scroll to archon

  const archonLinks = document.querySelectorAll('a[href^="#"]');
  archonLinks.forEach((t) => {
    t.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.currentTarget.getAttribute('href');
      smoother.scrollTo(target);
    });
  });
  // eslint-disable-next-line no-restricted-globals
  const { hash } = location;
  window.addEventListener('load', () => {
    if (hash) {
      const el = document.querySelector(hash);

      if (el) smoother.scrollTo(el, true, 'top');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const el = document.querySelector(hash);

      if (el) smoother.scrollTo(el, true, 'top');
    });
  });
}
