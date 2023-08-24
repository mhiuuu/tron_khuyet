/* Import the styling */
import './Styling/index.css'

/*Import for all*/
import Header from './Components/Navbar';

/*Styling for the Hero section*/
import './Styling/About/Hero_text.css'
import './Styling/About/Hero.css' 

/*Styling for the home*/
import './Styling/Home/Greeting.css'

/* For the home section */
import Greeting from './Components/Home/Greeting';
import Stories from './Components/Home/Stories';
import Products from './Components/Home/Product';

/* Import other components */
import Hero from './Components/About/Hero';
import Quotes from './Components/About/Quotes';
import TimeStamp from './Components/About/Timestamp';

/* Import outsource library */
import Gallery from './check';
import './style.css'
/* Generate website */
function App() {
  return(
    <div>
      {/* The navbar */}
      {/* <header className="sticky z-10 top-0">
        <Header />
      </header>  */}
      <Gallery/>
      {/* <main>
        <section>
          <Greeting />
        </section>
        <section>
          <Stories />
        </section>
        <section>
          <Products />
        </section>
      </main>
      <main>
        <section>
          <Hero />
        </section>

        <section>
          <Quotes />
        </section>
        <section>
          <TimeStamp />
        </section>
      </main>  */}
    </div>
  );
};

export default App 