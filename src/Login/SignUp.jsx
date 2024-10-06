import { useEffect, useState } from 'react'
import "../output.css"
import "../Login/SignIn.css"
import email from "../assets/email.png"
import password from "../assets/password.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import axios from 'axios';




function SignUp() {    
 const [formData, setFormData] = useState({
        email: '',
        password: '',
        fname: '',
        lname: '',
        phone: '',
        street: '',
        city: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error

        try {
            const response = await axios.post('http://localhost:21108/api/v1/signup', formData);
            if (response.data.success) {
                // Handle successful signup (e.g., redirect to Home)
                navigate('/Home');
            }
        } catch (err) {
            // Check if the error response exists
            if (err.response) {
                // Access the message if it exists
                setError(err.response.data.message || "An error occurred. Please try again.");
            } else {
                // Handle case where error.response is undefined
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };



  
  
  return (
  <div className='w-screen h-screen  flex flex-col justify-center items-center bg-gray-100'>
    <div className='w-[100%] h-[50%] flex'>
        <div className='w-[50%] h-[100%] flex items-center justify-center'>
            <div className='w-[55%] h-[100%] flex items-center justify-end pt-36'>
                <h1 className='font-extrabold text-9xl text-violet-500'>Guys</h1>
            </div>
        </div>
         <div className='w-[50%] h-[100%]'></div>
    </div>
    
    <div className='w-[100%] h-[50%] flex'>
        <div className='w-[50%] h-[100%]'></div>
         <div className='w-[50%] h-[100%] flex items-center justify-center'>
            <div className='w-[58%] h-[100%] flex items-center justify-start pb-36'>
                <h1 className='font-extrabold text-9xl text-blue-500'>Gals</h1>
            </div>
        </div>
    </div>

    <div className='w-[100%] h-[100%] bg-brown-200 absolute flex items-center justify-center'>
        {error && <p className="error">{error}</p>}
        <form className='w-[24%] h-[75%] bg-white border rounded-lg flex flex-col'  onSubmit={handleSubmit}>
           
            <div className='w-[100%] h-[20%] p-5 pl-8 flex items-center justify-center flex-col'>
                <div className='w-[100%] h-[40%] flex items-end z-0'>
                    <h1 className='text-3xl font-thin text-gray-500'>Sign Up</h1>
                </div>
                <div className='w-[100%] h-[40%]flex items-start'>
                    <h1 className='text-xl font-thin text-gray-500'>it's quick and easy.</h1>
                </div>
            </div>

            <div className='w-[100%] h-[0.2%] bg-gray-400'></div>
           
            <div className='w-[100%] h-[9%] flex'>  
                <div className='w-[50%] h-[100%] flex items-center justify-center'>
                    <input 
                     className='w-[92%] h-[65%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                     type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} required 
                    >
                    </input>
                </div>
                <div className='w-[50%] h-[100%] flex items-center justify-center'>
                    <input 
                     className='w-[92%] h-[65%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                     type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} required
                    >
                    </input>
                </div>
            </div>

            <div className='w-[100] h-[5.8%] flex items-center justify-center'> 
                    <input 
                     className='w-[96%] h-[100%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                     type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required 
                    >
                    </input>
            </div>
            <div className='w-[100] h-[7.8%] flex items-center justify-center'> 
                    <input 
                     className='w-[96%] h-[74%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                     type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required
                    >
                    </input>
            </div>
            <div className='w-[100] h-[5.8%] flex items-center justify-center'> 
                    <input 
                     className='w-[96%] h-[100%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                     type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required 
                    >
                    </input>
            </div>
            <div className='w-[100%] h-[4%] pl-3 flex items-end'>
                <h1 className='text-gray-400 text-md'>Address</h1>
            </div>
            <div className='w-[100] h-[5.8%] flex items-center justify-center'> 
                    <div className='w-[50%] h-[100%] flex items-start justify-center'>
                      <input 
                      className='w-[92%] h-[100%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                      type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} required 
                      >
                      </input>
                    </div>   
                    <div className='w-[50%] h-[100%] flex items-start justify-center'>
                      <input 
                      className='w-[92%] h-[100%] bg-gray-100 border border-gray-400 rounded-md pl-3 focus:outline-violet-400'
                      type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required 
                      >
                      </input>
                    </div>   
            </div>
            <div className='w-[100%] h-[7%] flex items-end justify-center'>
                <h5 className='text-xs w-[93%] text-gray-500 m-1'>People who use our service may have uploaded your contact information to Guys & Gals.</h5>    
            </div>
            <div className='w-[100%] h-[6%] flex items-start justify-center'>
                <h5 className='text-xs w-[93%] text-gray-500 m-1'>By clicking Sign Up, you agree to our <span className='text-blue-500'>Terms</span>, <span className='text-blue-500'>Privacy Policy</span> and <span className='text-blue-500'>Cookies Policy</span>.</h5>
            </div>

            <div className='w-[100%] h-[5.8%] flex items-center justify-center'>
                <button className='w-[85%] h-[100%] bg-violet-500 text-white text-lg rounded-md' type="submit">Sign Up</button>
            </div>

            <div className='w-[100%] h-[7%] flex items-end justify-center'>
                <h1 className='text-gray-500 text-lg'>Already have an account?</h1>
            </div>
           
            <div className='w-[100%] h-[5.8%] flex items-center justify-center mt-3'>
               <Link to={'/'} className='w-[85%] h-[100%]'>
                <button className='w-[100%] h-[100%] bg-white border border-violet-400 text-violet-400 text-lg'>Login</button>
               </Link>
            </div>
        
        </form>
       
        <div className='w-[1%] h-[69%]'>
            <div className='w-[100%] h-[13%] bg-pink-300'></div>
            <div className='w-[100%] h-[13%] bg-violet-300'></div>
            <div className='w-[100%] h-[13%] bg-violet-400'></div>
            <div className='w-[100%] h-[13%] bg-violet-500'></div>
        </div>
    </div>
 
 </div>
  )
}

export default SignUp
