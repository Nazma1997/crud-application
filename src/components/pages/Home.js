import {React, useState, useEffect} from 'react';
import axios from 'axios';



const Home = () => {
   const [users, setUsers] = useState([]);


   useEffect(() => {
        loadUsers()
   },[]);


   const loadUsers = async() => {
        const result =await axios.get("http://localhost:3001/users");
         setUsers(result.data)
        // console.log(result)
   }

   const deleteUser = async(id) => {
    await axios.delete(`http://localhost:3001/users/${id}`)
    loadUsers()
   }


  return (
    <div className='container py-5'>
        <table className="table border shadow">
  <thead className='bg-dark text-white'>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    

    {
      users.map((user, index) => (
        <tr key={user.id}>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>
          <a href={`/users/${user.id}` } className='btn btn-primary me-2'>View</a>
          <a href={`/users/edit/${user.id}` }className='btn btn-outline-primary me-2 '>Edit</a>
          <button className='btn btn-danger ' onClick={() => deleteUser(user.id)}>Delete</button>
        </td>
      </tr>
      ))
    }

  
  </tbody>
</table>
     
    </div>
  )
}

export default Home
