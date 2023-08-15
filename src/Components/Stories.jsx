import {React, useEffect} from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


// Define a component for the header
function Stories() {
  /* useEffect(() => {
    gsap.to('Text_area', {
      scrollTrigger: {
        trigger: "#header",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 50,
      scale: 3,
      opacity: 0,
    })
  }); */

  return (
    <div>
      <section>
        <img
          src="https://scontent.fhan9-1.fna.fbcdn.net/v/t39.30808-6/300417731_5451246738275703_5514214399714798955_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=N_4dYTppHG0AX_AWDVG&_nc_oc=AQkmYGpIjkc_uv8za28fvehJASy8MqG_PSPf6ee7Hg0P360VAu8zMfFpyrTKd9cc-lkPlwZGo5hdK6YjztP8umSF&_nc_ht=scontent.fhan9-1.fna&oh=00_AfDUUQ9f6c5nwRmJImK7_z6tFoBNjvFWCpLlSd5UIY7BXA&oe=64DDC107"
          alt="Background image"
          className="Img clip rect(0, auto, auto, 0) overflow-hidden fixed h-screen left-0 w-full object-cover z-[-1] top-0"
        />
      </section>
      <section className='lg:w-1/3 float-right p-10 lg:h-screen bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg text-justify relative z-[-1]' id='Text_area'>
        <div className='my-24'>
          <h1 className='font-bold text-xl text-white'>Lorem ipsum dolor sit amet.</h1>
          <div className='scrollbox my-10'>
            <p className='text-white'>
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br></br>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
        </div>
      </section>
    </div>

  );
}


export default Stories;