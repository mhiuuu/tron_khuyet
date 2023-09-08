const Ga = ({ img }) => {
  const randomHeight = Math.floor(Math.random() * 500) + 400;
  return (
    <div class="inline-block relative my-[4px]">
      <img src={img} className="rounded-xl" style={{ height: randomHeight, objectFit: 'cover', width: '100%' }} alt=""/>
    </div>
  );
};

const Products = () => {
  const Assets = [
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05797.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05799.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05873.JPG'},
    {src:'https://verentas.sirv.com/UPPD/Copy%20of%20DSC05880.JPG'},
    {src:'https://verentas.sirv.com/UPPD/DSC07505.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1281.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1373.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1381.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1459.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1465.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1469.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1470.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1473.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_1477.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_2916.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_3015.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_3025.JPG'},
    {src:'https://verentas.sirv.com/UPPD/IMG_3036.JPG'},
  ];

  return (
    <section>
      <div className="text-black py-8">
        <div className="container  flex flex-col items-start md:flex-row my-12 md:my-24">
          {/* The static part */}
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/2 mt-2 md:mt-12 px-24 lg:px-48">
            <p className="text-4xl md:text-5xl mb-2">Các sản phẩm</p>
            <p className="text-black my-12">
              Đã bao giờ bạn nghĩ rằng những cậu bé, cô bé mang trong mình những khiếm khuyết trên cơ thể lại có thể tạo ra những sản phẩm tinh sảo đến vậy?
            </p>
          </div>

          <div>
            <div class="columns-1 lg:columns-2 gap-x-4 my-0 mx-4 md:mx-auto">
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