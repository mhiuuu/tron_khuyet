const Ga = ({ img }) => {
  const randomHeight = Math.floor(Math.random() * 500) + 300;
  return (
    <div class="inline-block relative my-[4px]">
      <img src={img} className="w-full rounded-xl" style={{ height: randomHeight, objectFit: 'cover' }} />
    </div>
  );
};

const Products = () => {
  const Assets = [
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05797.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05799.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05873.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05880.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05890.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07481.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07502.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07503.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07504.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07505.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07506.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07636.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1281.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1283.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1373.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1381.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1459.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1465.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1469.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1470.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1472.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1473.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1475.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1477.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_2912.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_2913.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_2916.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_2925.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_2926.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_3015.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_3025.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_3036.JPG'},
  ];

  return (
    <section>
      <div className="text-black py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* The static part */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/2 mt-2 md:mt-12 px-16 lg:px-36">
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Working Process of Fest</p>
            <p className="text-sm md:text-base text-black mb-12">
              Bỷe bủh bủuh lmao hihi haha fỏk u kikiki 
            </p>
            <a href="#"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-black hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
              Explore Now</a>
          </div>

          <div>
            <div class="columns-2 lg:columns-3 gap-x-4 mx-2.5 my-0;">
              {Assets.map((item) => (
                <Ga img={item.src} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Products;