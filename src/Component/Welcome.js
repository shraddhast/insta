import React from 'react'
import Header from './Header'
import { useHistory } from 'react-router-dom'


function Welcome() {

    const history = useHistory()

    const loginHandler = () =>{
        history.push('/Login')
    }
    return (
        <div>
            <Header/>
            Welcome!!!
            <br/>
            <button onClick={loginHandler}>Login</button> 
        </div>
    )
}

export default Welcome
