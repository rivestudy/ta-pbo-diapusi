// src/pages/loginpage.js
import React from 'react';
import bgimage from '../images/loginbg.jpg';

const LoginPage = () => {


  return (
    // wrapper untuk si form login terpisah sma background jangan diubah struktur elementnnya, uabh classname saja
    <div>
      <img className='absolute h-[100vh]' alt='bg' src={bgimage} />
      <div id='wrapper_login' className="absolute z-10  left-[55%] px-[10vw] py-[40vh]">
        <h1 className='mb-8 text-5xl font-bold text-center'> Archiver </h1>
        <h1 className='text-xl font-light text-center'> Silahkan masuk ke akun anda! </h1>
        <div>
          <form className='grid grid-cols-1'>
            <label for='username'>Nama Pengguna</label>
            <input name='username' type='text' placeholder='Username'></input>
            <label for='password'>Kata Sandi</label>
            <input name='password' type='password' placeholder='Password'></input>
            <button type='submit'>Masuk</button>
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
