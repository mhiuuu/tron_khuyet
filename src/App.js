/* Import the styling */
import './Styling/index.css'
import './Styling/Hero_text.css'
import './Styling/Hero.css'

/* Import other components */
import Hero from './Components/Hero';
import Header from './Components/Navbar';

/* Import outsource library */


/* Generate website */
function App() {
  return(
    <div>
      {/* The navbar */}
      <section>
        <Header />
      </section> 

      {/* The first effect you will see */}
      <section>
        <Hero />
      </section>

      {/* The gallery area */}
      <section>

      </section>
    </div>
  );
};

export default App 