import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Carousel() {
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
        x:
          (width_box.offsetWidth -
            document.documentElement.clientWidth +
            width_box2.clientWidth -
            width_box.clientWidth) *
          -1,
        ease: "ease",
        scrollTrigger: {
          trigger: section_2,
          pin: true,
          scrub: 3,
          end: "bottom",
          markers: true
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <div className="Scroll">Please Scroll Below</div>
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
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span2 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span4"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span4"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span2 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3 height2"><img src="https://source.unsplash.com/random/1"/></li>
              <li className="span3"><img src="https://source.unsplash.com/random/2"/></li>
              </ul>
          </div>
        </div>
      </section>
      <div className="Scroll">This is the end !</div>
    </div>
  );
}
