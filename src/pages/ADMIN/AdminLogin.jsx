import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import './AdminLogin.css'
import Axios from 'axios';
import { AdminContext } from '../../components/userContext/Context';
import { useContext } from 'react';


function AdminLogin() {

    const { admin, dispatch } = useContext(AdminContext);

    const navigate = useNavigate();
      const schema= yup.object().shape({
        admin_name: yup.string().required('AdminName is required'),
        admin_password: yup.string().min(4).max(100).required('Password is required'),
        ConfirmPassword: yup.string().oneOf([yup.ref('admin_password'), null], 'Passwords must match'),
      });
    
      const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

        const AdminSubmission = (data) => {
            Axios.post("http://localhost:8081/auth/admin/login", data)
                .then((response) => {
                    if (data.token) {
                        navigate('/admin')
                    }  
                    dispatch({ type: "LOGIN_SUCCESS", payload: response.data }); 
               response.data.message && alert(response.data.message);
               alert("Admin Login Successful")
               reset();
               console.log(response.data) 
                navigate('/admin')
            
                })
                .catch(({response}) => {
                    alert(response.data.error);
                })
        };


                  
                   
                  
             
                
      

  return (
    
    <div className='main-Admin'>
     
 
        
    <div className="contact-one">
        <h1>NYAKUWA MALL</h1><br/>
     <h4>Explicitly For Admin Use </h4>
        </div>

     <div className="form-admin">
    <h1  style={{ color: '#950740'}}>Admin Login</h1><br /><br/>
    <form onSubmit={handleSubmit(AdminSubmission)}>
    <label>Admin Name</label><br /><br />
          <input type='text' placeholder='Admin name' {...register('admin_name')} /><br />
          <p>{errors.admin_name?.message}</p><br/>

          <label>Enter Password</label><br /><br />
          <input type='password' placeholder='Password' {...register('admin_password')} /><br />
          <p>{errors.admin_password?.message}</p><br/>

          <label>Confirm Password</label><br/><br/>
            <input type='password' placeholder='Confirm Password' {...register('ConfirmPassword')} /><br />
            <p>{errors.ConfirmPassword?.message}</p><br/>


          <input type='submit' value='Admin Login ' style={{ width: '50%', color: 'white', backgroundColor: '#950740', fontWeight: 'bolder' }} />

    </form>
     </div>
   
    </div>


  )
}


export default AdminLogin