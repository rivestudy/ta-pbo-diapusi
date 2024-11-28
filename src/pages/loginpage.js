// src/pages/loginpage.js
import React from 'react';
import bgimage from '../images/loginbg.jpg';

const LoginPage = () => {


  return (
    <div>
      <img className='absolute h-[100vh] bg-red-200' alt='bg' src={bgimage} />
      <div id='wrapper_login' className="absolute z-10  left-[55%]  py-[30vh] w-[30vw]">
        <h1 className='mb-8 text-5xl font-bold text-center font-inter'> ARCHIVER </h1>
        <h1 className='text-xl font-light text-center'> Silahkan masuk ke akun anda! </h1>
        <div>
          <form className='grid grid-cols-1'>
            <label for='username'>
            <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-700 after:ml-0.5 font-inter">Username</span> 
                <input type="username" id= "username" placeholder="Username.." className="px-3 py-4 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#566861] focus:border-[#566861]  mb-4"></input>
            </label>
            <label for='password'>
            <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-700 after:ml-0.5 font-inter">Password</span>
                <input type="password" id= "password" placeholder="Password.." className="px-3 py-4 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#566861]  focus:border-[#566861]  "></input>
            </label>
            
            <button type='submit' className='my-4 py-2 px-2 bg-[#566861] rounded-lg font-inter text-white '>Masuk</button>
          </form>
          <form>
            <button>Lupa kata sandi?</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;
