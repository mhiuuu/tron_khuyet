import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Intro = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".intro_slide",
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.05
          },
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=3500"
        }
      });
    });
    return () => ctx.revert();
  }, []);



  return (
  <div className="flex flex-nowrwap overflow-auto intro_slide">
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/1)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/2)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/3)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/4)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
        <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/1)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/2)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/3)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/4)] bg-no-repeat bg-cover w-screen panel">
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl my-auto">
            <h1>Hiiii</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Intro;