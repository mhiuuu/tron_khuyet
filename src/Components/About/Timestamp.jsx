const Product = ({num, season, event, desc }) => {  
  /* If the num is event, make it stay on the right */
  if(num%2==0) {
    return(
      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full">
        <div className="order-1 w-5/12"></div>
        <div className="order-1 w-5/12 px-1 py-4 text-right">
          <p className="mb-3 text-base text-yellow-300">{season}</p>
          <h4 className="mb-3 font-bold text-lg md:text-2xl">{event}</h4>
          <p className="text-sm md:text-base leading-snug text-black text-opacity-100">{desc}</p>
        </div>
      </div>
    );
  } 
  return (
    <div className="mb-8 flex justify-between items-center w-full">
      <div className="order-1 w-5/12"></div>
      <div className="order-1  w-5/12 px-1 py-4">
        <p className="mb-3 text-base text-yellow-300">{season}</p>
        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">{event}</h4>
        <p className="text-sm md:text-base leading-snug text-black text-opacity-100">{desc}</p>
      </div>
    </div> 
  );
};

const TimeStamp = () => {

  const stamps = [
  {
    id: 1,
    num: 1,
    season: '10 May, 2021',
    event: 'Result Declaration',
    desc: "The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be"
  },
  {
    id: 2,
    num: 2,
    season: 'Mua 1',
    event: 'Trung thu',
    desc: "Tang 1 dong tien"
  },
  {
    id: 2,
    num: 3,
    season: 'Mua 1',
    event: 'Trung thu',
    desc: "Tang 1 dong tien"
  },
  {
    id: 2,
    num: 4,
    season: 'Mua 1',
    event: 'Trung thu',
    desc: "Tang 1 dong tien"
  },
  {
    id: 2,
    num: 5,
    season: 'Mua 1',
    event: 'Trung thu',
    desc: "Tang 1 dong tien"
  },
];

  return (
    <section>
      <div className="text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* The static part */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="ml-2 text-yellow-300 uppercase tracking-loose">Working Process</p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p className="text-sm md:text-base text-black mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
              fest.
            </p>
            <a href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-black hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>

          {/* The timeline section */}
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2-2 border-yellow-555 absolute h-full border rounded-[1%] border-2 border-solid border-[#FFC100] right-2/4"></div>
                <div className="border-2-2 border-yellow-555 absolute h-full border rounded-[1%] border-2 border-solid border-[#FFC100] left-2/4"></div>
                {stamps.map((product) => (
                  <Product
                    key={product.id}
                    num={product.num}
                    season={product.season}
                    event={product.event}
                    desc={product.desc}
                  />
                ))}                
              </div>
              <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
            </div>
          </div>

        </div>
      </div>
    </section> 
  );
}

export default TimeStamp