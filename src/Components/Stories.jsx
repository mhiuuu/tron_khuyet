import React from 'react';

// Define a component for the header
function Stories() {
  return (
    <div>
      <header>
        {/* First container */}
        <div className="container container_solid">
          <div className="title_wrapper">
            <h1>The Great Outdoors</h1>
          </div>
        </div>

        {/* Second container */}
        <div className="container container_image" aria-hidden="true">
          <div className="title_wrapper">
            <h1>The Great Outdoors</h1>
          </div>
        </div>
      </header>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </section>
    </div>
  );
}


export default Stories;