import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Carousel() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
      
      gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section class='demo-text'>
        <div class='wrapper text'>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=60' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=175' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=72' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
        </ul>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=175' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=74' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=26' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=31' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
        </ul>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=40' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=92' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=115' width='1240'/>
          </li>
        </ul>
      </section>
      <section class='demo-gallery'>
        <ul class='wrapper'>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=7' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=177' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=143' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li>
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
        </ul>
      </section>
      <section class='demo-text'>
        <div class='wrapper text'>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
      </section>
      <footer class='df aic jcc'>
        <p>Images from <a href="https://unsplash.com/">Unsplash</a></p>
      </footer>
    </div>
  );
}