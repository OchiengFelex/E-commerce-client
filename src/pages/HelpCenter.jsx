import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import './HelpCenter.css'

function HelpCenter() {

    

    // Define the validation schema using yup
    const schema = yup.object().shape({
         Name: yup.string().required('Name is required'),
         email: yup.string().email().required('Email is required'),
        Query: yup.string().max(250) .required(),
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
      });

        const QuerySubmit = (data) => {
        console.log(data);
        reset();
        };

  return (
    <div className="main-help">

<div className="help-content1">
    <div className='image2'>
        <img src="./help2.png"/>
    </div>
<div className='descrp'>
      <h1>Frequently Asked Questions</h1><br/>
     
        <h3>How do I create an account?</h3>
        <p>To create an account, click on the "Register page" button <br/>
        at the top-right corner of the website. Fill in the required <br/>
        information and follow the prompts to complete the registration process.</p>
      <br/>
      
        <h3>What payment methods are accepted?</h3>
        <p>We accept various payment methods, including credit/debit cards,<br/>
         PayPal, and online banking transfers. During the checkout process,<br/>
          you can choose the payment option that suits you best.</p>
      <br/>
      
        <h3>What is the return policy?</h3>
        <p>We offer a hassle-free return policy. If you are not satisfied <br/>
        with your purchase, you can initiate a return within 30 days of delivery.<br/>
     Please refer to our & Refunds page for detailed instructions on how to proceed.</p>
      

    </div>
</div>

        <div className="cont2">

                <div className='cont2-main'>     
            <h1>Help Center</h1>
             <p>How can we assist you? Fill out the form<br/>
             below to submit your query.</p>

                 <form onSubmit={handleSubmit(QuerySubmit)} >
                 <label>
                 Name:
                <input type="text" placeholder='Name' {...register('Name')} />
                 <p>{errors.Name?.message}</p><br />
                 </label><br />
                 
                 <label>
                 Email:
                <input type="email" placeholder='email' {...register('email')} />
                 <p>{errors.email?.message}</p><br />
                 </label>
                  <br />


                 <label>
                 Query:
                 <textarea placeholder='Query' {...register('Query')} />
                 <p>{errors.Query?.message}</p>
                 </label><br />

                 
                 <button type="submit">Submit</button>
                    </form>

                    </div>

                 <div className='help-image'>
            <img src="./help3.webp"/>
                </div>
         </div>
  
        </div>
  )
}

export default HelpCenter