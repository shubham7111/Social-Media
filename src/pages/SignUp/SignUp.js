import React, { useCallback, useContext, useState } from 'react'
import AuthContext, { AuthKey } from '../../context/AuthContext'
import { toast } from "react-toastify";
import { NavLink, useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
  const {signUpHandler} = useContext(AuthKey)
    const [userSignUpDetails, setUserSignUpDetails] =  useState({firstname : "", lastname: "", email : "", username : "", password : "", confirmpassword: "" })

  const setInputHandler = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    
    setUserSignUpDetails((userSignUpDetails) => ( {...userSignUpDetails, [e.target.name] : e.target.value}))
}
  const submitHandler = () => {
    
    const {firstname, lastname, email,username, password, confirmpassword} = userSignUpDetails
if (firstname.length <=0 || lastname.length <=0 || email.length <=0 || username.length <=0 || password.length <=0 || confirmpassword.length <=0){
toast("Please fill the details")
}
else{
console.log('signupElse case', userSignUpDetails)
signUpHandler(userSignUpDetails)

}
}

  const prevendata = (e) => {
    e.preventDefault()
}
  return (
    <div className='signup-container'>
    <form className = 'signup-form' onSubmit={prevendata}>
        <div>
            <label className='label'>First Name : <input className='signup-input' required placeholder="First Name" type = "text" name = "firstname" onChange={setInputHandler} /> </label>
            <label className='label'> Last Name : <input className='signup-input' required placeholder="Last Name" type =  "text" name = "lastname" onChange={setInputHandler} /></label>
            <label className='label'> E-Mail : <input className='signup-input' required placeholder="E-mail" type =  "text" name = "email" onChange={setInputHandler} /></label>
            <label className='label'> Username : <input className='signup-input' required placeholder="Username" type =  "text" name = "username" onChange={setInputHandler} /></label>
            <label className='label'> Password : <input className='signup-input' required placeholder="Password" type =  "password" name = "password" onChange={setInputHandler} /></label>
            <label className='label'> Confirm Password : <input className='signup-input' required placeholder="Confirm Password" type =  "password" name = "confirmpassword" onChange={setInputHandler} /></label>
        </div>
        <button type="submit" id="submitBtn" className="submitBtn" onClick = {submitHandler}>submit</button>
        <div className='form-group'>
    <NavLink to = "/login" className="link"> Already have an account? Login here </NavLink>
    </div>
        </form>
        </div>
  )
}

export default SignUp
