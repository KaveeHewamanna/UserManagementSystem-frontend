import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);  // Added dependency array to prevent infinite loop

    // Load users
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    // Delete users
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/admin/${id}`);
        loadUsers();
    };

    return (
        <div className='container'>
            {/* Centered "User List" heading */}
            <h1 className="text-center my-4">User List</h1>
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
                            users.map((admin, index) => (
                                <tr key={admin.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{admin.name}</td>
                                    <td>{admin.username}</td>
                                    <td>{admin.email}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewuser/${admin.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-2' to={`/edituser/${admin.id}`} >Edit</Link>
                                        <button className='btn btn-danger mx-2' onClick={() => deleteUser(admin.id)} >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <footer style={{
                backgroundColor: '#070F2B',
                color: '#fff',
                textAlign: 'center',
                padding: '10px 0',
                fontSize: '0.8rem',
                position: 'fixed',
                left: '0',
                bottom: '0',
                width: '100%',
                marginTop: '30px',
                zIndex: '999'
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        {/* About Us Section */}
                        <div className="col-md-4 text-center mb-3">
                            <h5 style={{ fontSize: '1rem' }}>About Us</h5>
                            <p style={{ fontSize: '0.8rem' }}>Providing an efficient and secure user management system.</p>
                        </div>

                        {/* Quick Links Section */}
                        <div className="col-md-4 text-center mb-3">
                            <h5 style={{ fontSize: '1rem' }}>Quick Links</h5>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                <li>
                                    <Link to="/privacy-policy" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.8rem' }} 
                                        onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'} 
                                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.8rem' }} 
                                        onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'} 
                                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" style={{ textDecoration: 'none', color: '#fff', fontSize: '0.8rem' }} 
                                        onMouseOver={(e) => e.currentTarget.style.color = '#ffcc00'} 
                                        onMouseOut={(e) => e.currentTarget.style.color = '#fff'}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us Section */}
                        <div className="col-md-4 text-center mb-3">
                            <h5 style={{ fontSize: '1rem' }}>Follow Us</h5>
                            <p style={{ fontSize: '0.8rem' }}>Stay connected with us on social media!</p>
                            <div>
                                <a href="https://www.facebook.com" style={{ marginRight: '10px', color: '#fff' }} target="_blank" rel="noopener noreferrer">
                                    <FaFacebook size={20} />
                                </a>
                                <a href="https://www.twitter.com" style={{ marginRight: '10px', color: '#fff' }} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://www.instagram.com" style={{ color: '#fff' }} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr style={{ borderColor: '#fff', margin: '10px 0' }} />
                    <p style={{ fontSize: '0.8rem' }}>&copy; 2025 User Dashboard. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
