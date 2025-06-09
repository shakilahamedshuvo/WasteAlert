
import React from 'react'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from 'react'
import axios from 'axios';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const handleChange = (e) =>{
    setOtp(e)
    console.log(e)
  }
  const notyf = new Notyf({
      duration: 2000,
       position: {
      x: 'right',
      y: 'top',
    },
    });
  const handleSubmit = async (e)  => {
    const email = localStorage.getItem("email");
    const otpData = {
      email: email,
      otp:otp,
    }
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/otp-verify`, otpData);
      if (response.status === 200) {
        notyf.success("otp verified");
      } else {
        notyf.error("otp not verified");
      }
    } catch (error) {
      notyf.error("otp not verified");
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen md:px-2 lg:px-2 '>
      <div className='flex shadown-xl p-8 justify-center flex-col md:px-2 lg:px-2 '>
        <h2 className='mb-2 text-3xl font-bold'>OTP VERIFICATION</h2>
        <h4 className='mb-4'>Please enter the OTP sent to your registerd email to compelete verification</h4>
        <div>
          <MuiOtpInput
            value={otp}
            onChange={handleChange}
             sx={{
    '& input': {
      px: 0, // Reduces horizontal padding (px = padding-left and padding-right)
      py: 2, // Optional: reduce vertical padding too
      mx: 0.5, // Optional: control space between input boxes
    }
  }}
          />
        </div>
        <button className='mt-6 bg-black text-white py-4 rounded-xl font-bold' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Otp