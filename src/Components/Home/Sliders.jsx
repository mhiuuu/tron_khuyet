import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Sliders() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      
      gsap.utils.toArray('section .sliders').forEach((section, index) => {
        const w = section.querySelector('.flex');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 1,
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden">
      <section className='sliders demo-text'>
        <div className='flex text'>
          THEUPPROJECT
        </div>
      </section>
      <section className='sliders demo-gallery'>
        <ul className='flex'>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=60' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=175' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=72' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
        </ul>
      </section>
      <section className='sliders demo-gallery'>
        <ul className='flex'>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=175' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=74' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=26' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=31' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img height='874' src='https://source.unsplash.com/random/1240x874?sig=96' width='1240'/>
          </li>
        </ul>
      </section>
      <section className='sliders demo-text'>
        <div className='flex text'>
          THEUPPROJECT
        </div>
      </section>
    </div>
  );
}