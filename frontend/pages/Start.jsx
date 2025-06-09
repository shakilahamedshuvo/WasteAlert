import React from 'react';
import startpage_img from '../src/assets/image/startpage_img.jpg';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
import Wave from 'react-wavify'
const Start = () => {
  return (
    <div className='flex flex-col h-screen items-center justify-between '>
      <p className='text-3xl font-bold text-[#528e4b] mt-10 font-[Nunito] letter-spacing-6'>
         Welcome to WasteAlert
      </p>
      <img
        src={startpage_img}
        className="w-80 h-64  mb-8"
        alt="Start Page"
      />
      <p className='text-2xl text-center font-semibold mx-1 text-[] font-[Roboto Condensed] lg:max-w-1/2 md:p-4' >
        Make your neighborhood cleaner by reporting waste problems. We handle your complaints directly or coordinate with the waste management team to ensure they’re resolved.
      </p>
      <div className='flex flex-col gap-4 justify-between items-center w-full px-10 mt-10 text-white'>
        <Link
          to='/signup'
          className='bg-[black] px-16 py-4 rounded-xl w-full text-center text-xl  lg:max-w-5xl max-w-2xl text-[Inter] font-bold'
        >
          Sign Up   
        </Link>
        <Link
          to='/login'
          className='border  border-[black] px-16 py-4 rounded-xl w-full text-[black] text-center text-xl font-[Inter] lg:max-w-5xl max-w-2xl font-bold'
        >
          Login
        </Link>
      </div>
      <Wave fill='#528e4b'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 50,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
      />
    </div>
  );
};

export default Start;
