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
    { src: 'https://verentas.sirv.com/UPPP/DSC07474.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/DSC07814.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/DSC07833.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1290.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1294.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1299.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1305.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1307.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1312.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1316.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1321.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1334.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1336.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1341.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1349.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1350.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1351.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1354.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1355.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1358.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1361.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1362.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1363.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1364.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1365.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1366.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1368.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1371.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1384.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1395.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1398.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1404.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1405.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1407.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1413.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1421.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1425.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1426.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1428.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1430.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1431.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1432.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1435.JPG' },
    /* { src: 'https://verentas.sirv.com/UPPP/IMG_1438.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1441.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1442.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1445.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1446.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1447.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1452.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1456.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_1478.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_2901.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_2903.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_2905.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_2906.JPG' },
    { src: 'https://verentas.sirv.com/UPPP/IMG_2910.JPG' }, */


  ];

  return (
    <div class="columns-2 lg:columns-4 gap-x-4 mx-2.5 my-8 container mx-auto">
      {Assets.map((item) => (
        <Ga img={item.src} />
      ))}
    </div>
  );
};

export default Imgs;
