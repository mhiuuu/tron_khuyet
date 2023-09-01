import React, { useState, useEffect } from 'react';
import Carousel from '../Home/Reveal';
const WordFlick = () => {
  const words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'];
  const [part, setPart] = useState('');
  let i = 0;
  let offset = 0;
  const len = words.length;
  let forwards = true;
  let skip_count = 0;
  const skip_delay = 15;
  const speed = 200;

  useEffect(() => {
    setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count === skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      setPart(words[i].substr(0, offset));
      if (skip_count === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
    }, speed);
  }, []);

  return (
    <div className="word">{part}</div>
  );
};

const Greeting = () => {
  return (
    <section className="h-[100vh]">
      <div className="overflow-hidden absolute z-[-1] h-screen w-full bg-blue-200 flex flex-col md:flex-row">
        <div className="w-1/3 m-auto">
          <h1 className='text-center text-3xl'>Day khong chi la mot su kien <span> <WordFlick /> </span> </h1>
        </div>
        
      </div>
    </section>
  );
}

export default Greeting