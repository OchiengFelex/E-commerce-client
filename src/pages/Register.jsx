

import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function Register() {
  const navigate = useNavigate();

  // Define the validation schema using yup
  const schema = yup.object().shape({
    Username: yup.string().required('Use any preferred username'),
    Email: yup.string().email().required('Email is required'),
    Password: yup.string().min(4).max(10).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match'),
  });

  // Initialize react-hook-form with the validation schema
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  // Handle form submission
  const handleSubmission = (data) => {
    Axios.post('http://localhost:8081/auth/register', data)
    .then((response) => {
   response.data.message && alert(response.data.message);
   alert("User crested Successful")
   reset();
   console.log(response.data) 
    navigate('/login')

    })
    .catch(({response}) => {
        alert(response.data.error);
    })
  };

  return (
    <div className='main-register'>
      <div className='register-content1'>
        <div className="init">
          <h1 style={{ fontFamily: 'monospace', fontWeight: 'bolder' }}>Create an account with us</h1>
        </div><br /><br />

        <div className="form-register">
          <h2 style={{ fontFamily: 'monospace', fontWeight: 'bolder', color: "#f9004d", paddingLeft: "25px" }}>Sign up now and unlock exclusive access!</h2>

          <form onSubmit={handleSubmit(handleSubmission)}>

            <label>Username</label><br /><br />
            <input type='text' placeholder='Username' {...register('Username')} /><br />
            <p>{errors.Username?.message}</p><br />

            <label>Email</label><br /><br />
            <input type='email' placeholder='Email' {...register('Email')} /><br />
            <p>{errors.Email?.message}</p><br />

            <label>Password</label><br /><br />
            <input type='password' placeholder='Password' {...register('Password')} /><br />
            <p>{errors.Password?.message}</p><br />

            <label>Confirm Password</label><br /><br />
            <input type="password" placeholder='Confirm Password' {...register('confirmPassword')} /><br />
            <p>{errors.confirmPassword?.message}</p><br />

            <input type='submit' value='Sign up' style={{ width: '50%', color: 'white', backgroundColor: '#950740', fontWeight: 'bolder', padding: "10px" }} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
