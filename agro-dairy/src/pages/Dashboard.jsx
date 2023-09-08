import AboutUs from '../components/Aboutus';
import Products from '../components/Products';
import Services from '../components/Services';
import Contact from '../components/Contact';
const Dashboard = () => {
return (
<>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
          
          <div class="carousel-item active"> 
            <img height="540px" src="https://img.freepik.com/free-vector/farm-milk-poster_1284-74094.jpg?w=826&t=st=1685778873~exp=1685779473~hmac=26bd2a3e31c9a63817ea7f33dfa512042e3758adc0e3a52b7421e87164d162fb" class="d-block w-100" alt="..." />      
        </div>       
           <div class="carousel-item">
            <img height="540px" src="https://img.freepik.com/premium-vector/3d-fresh-milk-ad-template_317442-1798.jpg?w=740" class="d-block w-100" alt="..." />   
                 {/*  <img height="540px" src="https://img.freepik.com/premium-vector/3d-fresh-milk-ad-template_317442-1799.jpg?w=740" class="d-block w-100" alt="...">  --> */}

          </div>
          <div class="carousel-item">
             <img height="540px" src="https://img.freepik.com/free-vector/milk-cheese-horizontal-banners_1284-11026.jpg?w=740&t=st=1685778752~exp=1685779352~hmac=a27021f5eabcb060fe83081aece6d8c60d20de0e7ff46b886471e116580bd0b4" class="d-block w-100" alt="..." />       
                    </div>    
                           <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">next</span>
        </button>
        </div>
        </div>
        <AboutUs />
        <Products />
        <Services />
        <Contact />
</>
);
}
export default Dashboard;



    