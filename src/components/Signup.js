import React from "react";

const Signup = (props) => {
    
    const { change, values } = props;
  
    const onChange = (evt) => {
      const { name, value } = evt.target;
      change(name, value);
      console.log(name, value);
    };
  
    const onSubmit = evt => {
    evt.preventDefault()
    console.log("submitted Form!", );
  }
  
    return (
      <div>
        <form onSubmit={onSubmit}>
        <input 
          type="text" 
          name="username" 
          value={values.username} 
          onChange={onChange}
          placeholder="Username" 
          />
        <input 
        type="tel" 
        name="phone" 
        value={values.phone} 
        onChange={onChange}
        placeholder="Phone Number" 
        />
  
        <input 
          type="password" 
          name="password" 
          value={values.password} 
          onChange={onChange}
          placeholder="Password" 
          />
  
        <button>Sign Up</button>
        </form>
      </div>
    );
  }

export default Signup;