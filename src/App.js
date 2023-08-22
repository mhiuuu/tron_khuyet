/* Import the styling */
import './Styling/index.css'
/*Styling for the Hero section*/
import './Styling/Hero_text.css'
import './Styling/Hero.css'

/* Import other components */
import Hero from './Components/Hero';
import Header from './Components/Navbar';
import Quotes from './Components/Quotes';
import TimeStamp from './Components/Timestamp';
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
        {/* The first effect you will see */}
        <section>
          <Hero />
        </section>

        {/* The gallery area */}
        <section>
          <Quotes />
        </section>
        <section>
          <TimeStamp />
        </section>
      </main>
      
    </div>
  );
};

export default App 