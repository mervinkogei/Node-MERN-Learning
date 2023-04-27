import {React, useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    password2:''

  })
  const {name, email, password, password2} = formData

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
      <FaUser/> Register
    </h1>
    <p>Please create an account</p>
   </section>
   <section className="formdata">
    <form onSubmit={onSubmit}>
      <div className="form-group">
      <input type="text" className="form-control" id='name' name='name' value={name} onChange={onChange} placeholder='Please enter name'/>
      </div>
      <div className="form-group">
      <input type="email" className="form-control" id='email' name='email' value={email} onChange={onChange} placeholder='Please enter email'/>
      </div>
      <div className="form-group">
      <input type="password" className="form-control" id='password' name='password' value={password} onChange={onChange} placeholder='Please enter password'/>
      </div>
      <div className="form-group">
      <input type="password" className="form-control" id='password2' name='password2' value={password2} onChange={onChange} placeholder='Please enter confirm password'/>
      </div>
      <div className="form-group">
        <button type="submit" className='btn btn-block'>Submit</button>
      </div>
    </form>
   </section>
   </>
  )
}

export default Register