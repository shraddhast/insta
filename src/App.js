import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Component/Login";
import Registration from "./Component/Registration";
import { useState } from "react";
import ErrorPg from "./Component/ErrorPg";
import Home from "./Component/Home";
import Lazy from "./Component/Lazy";
import Header from "./Component/Header";
import Welcome from "./Component/Welcome";

function App() {
  const [isLog, setIsLog] = useState(false);

  const logProvider = (value) => {
    setIsLog(value)

  };
  return (
    <div className="App">
      <Switch>

        {/* <Route exact path = "/" from render={() => 
        <div> {Header} <Link to ='/Login'> <button>Login</button> </Link> </div>} /> */}

        <Route exact path = "/" from component={Welcome} />

        {!isLog ? (
          <Route exact path="/Login" from render={() => <Login isLogin ={logProvider}/>} />
        ) : (
          <Route exact path="/Home" from render={() => <Home isLogin ={logProvider}/>} />
          // <Route exact path="/Home" from component={Home} />
        )}

        <Route exact path="/Registration" from component={Registration} />
        <Route exact path='/Lazy' component={Lazy} />
        <Route exact path="/explore" from render={() => <h1>Explore </h1>} />
        <Route exact path='*' component={ErrorPg} />
      </Switch>

    </div>
  );
}

export default App;
