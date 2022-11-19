import {React, useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';


const EditUser = () => {

  const history = useNavigate()
  const {id} = useParams()
  const [user, setUser]= useState({
    name:'',
    email:'',
    phone: '',
    website: ''
  });

  const {name, email, phone, website} = user;

  const inputChange = e => {
        setUser({...user, [e.target.name] : e.target.value})
        // console.log(e.target.value)
        
  }

  useEffect(() => {
    loadUser()
  },[])


  const onSubmit = async(e) => {
    e.preventDefault()

    await axios.put(`http://localhost:3001/users/${id}`, user)
    history.push('/')


  }
  
   const loadUser = async() => {
    const result = await axios.get(`http://localhost:3001/users/${id}`)

    setUser(result.data)
   }
  return (
   <div>
     <a href='/' className='btn btn-outline-primary mx-2 my-5'>Back To Home</a>

   <form onSubmit={onSubmit}>
   <div className='container border shadow pb-5 my-5'>
       <h1 className='text-center my-5'>Update {name} ?</h1>
       <div className="form-floating mb-3">
         <input type="text" className="form-control" id="floatingInput" name="name" value={name} onChange={inputChange}/>
         <label htmlFor="floatingInput">User Name</label>
       </div>
      <div  div className="form-floating my-3">
       <input type="email" className="form-control" id="floatingPassword" name="email" value={email}  onChange={inputChange}/>
       <label htmlFor="floatingPassword">Email</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" value={phone}name="phone"onChange={inputChange}/>
       <label htmlFor="floatingPassword">Phone</label>
      </div>
      <div  div className="form-floating my-3">
       <input type="text" className="form-control" id="floatingPassword" value={website} name="website" onChange={inputChange}/>
       <label htmlFor="floatingPassword">Website</label>
      </div>
     
      <button type='submit' className='m-5 btn btn-success'>Submit</button>
    </div>
   </form>

    
   </div>
  )
}

export default EditUser
