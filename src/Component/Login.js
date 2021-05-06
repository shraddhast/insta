import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Header from './Header'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:"",
        }
    }
    
   changeHandler = (e) => {
    const {name, value} = e.target
    this.setState({
        [name]:value
    })
   }
   submitHandler = (e) => {
       e.preventDefault()
      this.props.isLogin(true)
      this.props.history.push('/Home')     
      
   }
    
   render() {
        return (
            <div>

                <Header/>
                    <form onSubmit={this.submitHandler} className= "form">
                  
                    <input type="text" name="email" placeholder="Email" onChange={this.changeHandler} className="input" /> <br/>
                    <input type="password" name="password" placeholder="Password" onChange={this.changeHandler} className="input" /><br/>

                    <button className='btn'> Login </button><br/>

                    <Link to = "/Registration">
                    <button className='btn'>Register</button>
                    </Link>
                    
                    
                </form>

                </div>

        )
    }
}
export default  withRouter(Login)