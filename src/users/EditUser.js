import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate =  useNavigate();

    const {id} = useParams()

    const [admin,setUser]=useState({
        name:"",
        username:"",
        email:""

    })

    const{name,username,email}=admin

    const onInputChange=(e)=>{
        setUser({...admin, [e.target.name]:e.target.value})

    };

    useEffect(() => {
        loadUser();
    },[]);


    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/${id}`,admin)
        navigate("/");

    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/admin/${id}`);
        setUser(result.data)
    };

  return (
    
      <div className='container'>
        <div className='row'> 
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-cdenter m-4'>Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>

                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                        </label> 
                        <input 
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        >

                        </input>

                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>
                        User Name
                        </label> 
                        <input 
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your username'
                        name='username'
                        value={username}
                        onChange={(e)=>onInputChange(e)}>
                            
                        </input>

                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        E-mail
                        </label> 
                        <input 
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your email address'
                        name='email'
                        value={email}
                        onChange={(e)=>onInputChange(e)}>
                            
                        </input>

                </div>
<button type='submit' className='btn btn-outline-primary'>Submit</button>
<Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>

</form>


            </div>

        </div>
      </div>
  
  )
}
