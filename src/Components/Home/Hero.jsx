const Hero = () => {
  return (
    <div>
      <section className="h-[190vh]">
        <div className="hero_container container_solid top-0 bg-white">
          {/* The white box where the text animation oocur */}
          <div className="title_wrapper">
            <h1 className="cool">
              <span data-text="Tron" className="mr-4">Tron </span>
              <span data-text="Khuyet " className="mr-4">Khuyet </span>
            </h1>
          </div>
        </div>
        {/* Where the magic happens */}
        <div className="hero_container bg-[url(https://images.unsplash.com/photo-1575058752200-a9d6c0f41945?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)] bg-[100vw_auto] bg-center bg-fixed bg-cover top-[100vh] bg-no-repeat" aria-hidden="true">
          <div className="title_wrapper">
            <h1 className="text-white cool">Tron Khuyet</h1>
          </div>
        </div>
      </section> 
  </div>
  );
};

export default Hero;