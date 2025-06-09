import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import axios from 'axios'
const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRepassword] = useState('');
  const navigate = useNavigate();
  const notyf = new Notyf({
    duration: 2000,
     position: {
    x: 'right',
    y: 'top',
  },
  });
 const handleSubmit = async (e) => {
  e.preventDefault();

  const errors = [];

  if (firstName.length < 3 || lastName.length < 3) {
    errors.push('First Name and Last Name should be at least 3 characters long');
  }

  if (phoneNumber.length < 11) {
    errors.push('Phone Number should be exactly 11 digits long');
  }
  if(password.length < 6){
    errors.push('Password must be at least 6 characters long')
  }
  if(password != Repassword){
    errors.push('Passwords do not match');
  }

  if (errors.length > 0) {
    errors.forEach((err) => notyf.error(err));
    return; 
  }
  const newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password:password,
  }
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, newUser);
    if (response.status === 200 || response.status === 201) {
      const data = response.data
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.user.email);
      
      navigate('/otp-verification');
      notyf.success('Sign Up Completed');
      
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      notyf.error(error.response.data.message);
    } else {
      notyf.error('An error occurred during signup.');
    }
  }
};

  
  return (
    <div className='px-8 flex flex-col h-screen w-full justify-between '>
      <div>
        <h3 className='text-3xl font-bold text-black pt-8 '>Sign Up</h3>
        <p className='text-md text-gray-800 pt-2'>Create an account to get started</p>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <h2 className="mt-4 font-[Gabarito] text-[#1E293B] leading-[22px] text-[20px] font-semibold">What's Your Name?</h2>
          <div className='flex flex-row gap-4 '>
            <input
              type="text"
              placeholder='First Name'
              className='w-full mt-4 p-2 border  border-[#9E9E9E] rounded-md focus:outline-black'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Last Name'
              className='w-full mt-4 p-2 border border-[#9E9E9E] rounded-md focus:outline-black'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <h2 className="mt-4 font-[Gabarito] text-[#1E293B] leading-[22px] text-[20px] font-semibold">What's Your Email?</h2>
          <input
            type="email"
            placeholder='Email'
            className='w-full mt-4 p-2 border border-[#9E9E9E] rounded-md focus:outline-black pl-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h2 className="mt-4 font-[Gabarito] text-[#1E293B] leading-[22px] text-[20px] font-semibold">What's Your Phone Number?</h2>
          <input
            type="number"
            placeholder='Phone Number'
            className='w-full mt-4 p-2 border border-[#9E9E9E] rounded-md focus:outline-black'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <h2 className="mt-4 font-[Gabarito] text-[#1E293B] leading-[22px] text-[20px] font-semibold">Enter The Password</h2>
          <input
            type="password"
            placeholder='Password'
            className='w-full mt-4 p-2 border border-[#9E9E9E] rounded-md focus:outline-black'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h2 className="mt-4 font-[Gabarito] text-[#1E293B] leading-[22px] text-[20px] font-semibold">Re-Enter The Password</h2>
          <input
            type="password"
            placeholder='Re-Enter Password'
            className='w-full mt-4 p-2 border border-[#9E9E9E] rounded-md focus:outline-black'
            value={Repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />

          <div className='flex items-center justify-center w-full mt-4'>
            <input className='bg-black text-white w-full py-4 rounded-xl' type="submit" value="Sign Up" />
          </div>
        </form>
       
      </div>
       <div className='flex items-end mb-10 justify-end leading-3'>
          <p>Alredy Have a Account? </p>
          <Link to="/login" className='text-border'> Sign In
          </Link>
        </div>
    </div>
  ); }
export default Signup;

