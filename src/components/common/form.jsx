import React, { Component } from 'react'
import Joi, { errors } from 'joi-browser';
import { ToastContainer, toast } from "react-toastify";

class Form extends Component {
  state = { 
    data: {},
    errors:{}
  } 
      validate = () => {
    const options = { abortEarly: false };
    const result  = Joi.validate(this.state.data, this.schema, options);
  //we can implement object destrusting  {error}
      console.log(result)
   
       if (!result.error) return null;

      
      ////map array to an boject 
    const errors = {};
      for( let item of result.error.details)

        errors[item.path[0]] = item.message
   return errors;
  };

    handelSubmit = async (e) => {
    e.preventDefault()
    const errors = this.validate();
    this.setState({ error: errors || {} })
    console.log(errors)


    ///show error toast message
    if (errors) {
      for (var property in errors) {
        if (errors.hasOwnProperty(property)) {
          toast.error(errors[property]);
        }
      }
  }
      this.doSubmit()
   
    
  }

   handleChange = ({ currentTarget:input }) => {
     const data = { ...this.state.data };

    data[input.name] = input.value;
 
     this.setState({ data });
     console.log(this.state.data);
  };

  renderButton(lable) {

       return <button  className="btn btn-primary btn-block mb-4">{lable}</button>

    
  }

  renderInput=(name,label,type)=> {
    const {data,errors}=this.state
    return (<div>
      <input type={type} id={name}
                  className="form-control"
                 name={name}
                  autoComplete="off"
                   value={data[name]}
          placeholder={label}
          error={errors[name]}
        onChange={this.handleChange} />
      <label className="form-label" for={name}>{ label}</label>
</div>
)

  }}

 
export default Form;