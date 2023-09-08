const Services = () => {
    return (
        <div id="services" class="row">
    <h1 class="h2 pb-4">Key Services</h1>
{/* <div class="col-sm col-md-4 px-5"> */}
    <div  data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" class="col-sm col-md-4 px-5">
      <i class="bi bi-check-circle"></i>
      <h2>Quality-Check</h2>
      <p class="h5">Quality check all milk for adulteration every single day</p>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" class="col-sm col-md-4 px-5">
      {/* <div class="col-sm col-md-4 px-5"> */}
      <i class="bi bi-clock"></i>
      <h2>Delivery By 7:30 A.M</h2>
      <p class="h5">Your dairy requirements are at your door before 7:30 am</p>
    </div>
    {/* <div class="col-sm col-md-4 px-5"> */}
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" class="col-sm col-md- px-5">
      <i class="bi bi-pencil-square"></i>
      <h2>Modify Order</h2>
      <p class="h5">Modify your dairy requirements till 12 midnight for next day delivery </p>
    </div>
    <div class="row">
        {/* <div class="col-sm col-md-4 px-5"> */}
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" class="col-sm col-md-4 px-5">
        <h2>Our Expereince</h2>
        <span class="h2"><i class="bi bi-stars"></i>&nbsp;&nbsp;&nbsp;<span id="counter1">1234</span></span>
      </div>
      {/* <div class="col-sm col-md-4 px-5"> */}
      <div data-aos="fade-up" data-aos-duration="2500" data-aos-easing="ease-in-out" class="col-sm col-md-4 px-5">
        <h2>Happy Customers</h2>
        <span class="h2"><i class="bi bi-people-fill"></i>&nbsp;&nbsp;&nbsp;<span id="counter2">1234</span></span>
      </div>
      {/* <div class="col-sm col-md-4 px-5"> */}
      <div data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" class="col-sm col-md- px-5">
        <h2>Sales</h2>
        <span class="h2"><i class="bi bi-arrow-up-circle-fill"></i>&nbsp;&nbsp;&nbsp;<span id="counter3">1234</span></span>
      </div>

    </div>
  </div>
    )
    }
export default Services;
    