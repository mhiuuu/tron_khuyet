const Gallery = () => {
  return (
    <div class="masonry">
      <div class="grid">
        <img src="https://source.unsplash.com/random/1"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/2"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/3"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/4"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/5"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/6"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/7"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/8"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/9"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/10"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/11"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/12"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/19"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/20"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/13"/>
      </div> <div class="grid">
        <img src="https://source.unsplash.com/random/14"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/15"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/16"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/17"/>
      </div>
      <div class="grid">
        <img src="https://source.unsplash.com/random/18"/>
      </div>
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