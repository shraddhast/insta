import React from 'react'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import Header from './Header'

function Home(props) {

    const history = useHistory()

    const submitHandler = (e) => {
        
        props.isLogin(false)
        history.push('/Login')     
    }
     
    return (
        <div>
            <Header/>
            
            Hello !!!<br/>

            <button onClick={submitHandler}>Logout</button>

            {/* <Link to="/Login"> 
            <button>Logout</button>
            </Link> */}
            
        </div>
    )
}

export default Home
