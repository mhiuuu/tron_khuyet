const QR = () => {
  return (
    <div className="container mx-auto h-fit md:h-[50vh] flex flex-col md:flex-row border-2 rounded-2xl my-16">
      <div className="basis-1/2 my-auto mx-auto">
        <h1>Vì  lí do an toàn, chúng  mình sẽ không nhận đặt hộ hay nhận hỗ trợ hộ trung tâm, nếu bạn quan tâm thì có thể ủng hộ trung tâm qua mã QR sau hoặc liên hệ lại với chúng mình</h1>
        <p className="mt-8"></p>
      </div>

      <div className="my-auto mx-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png" className="w-9/12 md:w-full mx-auto" alt=""></img>
      </div>
    </div>
  );
}


export default QR;