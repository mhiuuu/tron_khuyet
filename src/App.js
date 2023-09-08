/*Import for all*/
import Header from './Components/Navbar';
import './Styling/index.css'

/*Styling for the Hero section*/
import './Styling/Hero_text.css'
import './Styling/Hero.css' 

/* For the home section */
import Hero from './Components/Home/Hero';
import Products from './Components/Home/Products';
import Intro from './Components//Home/Intro';
import Sliders from './Components/Home/Sliders';
import QR from './Components/Home/QR';
import Imgs from './Components/Home/Gallery';
import Footer from './Components/Footer';

/* Generate website */
function App() {
  return(
    <div>
      <header className="sticky z-10 top-0">
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <QR />
      </section>
      <section>
        <Sliders />        
      </section>
      <section>
        <Imgs />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App 