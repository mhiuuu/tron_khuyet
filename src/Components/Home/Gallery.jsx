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
    { src: 'https://verentas.sirv.com/UPPP/DSC07814.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/DSC05804.jpg' },
    { src: 'https://verentas.sirv.com/UPPP/DSC05806.jpg' },
    { src: 'https://verentas.sirv.com/UPPP/DSC05924.jpg' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1276.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1299.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1308.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1334.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1340.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1363.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1366.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1372.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1398.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1403.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1435.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1438.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9822.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9828.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9829.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9831.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9832.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9833.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9836.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9837.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9838.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9839.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9840.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9841.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9844.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9846.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9849.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_9850.jpg' },
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
