import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom'
import {Context} from '../../components/userContext/Context';
import {useContext} from 'react'
import './AdminLogin.css'


function AdminLogin() {

    const {user, dispatch} = useContext(Context)
  

    const navigate = useNavigate();
      const schema= yup.object().shape({
        AdminName: yup.string().required('AdminName is required'),
        Password: yup.string().min(4).max(100).required('Password is required'),
        ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match'),
      });
    
      const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });

        const AdminSubmission = (data) => {
            console.log(data);
                if (data){
                    dispatch({type: "LOGIN_SUCCESS", payload:data})
                    alert("Logged in successfully");
                    console.log(data);
                     reset();
                 alert('Admin Login Successful');
                 navigate('/Admin');
        } else {
            dispatch({type: "LOGIN_FAILURE"})
            alert("Login failed");
                  
                }
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
          <input type='text' placeholder='Admin name' {...register('AdminName')} /><br />
          <p>{errors.AdminName?.message}</p><br/>

          <label>Enter Password</label><br /><br />
          <input type='password' placeholder='Password' {...register('Password')} /><br />
          <p>{errors.Password?.message}</p><br/>

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