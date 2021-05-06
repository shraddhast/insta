import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

function Header() {

    const history = useHistory()
    
    const header = {
    color: "white",
    background: "black",
    height: "60px",
    fontSize: "40px",
  };
  const login = {
    display: "flex",
    justifyContent: "end",
  };

  const handleChange = (value) => {
    history.push(`${value}`);
  }
  
  return (
    <div>
      <div style={header}>
        Instagram
        
       {/* <select>
        <option onClick={handleHome}>Home</option> 
        <option onClick={handleLogin}>Login</option>
        </select> */}

    
    <select onChange={event => handleChange(event.target.value)}>
      <option>Menu</option>
      <option value="/">Home</option>
      <option value="/Login">Login</option>
      <option value="/Registration">Registration</option>
    </select>
 
       
      </div>
    </div>
  );
}

export default Header;

