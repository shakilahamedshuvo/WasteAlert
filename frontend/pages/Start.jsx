import React from 'react';

import { Link } from 'react-router-dom';


import start_bg from '../src/assets/image/start_bg.png'
const Start = () => {
  return (
    <div className='bg-[#141F17] w-full h-screen flex flex-col justify-between'>
        <div className='w-full h-[40%]'
          style={{
            backgroundImage: `url(${start_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
        <div className=''>
            <h1 className='mt-4 text-white font-["Spline Sans"] font-bold text-center text-[28px]'>WasteAlert</h1>
            <p className='mt-2 text-white font-["Spline Sans"] text-center text-[20px] px-1'>Report issues, track collections, and stay informed about waste management in your community.</p>
         
        </div>
         <div className=' flex flex-col mt-6 items-center justify-center gap-3 mb-6'>
              <Link to='/signup' className='text-[#141F17] font-bold bg-green-300 px-auto w-4/5 py-4 font-[16px] rounded-[24px] text-center'>Sign Up</Link>
               <Link to='/signup' className='text-white font-bold bg-[#294033] px-auto w-4/5 py-4 text-[16px] rounded-[24px] text-center'>Login</Link>

           </div>
    </div>
  );
};

export default Start;

