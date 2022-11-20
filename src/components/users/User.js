import {React, useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

const User = () => {

  
  const {id} = useParams()
  const [user, setUser]= useState({
    name:'',
    email:'',
    phone: '',
    website: ''
  });

  const {name, email, phone, website} = user;

  
  useEffect(() => {
    loadUser()
  },[])



  const loadUser = async() => {
    const result = await axios.get(`http://localhost:3001/users/${id}`)

    setUser(result.data)
   }


  return (
    <div className='m-5'>
      <h3>All data of a User</h3>
      <div className='border shadow my-5 p-2'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
      </div>


    </div>
  )
}

export default User
