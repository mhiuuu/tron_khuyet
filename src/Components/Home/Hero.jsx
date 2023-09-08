const Hero = () => {
  return (
    <div>
      <section className="h-[190vh]">
        <div className="hero_container container_solid top-0 bg-white bg-no-repeat bg-cover backdrop-filter backdrop-blur">
          {/* The white box where the text animation oocur */}
          <div className="title_wrapper">
            <h1 className="cool">
              <span data-text="Trọn" className="mr-4">Trọn </span>
              <span data-text="Khuyết " className="mr-4">Khuyết </span>
            </h1>
          </div>
        </div>
        {/* Where the magic happens */}
        <div className="hero_container bg-[url(https://verentas.sirv.com/IMG_1453.JPG)] bg-[100vw_auto] bg-center bg-fixed bg-cover top-[100vh] bg-no-repeat" aria-hidden="true">
          <div className="title_wrapper">
            <h1 className="text-white cool">Trọn Khuyết</h1>
          </div>
        </div>
      </section> 
  </div>
  );
};

export default Hero;