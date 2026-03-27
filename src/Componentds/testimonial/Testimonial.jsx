import React from 'react';
import bg_shadow from '../../assets/bg-shadow.png';
const Testimonial = () => {
  return (
    <div className='container mx-auto  '>
      <div className=''> <div className='flex flex-col bg-white items-center justify-center w-10/12 mx-auto space-y-4 shadow-xl/30  pt-20 pb-20 relative z-10 mb-[-150px]'
        style={{
          backgroundImage: `url(${bg_shadow})
        `,
          backgroundSize: 'cover',
          backgroundPosition:'center'
      }}>
         <h2 className='text-2xl font-bold'>Subscribe to our Newsletter</h2>
      <p className='font-semibold text-xl'>Get the latest updates and news right in your inbox!</p>
       <div className='join gap-2 rounded-xl'> <input
          type="text"
          placeholder="Enter you Email"
          className="input rounded-2xl input-bordered join-item" />
      <button className='btn btn-primary rounded-xl'>Subscribe</button></div></div>
     </div>
    </div>
 
  );
};

export default Testimonial;