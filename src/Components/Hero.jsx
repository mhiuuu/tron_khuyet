const Hero = () => {
  return (
    <div>
      {/* <div className="h-screen flex flex-col justify-center items-center top-0 bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('https://img.freepik.com/free-photo/portrait-little-homeless-boy_169016-3722.jpg')] h-3/6 bg-center bg-no-repeat bg-cover relative z-[-1]">
        <h1 className="mx-auto mt-32 cool">
          <span data-text="Trọn" className="mr-4">Trọn </span>
          <span data-text="Khuyết " className="mr-4">Khuyết </span>
        </h1>
      </div> */}
      <section className="h-[200vh]">
        <div className="hero_container container_solid top-0 bg-white">
          <div className="title_wrapper">
            <h1 className="bg-[100vw_auto] ">The Great Outdoors</h1>
          </div>
        </div>
        <div className="hero_container bg-[url(https://images.unsplash.com/photo-1575058752200-a9d6c0f41945?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ)] bg-[100vw_auto] bg-center bg-fixed top-[100vh]" aria-hidden="true">
          <div className="title_wrapper">
            <h1 className="text-white">The Great Outdoors</h1>
          </div>
        </div>
      </section>

      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </section>
  </div>
  );
};

export default Hero;