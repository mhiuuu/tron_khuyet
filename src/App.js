import './Styling/Hero.css'
import './Styling/Stories.css'
import Hero from './Components/Hero';
import Header from './Components/Navbar';
import Stories from './Components/Stories';

function App() {
  return(
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Stories />
      </section>
      {/*<section className='Top'>
        <Hero />
      </section> */}     
    </div>
  );
};

export default App 