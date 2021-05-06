import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Header from "./Header";
import validate from './validate'

function Registration() {

    const history = useHistory()

    const [error, setError] = useState({})

    const [data, setData] = useState({
        fname:"",
        lname:"",
        email:"",
        pssword:"",
        cpasssword:""
    })

    const changeHandler= (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const clickHandler = () => {

      setError(validate(data))
    
      alert("Registration successful")
      history.push('./Login')
    }

    const backHandler = () => {
        history.push("/Login")
    }

  return (
    <div>

      <Header/>
      <form onSubmit={clickHandler}  className= "form">

        <input
          type="text"
          name="fname"
          value={data.fname}
          placeholder="First Name"
          onChange={changeHandler} 
          className="input" /><br/>
          {console.log(data.fname)}
          {/* {errors.fname && <p>{errors.fname}</p>} */}

        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={changeHandler} 
          className="input" /><br/>

        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={changeHandler}
          className="input" /><br/>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          className="input"  /><br/>

        <input
          type="password"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={changeHandler}
          className="input"  /><br/>

        <button type="submit" > Register </button>
        <button onClick={backHandler}> Back </button>
        
        

      </form>
    </div>
  );
}

export default Registration;
