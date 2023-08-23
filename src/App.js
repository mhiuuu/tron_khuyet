/* Import the styling */
import './Styling/index.css'

/*Styling for the Hero section*/
import './Styling/About/Hero_text.css'
import './Styling/About/Hero.css' 

/*Styling for the home*/
import './Styling/Home/Greeting.css'


import Header from './Components/Navbar';
/* For the home section */
import Greeting from './Components/Home/Greeting';

/* Import other components */
import Hero from './Components/About/Hero';

import Quotes from './Components/About/Quotes';
import TimeStamp from './Components/About/Timestamp';
/* Import outsource library */


/* Generate website */
function App() {
  return(
    <div>
      {/* The navbar */}
      <header className="sticky z-10 top-0">
        <Header />
      </header> 

      <main>
        <section>
          <Greeting />
        </section>
      </main>
      {/* <main>
        <section>
          <Hero />
        </section>

        <section>
          <Quotes />
        </section>
        <section>
          <TimeStamp />
        </section>
      </main> */}
      
    </div>
  );
};

export default App 