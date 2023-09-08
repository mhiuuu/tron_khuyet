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
            <img alt="" height='874' src='https://verentas.sirv.com/UPPD/DSC07636.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/UPPP/IMG_1447.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/UPPP/IMG_2901.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/3.jpg' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/IMG_8152.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/IMG_8136.JPG' width='1240'/>
          </li>
        </ul>
      </section>
      <section className='sliders demo-gallery'>
        <ul className='flex'>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/UPPD/DSC07636.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/UPPP/IMG_1447.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/UPPP/IMG_2901.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/3.jpg' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/IMG_8152.JPG' width='1240'/>
          </li>
          <li className="shrink-0 w-[clamp(500px,60vw,800px)] pr-4">
            <img alt="" height='874' src='https://verentas.sirv.com/IMG_8136.JPG' width='1240'/>
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