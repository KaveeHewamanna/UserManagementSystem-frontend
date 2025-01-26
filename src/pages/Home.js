import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);

    const {id} = useParams()


    useEffect(()=>{
        loadUsers();

    });

    // Load users

    const loadUsers = async() =>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);

    };

    //Delete users
    const deleteUser = async(id)=>{
      await axios.delete(`http://localhost:8080/admin/${id}`)
      loadUsers()
    }




  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
        users.map((admin,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{admin.name}</td>
            <td>{admin.username}</td>
            <td>{admin.email}</td>
            <td>
            <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${admin.id}`}
                  >
                    View
                  </Link>                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${admin.id}`} >Edit</Link>      
                <button className='btn btn-danger mx-2' onClick={() => deleteUser(admin.id)} >Delete</button>      
     
            </td>
          </tr>
            
        ))
    }

  </tbody>
</table>
        </div>
      
    </div>
  )
}
