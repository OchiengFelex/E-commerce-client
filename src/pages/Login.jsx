
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import Axios from 'axios';

import './Login.css'




function Login() {



    const navigate = useNavigate();
    const schema = yup.object().shape({
        Username: yup.string().required('Username is required'),
        Password: yup.string().min(4).max(100).required('Password is required'),
      });

   
    
      const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });



        const Submission = (data) => {
            Axios.post("http://localhost:8081/auth/login", data)
            .then((response) => {
           response.data.message && alert(response.data.message);
           alert("User Logged in  Successful")
           reset();
           console.log(response.data) 
            navigate('/collections')
        
            })
            .catch(({response}) => {
                alert(response.data.error);
            })
        };
      


  return (
    <div className='main-login'>
     
 
        
    <div className="contact-one">
        <h1>NYAKUWA MALL</h1><br/>
     <h4>Experience the greatest shopping time </h4>
        </div>
    
     <div className="form-login">
    <h1  style={{ color: '#950740'}}>Login</h1><br /><br/>
    <form onSubmit={handleSubmit(Submission)}>
    <label>User Name</label><br /><br />
          <input type='text' placeholder='username' {...register('Username')} /><br />
          <p>{errors.Username?.message}</p><br/>

          <label>Enter Password</label><br /><br />
          <input type='password' placeholder='Password' {...register('Password')} /><br />
          <p>{errors.Password?.message}</p><br/>

          <input type='submit' value='Log in ' style={{ width: '50%', color: 'white', backgroundColor: '#950740', fontWeight: 'bolder' }} />

         </form>
             </div>
   
        </div>


    )
}

export default Login