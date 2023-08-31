const Gallery = () => {
  return (
    <div class="columns-2 lg:columns-3 gap-x-4 mx-2.5 my-0;">
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/1" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/2" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/3" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/4" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/5" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/6" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/7" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/8" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/9" className="w-full rounded-[5px]" />
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/10" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/11" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/12" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/19" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/20" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/13" className="w-full rounded-[5px]"/>
      </div> <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/14" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/15" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/16" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/17" className="w-full rounded-[5px]"/>
      </div>
      <div class="inline-block relative mb-4;">
        <img src="https://source.unsplash.com/random/18" className="w-full rounded-[5px]"/>
      </div>
    </div>
  );
}

const Stories = () => {
  return (
    <section>
      <div className="text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* The static part */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/2 mt-2 md:mt-12 px-16 lg:px-36">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p className="text-sm md:text-base text-black mb-12">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
              fest.
            </p>
            <a href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-black hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>

          <div>
            <Gallery />            
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Stories;