import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './utils/main';
import LandingPage from './landingPage';
// import UserProfile from "./components/profile";
// import { StripeProvider } from "react-stripe-elements";
// import Checkout from "./components/Checkout.js"
import Login from './components/Login';
// import SignUp from "./components/signUp"

// import { ReactiveBase, DataSearch, DateRange, RangeSlider, ResultCard } from '@appbaseio/reactivesearch';
import Register from './components/Register';
// import './App.css';


function App () {
    return (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Main" component={Main} />
                
                <Route exact path="/Login" component={Login} />
            
                
                <Route exact path="/Register" component={Register} />

            </Switch>
         </div>
     </Router>
    
    );

}

export default App;
