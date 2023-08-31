import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Intro = () => {
  return (
  <section> 
    <div className="h-screen bg-blue-100 flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/23)] bg-no-repeat bg-cover">
      <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row">
        <div className="basis-1/3 container text-white pr-8">
          <h1>Hiiii</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro repudiandae praesentium doloribus aliquam, in quibusdam reiciendis excepturi harum officiis nostrum obcaecati. Quibusdam, velit placeat maiores in quidem quo. Beatae?</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Intro;