import {useState} from 'react';

const Form_file =()=>{
    const [values, setValues] = useState({
        firstName : "",
        lastName : "",
        email : "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid , setValid] = useState(false);
    
    const firstNameValueHandler = (event) => {
        setValues({...values, firstName: event.target.value});
    };

    const lastNameValueHandler = (event) => {
        setValues({...values, lastName : event.target.value});
    };

    const emailValueHandler = (event) =>{
         setValues({...values, email : event.target.value});
    };

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true);
        
    }

    return  <form  onSubmit={onSubmitHandler}>
    {submitted && valid ?<div>Registered Successfully!!!!</div> : null } 
    <input 
    type="text" 
    value={values.firstName} 
    placeholder="first name" 
    onChange={firstNameValueHandler}/>
    {submitted && !values.firstName ? <span>please enter your firstname</span> : null}
    <input 
    type="text"
     value={values.lastName} 
      placeholder="last name"
      onChange = {lastNameValueHandler}/>
      {submitted && !values.lastName ? <span>please enter your lastname</span> : null}
    <input 
    type="email" 
    value={values.email}  
    placeholder="email"
    onChange={emailValueHandler}/>
    {submitted && !values.email ? <span>please enter you email</span> : null }
    <button type="submit">Register</button>
    </form>
};

export default Form_file;
