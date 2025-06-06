import React from 'react';
import startpage_img from '../src/assets/image/startpage_img.jpg';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from "react-icons/fa";
const Start = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <p className="text-[#528D4B] font-semibold text-4xl mt-10 mb-6 font-[Nunito]">
        Welcome to WasteAlert
      </p>
      <img
        src={startpage_img}
        className="w-80 h-64  mb-8"
        alt="Start Page"
      />
      <p className="lg:mx-16 text-center text-2xl mb-6 px-4t font-[Roboto Condensed] font-semibold">
        Make your neighborhood cleaner by reporting waste problems. We handle your complaints directly or coordinate with the waste management team to ensure they’re resolved.
      </p>
      <div className='flex flex-row w-full'>
        <Link className="flex items-center gap-2 px-8 py-2 bg-[#528D4B] text-white rounded hover:bg-[#406c39] transition">
          Start Reporting <FaArrowCircleRight />
        </Link>
      </div>
    </div>
  );
};

export default Start;
