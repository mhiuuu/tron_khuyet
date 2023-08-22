const Quotes = () => {
  return (
    <div className="container h-[60vh] mx-auto flex justify-center">
      {/* First block */}
      <section class="flex flex-col md:flex-row mx-10 lg:mx-20">
        {/* The first quote */}
        <div class="flex-auto blockquote-wrapper flex mr-10">
          <div class="blockquote relative w-11/12 self-center">
            <h1 className="">
              Intuitive design happens when current knowledge is the same as the target knowledge.
            </h1>
            <h4>—Jared Spool<br /><em>Web Site Usability: A Designer's Guide</em></h4>
          </div>
        </div>
        {/* Their image */}
        <div class="mt-20 md mt-0">
          <img src="https://images.unsplash.com/photo-1570136329541-b6a395bc3b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" className="mx-auto w-96 h-96 object-cover"/>
        </div>
      </section>
    </div>
  );
}

export default Quotes;