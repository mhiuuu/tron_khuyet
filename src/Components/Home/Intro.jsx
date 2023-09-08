import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const DisplayInfo = ({img, heading, stories}) => {
  return (
    <section> 
      <div className="h-[102vh] flex flex-col md:flex-row-reverse bg-no-repeat bg-cover bg-center w-screen panel" style={{backgroundImage: `url(${img})`}}>
        <div className="basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 flex flex-col md:flex-row h-[102vh]">
          <div className="basis-1/3 text-white text-xl mt-24 md:my-auto mx-16 md:mx-24">
            <h1 className="text-3xl lg:text-5xl font-bold">{heading}</h1>
            <p className="text-md md:text-2lg text-justify mt-4 md:mt-12">{stories}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Intro = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".intro_slide",
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.05
          },
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=3500"
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const telling = [
    {
      img: 'https://verentas.sirv.com/IMG_9877.jpg', 
      heading: 'HỌA SĨ CỦA NHỮNG GIẤC MƠ',
      stories: 'Khai phá niềm đam mê vẽ vời vào năm 18 tuổi, bạn Bình An, một người khiếm thính, luôn đặt mọi tâm huyết trên trang giấy. Để nâng tầm khả năng ký họa của mình, An luôn theo dõi và cập nhật những bộ phim, tạp chí, cuốn truyện hằng ngày. Dù cho bản thân gặp khiếm khuyết, ngọn lửa đam mê vẫn bừng cháy, thôi thúc An nhiệt huyết trên con đường nghệ thuật.',
    },
    {
      img: 'https://verentas.sirv.com/1.jpg', 
      heading: 'GIA ĐÌNH - NƠI NUNG NẤU TÌNH YÊU ',
      stories: 'Khi được hỏi về “Ước mơ lớn nhất của em là gì?”, Trí trả lời rằng “Em ước mình có bố mẹ, có gia đình”. Tựa như vầng trăng, không phải lúc nào cũng tròn trịa, những mảnh khuyết ấy dường như là nỗi đau, mất mát và là nỗi thổn thức không nguôi. Tuy vậy, gia đình đối với Trí là cội nguồn, là động lực để em vượt lên nghịch cảnh, theo đuổi đam mê.',
    },
    {
      img: 'https://verentas.sirv.com/2.jpg', 
      heading: 'MỈM CƯỜI TRƯỚC NGHỊCH CẢNH',
      stories: 'Một cuộc đời nhỏ với những khiếm khuyết trên cơ thể, việc giao tiếp đối với em là vô cùng khó khăn. Tuy nhiên, tình thần lạc quan đã khiến em mỉm cười với nghịch cảnh, cũng bởi vậy mà tên em là Cười. Chỉ cần có niềm tin vào cuộc sống, nuôi dưỡng hy vọng, may mắn sẽ đến sưởi ấm những trái tim đổ vỡ, xoa dịu và chữa lành. ',
    },
    /*  {
      img: 'https://verentas.sirv.com/IMG_8139.JPG', 
      heading: 'MỈM CƯỜI TRƯỚC NGHỊCH CẢNH',
      stories: 'Một cuộc đời nhỏ với những khiếm khuyết trên cơ thể, việc giao tiếp đối với em là vô cùng khó khăn. Tuy nhiên, tình thần lạc quan đã khiến em mỉm cười với nghịch cảnh, cũng bởi vậy mà tên em là Cười. Chỉ cần có niềm tin vào cuộc sống, nuôi dưỡng hy vọng, may mắn sẽ đến sưởi ấm những trái tim đổ vỡ, xoa dịu và chữa lành. ',
    }, */
  ]

  return (
    <div className="flex flex-nowrwap overflow-auto intro_slide">
      {telling.map((item) => {
        return (
          <DisplayInfo 
            img={item.img}
            heading={item.heading}
            stories={item.stories}
          />
        )
      })}
    </div>
  );
};

export default Intro;