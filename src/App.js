/* Import the styling */
import './Styling/Hero.css'

/* Import other components */
import Hero from './Components/Hero';
import Header from './Components/Navbar';
import Stories from './Components/Stories';

/* Import outsource library */
import { Slide } from "react-awesome-reveal";


function App() {
  return(
    <div>
      <section>
        <Header />
      </section>
      {/* <section>
        <Slide direction='up' duration={1000}>
          <Hero />
        </Slide>
      </section> */}
      <section>
        <Stories />
      </section>
    </div>
  );
};

export default App 