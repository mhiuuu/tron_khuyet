/* Import the styling */
import './Styling/index.css'
/*Styling for the Hero section*/
import './Styling/Hero_text.css'
import './Styling/Hero.css'

/* Import other components */
import Hero from './Components/Hero';
import Header from './Components/Navbar';
import Quotes from './Components/Quotes';
/* Import outsource library */


/* Generate website */
function App() {
  return(
    <div>
      {/* The navbar */}
      <header>
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
      </main>
      
    </div>
  );
};

export default App 