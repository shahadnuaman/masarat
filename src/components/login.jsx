import React, { Component } from 'react'
import axios from 'axios'
import Joi from "joi-browser";
import { ToastContainer, toast } from 'react-toastify';
import Form from './common/form';
class Login extends Form {
    state = { 
    data:{
        username: "",
        password: "",
      
    
      },

      errors:{}
  } 

  schema = {
    username: Joi.string().min(3).max(12).required().label("Username"),
    password:Joi.string().min(6).max(12).required()
}



  // async  ---- we can add async when we call backend server 
  doSubmit() {
////we  can call login api
    
    // const resp = await axios.post("api url",
    //   {
    //     Username: this.state.data.username,
    //     Password: this.state.password
    //   })
    ////console.log(resp)
    console.log("clicked")
  }
    render() { 
      return (
            <div className='container' style={{width:"400px",marginTop:"200px",borderRadius:"2px",borderColor:"black"}}>
               <ToastContainer/>
<h1>Login Form</h1>
            <form  onSubmit={this.handelSubmit}>

  
  {this.renderInput("username","Username","text")}
  {this.renderInput("password","Password","password")}
  {this.renderButton("Login")}

  <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
                </form>
                </div>);
    }
}
 
export default Login;