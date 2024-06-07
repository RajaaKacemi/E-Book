function Values() {
  return (
    <section className="text-center py-20 px-10 bg-beige sm:py-20">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl lg:text-6xl sm:text-4xl font-bold text-Brown">Our Values</h1>
      </div>
      <div className="flex flex-col justify-around text-Brown gap-6 sm:flex-row">
        <div className="flex flex-col items-center text-center p-4">
          <i className="fas fa-bolt text-6xl text-orange mb-8 transform transition-transform duration-300 ease-in-out hover:scale-125"></i>
          <h3 className="text-xl font-bold mb-2">Quick Delivery</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <i className="fas fa-shield-alt text-6xl text-orange mb-8 transform transition-transform duration-300 ease-in-out hover:scale-125"></i>
          <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <i className="fas fa-medal text-6xl text-orange mb-8 transform transition-transform duration-300 ease-in-out hover:scale-125"></i>
          <h3 className="text-xl font-bold mb-2">Best Quality</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <i className="fas fa-thumbs-up text-6xl text-orange mb-8 transform transition-transform duration-300 ease-in-out hover:scale-125"></i>
          <h3 className="text-xl font-bold mb-2">Return Guarantee</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </section>
  );
}

export default Values;
