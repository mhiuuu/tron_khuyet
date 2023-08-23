import React, { useState, useEffect } from 'react';

const WordFlick = () => {
  const words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'];
  const [part, setPart] = useState('');
  let i = 0;
  let offset = 0;
  const len = words.length;
  let forwards = true;
  let skip_count = 0;
  const skip_delay = 15;
  const speed = 70;

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
      <div className="overflow-hidden absolute z-[-1] h-screen w-full  top-0 bg-blue-200">
        <div className="absolute block w-full -translate-y-2/4 m-auto top-2/4 justify-center items-center">
          <h1 className='text-center'>Day khong chi la mot su kien</h1>
        </div>
      </div>
    </section> 
  );
}

export default Greeting