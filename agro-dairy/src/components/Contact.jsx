const Contact = () => {
    const date=new Date();
    const yr=date.getFullYear();

    return (
<footer>
    <div className="row" id="contact">
      <div className="col-sm col-md-1">
        
        
      </div>
      <div className="col-sm col-md-3">
        <ul className="text-center">
        <li className="h4">Contact Us</li>
        <li  className="h5"><i className="h4 bi bi-envelope"></i>&nbsp;agrodairy@gmail.com</li>
        <li  className="h5"><i className="h4 bi bi-telephone"></i>&nbsp;9876543210</li>
        </ul></div>
      <div className="col-sm col-md-3">
        <ul className="text-center">
          <li className="h4">Quick Links</li>
          <li className="h5"><a href="#aboutus">About Us</a></li>
          <li className="h5"><a href="#products">Products</a></li>
          <li className="h5"><a href="#services">Services</a></li>
          <li className="h5"><a href="#contact">Contact Us</a></li>

        </ul>
      </div>
      <div className="col-sm col-md-4">
        <h3 className="h4 text-center">Get in Touch</h3>
        <form>
          <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter Your Name" />            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter your mail address" />
     </div>
        <div className="form-group">
          <textarea className="form-control" aria-label="With textarea" rows="3" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn btn-success btn-block">
          <span className="h4">Send</span><i className="h4 p-3 bi bi-send-fill"></i>
        </button>
            </form>

      </div>
      <div className="col-sm col-md-1"></div>

    </div>
    <div className="copy"><h3 className="h4 text-center">&copy;&nbsp;copyright {yr}</h3>
      </div>
    </footer>
    )
    }
    export default Contact;
    