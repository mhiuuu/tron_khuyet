const QR = () => {
  return (
    <div className="container mx-auto h-fit md:h-[50vh] flex flex-col md:flex-row border-2 rounded-2xl my-16">
      <div className="basis-1/2 my-auto mx-auto">
        <h1>For some safety reason, we won't sell these products, however, you can donate to this charity or contact with them through</h1>
        <p className="mt-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta iste commodi molestiae, quo ad quam rem, iure voluptatum aliquid magni consequatur eos officia odit voluptatem, itaque necessitatibus architecto quod nostrum?</p>
      </div>

      <div className="my-auto mx-auto">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Rickrolling_QR_code.png" className="w-9/12 md:w-full mx-auto"></img>
      </div>
    </div>
  );
}


export default QR;