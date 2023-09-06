const Ga = ({ img }) => {
  const randomHeight = Math.floor(Math.random() * 500) + 300;
  return (
    <div class="inline-block relative my-[4px]">
      <img src={img} className="w-full rounded-xl" style={{ height: randomHeight, objectFit: 'cover' }} alt=""/>
    </div>
  );
};


const Imgs = () => {
  const Assets = [
    { src: 'https://verentas.sirv.com/UPPP/DSC07830.JPG' },
  ];

  return (
    <div> 
      <div class="h-1 w-full bg-black mx-2.5"></div>
      <div class="columns-2 lg:columns-4 gap-x-4 mx-2.5 my-8 container mx-auto">
        {Assets.map((item) => (
          <Ga img={item.src} />
        ))}
    </div>
    </div>
    
  );
};

export default Imgs;
