const Hero = () => {
  return (
    <div>
      <section className="h-[190vh]">
        <div className="hero_container container_solid top-0 bg-[url(https://verentas.sirv.com/bg.png)] bg-no-repeat bg-cover backdrop-blur-[0.5px]">
          {/* The white box where the text animation oocur */}
          <div className="title_wrapper h-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <h1 className="cool">
              <span data-text="Trọn" className="mr-4">Trọn </span>
              <span data-text="Khuyết " className="mr-4">Khuyết </span>
            </h1>
          </div>
        </div>
        {/* Where the magic happens */}
        <div className="hero_container bg-[url(https://verentas.sirv.com/IMG_1453.JPG)] bg-[100vw_auto] bg-center bg-fixed bg-cover top-[100vh] bg-no-repeat" aria-hidden="true">
          <div className="title_wrapper h-full bg-orange-200/20 backdrop-blur-[0.5px] flex items-center justify-center">
            <h1 className="text-black/90 font-bold cool">Trọn Khuyết</h1>
          </div>
        </div>
      </section> 
  </div>
  );
};

export default Hero;