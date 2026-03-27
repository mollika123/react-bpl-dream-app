import React from 'react';
import FooterImg from '../../assets/logo-footer.png';
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal w-12/12 mx-auto bg-[#000] text-white p-15 pt-50 pb-30 relative z-0 mt-[-30px] ">
      
      <div className='container mx-auto'>
           <div className='flex justify-center items-center mb-10 mx-auto '>
        <img src={FooterImg} alt="" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 space-y-5'>
        <nav>
    <h6 className="footer-title">About us</h6>
 <p>We are a passionate team dedicated <br /> to providing the best services <br /> to our customers.</p>
  </nav>
  <nav>
          <ol>
             <li className="footer-title">Quick Links</li>
   <li> <a className="link link-hover">Home</a></li>
   <li> <a className="link link-hover">Service</a></li>
   <li> <a className="link link-hover">About</a></li>
   <li><a className="link link-hover">Contact</a></li> 
   </ol>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="w-full">
              <label>Subscribe to our newsletter for the latest updates.</label>
              
      <div className="join rounded-xl mt-4">
       <div className='join'> <input
          type="text"
          placeholder="Enter your Email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item bg-gradient-to-r from-purple-600 to-yellow-400">Subscribe</button></div>
      </div>
    </fieldset>
  </form></div>
   </div>
</footer>
  );
};

export default Footer;