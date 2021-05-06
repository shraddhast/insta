import React, { Component } from 'react'
import { Suspense, lazy } from 'react'
import Header from './Header'
import Home from './Home'

const Login = lazy (() => import('./Login'))

class Lazy extends Component {
    render() {
        return (
            <div>
               <Header/>
               <Suspense fallback={<div> pleasw wait.....</div>} >
                Lazy Loading
                <Login/>
                </Suspense>
            </div>
        )
    }
}
export default Lazy