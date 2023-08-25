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
          // snap: 1 / (box_items.length - 1),
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
            <div className="horizontal__item">
              <img
                className="img_cont"
                src="https://images.unsplash.com/photo-1682687221363-72518513620e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
                alt=""
              />
            </div>
            <div className="horizontal__item">
              <img
                className="img_cont"
                src="https://images.unsplash.com/photo-1691629015243-b2581c01bfe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80"
                alt=""
              />
            </div>
            <div className="horizontal__item">
              <img
                className="img_cont"
                src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div className="horizontal__item">
              <img
                className="img_cont"
                src="https://images.unsplash.com/photo-1691404126059-e03c2192d74b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt=""
              />
            </div>
            <div className="horizontal__item">
              <img
                className="img_cont"
                src="https://images.unsplash.com/photo-1691175084860-0320d12df95d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt=""
              />
            </div>
            <div className="horizontal__item">
              <img
                className="img_cont"
                src="https://plus.unsplash.com/premium_photo-1676686126212-177ee568e5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className="Scroll">This is the end !</div>
    </div>
  );
}
