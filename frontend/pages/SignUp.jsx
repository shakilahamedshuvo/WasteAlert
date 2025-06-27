import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRepassword] = useState('');
  const [loading, setLoading] = useState(false); // loading state

  const navigate = useNavigate();
  const notyf = new Notyf({ duration: 2000, position: { x: 'right', y: 'top' } });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];

    if (firstName.length < 3 || lastName.length < 3) {
      errors.push('First Name and Last Name should be at least 3 characters long');
    }
    if (phoneNumber.length < 11) {
      errors.push('Phone Number should be exactly 11 digits long');
    }
    if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }
    if (password !== Repassword) {
      errors.push('Passwords do not match');
    }

    if (errors.length > 0) {
      errors.forEach((err) => notyf.error(err));
      return;
    }

    const newUser = { firstName, lastName, email, phoneNumber, password };
    setLoading(true); // Start loader

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/signup`, newUser);
      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);
        navigate('/otp-verification');
        notyf.success('Sign Up Completed');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        notyf.error(error.response.data.message);
      } else {
        notyf.error('An error occurred during signup.');
      }
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className='px-8 bg-[#141F17] flex flex-col h-screen'>
      <div>
        <h1 className='text-white text-[24px] font-bold mt-[72px]'>Create an account</h1>
      </div>
      <div>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <div className='w-full gap-4 flex mt-4'>
            <input type="text" name="firstName" placeholder="First Name" className='w-1/2 p-[15px] border rounded-[12px] text-[#9CBFA8] font-[16px] border-[#3D5C4A] bg-[#1F2E24]' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" name="lastName" placeholder="Last Name" className='w-1/2 p-[15px] border rounded-[12px] text-[#9CBFA8] font-[16px] border-[#3D5C4A] bg-[#1F2E24]' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <input type="email" name="email" placeholder="Email" className='w-full p-[15px] border rounded-[12px] text-[#9CBFA8] font-[16px] border-[#3D5C4A] bg-[#1F2E24]' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="number" name="phoneNumber" placeholder="Phone Number" className='w-full p-[15px] border rounded-[12px] text-[#9CBFA8] font-[16px] border-[#3D5C4A] bg-[#1F2E24]' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <input type="password" name="password" placeholder="Password" className='w-full p-[15px] border rounded-[12px] text-[#9CBFA8] font-[16px] border-[#3D5C4A] bg-[#1F2E24]' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" name="Repassword" placeholder="Re-enter Password" className='w-full p-[15px] border rounded-[12px] text-[#9CBFA8] font-[16px] border-[#3D5C4A] bg-[#1F2E24]' value={Repassword} onChange={(e) => setRepassword(e.target.value)} />
          
          <button type="submit" className='bg-[#94E0B0] py-[15px] border rounded-[24px] text-black font-bold flex items-center justify-center
         
          '>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
