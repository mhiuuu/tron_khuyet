/* Import the styling */
import './Styling/index.css'
import './Styling/Hero_text.css'

/* Import other components */
import Hero from './Components/Hero';
import Header from './Components/Navbar';

/* Import outsource library */


/* Generate website */
function App() {
  return(
    <div>
      <section>
        <Header />
      </section> 
      <section>
        <Hero />
      </section>
    </div>
  );
};

export default App 