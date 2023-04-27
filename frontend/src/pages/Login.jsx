import {React, useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({    
    email:'',
    password:'',

  })
  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  
  const onSubmit = (e) =>{
    e.preventDefault()
  }
  return (
   <>
   <section className='heading'>
    <h1>
      <FaSignInAlt/> Login
    </h1>
    <p>Login and start setting goals</p>
   </section>
   <section className="formdata">
    <form onSubmit={onSubmit}>
            <div className="form-group">
      <input type="email" className="form-control" id='email' name='email' value={email} onChange={onChange} placeholder='Please enter email'/>
      </div>
      <div className="form-group">
      <input type="password" className="form-control" id='password' name='password' value={password} onChange={onChange} placeholder='Please enter password'/>
      </div>
      <div className="form-group">
        <button type="submit" className='btn btn-block'>Submit</button>
      </div>
    </form>
   </section>
   </>
  )
}

export default Login