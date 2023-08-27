/*Import for all*/
import Header from './Components/Navbar';
import './Styling/index.css'

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

import Carousel from './Components/Home/Carousel';


/* Generate website */
function App() {
  return(
    <div>
      <Carousel />
    </div>
  );
};

export default App 