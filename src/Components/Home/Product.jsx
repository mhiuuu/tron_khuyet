import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Gallery = () => {
  useLayoutEffect(() => {
    const section_2 = document.getElementById("horizontal");
    const width_box2 = document.querySelector(".container");
    const width_box = document.querySelector(".horizontal__content");

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      console.log(document.documentElement.clientWidth);
      console.log(width_box.offsetWidth);
      console.log(width_box2.clientWidth);
      console.log(width_box.clientWidth);
      gsap.to(section_2, {
        x:-width_box2.offsetWidth,
        ease: "ease",
        scrollTrigger: {
          trigger: section_2,
          pin: true,
          scrub: 1.5,
          end: "bottom",
          markers: true
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section id="horizontal">
        <div className="container">
          <div className="horizontal__content">
            <ul className="horizontal__content">
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span6"><img src="https://source.unsplash.com/random/2"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/3"/></li>
              <li className="span5"><img src="https://source.unsplash.com/random/4"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/5"/></li>
              <li className="span4"><img src="https://source.unsplash.com/random/6"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/7"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/8"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/9"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/10"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/11"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/12"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/13"/></li>
              <li className="span2 height2"><img src="https://source.unsplash.com/random/14"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/15"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/16"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/17"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/18"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/19"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/20"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/21"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/22"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/23"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/24"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/25"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/26"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/27"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/28"/></li>
              <li className="span2 height2"><img src="https://source.unsplash.com/random/29"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/30"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/31"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/32"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/33"/></li>
              <li className="span4"><img src="https://source.unsplash.com/random/34"/></li>
              </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

const Products = () => {
  return (
    <section>
      <div className="text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div>
            <Gallery />            
          </div>
          {/* The static part */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/2 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p className="text-sm md:text-base text-black mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
              fest.
            </p>
            <a href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-black hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Products