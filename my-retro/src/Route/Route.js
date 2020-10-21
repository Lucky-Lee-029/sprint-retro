import Login from "../Auth/Login";
import App from "../App"
import React, {useContext, useEffect} from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';

const Routes = props=>{
    return(
        <Switch>
            <Route path="/" component={Login} exact/>
            <Route path="/singed" component={App}/>
        </Switch>

    )
}
export default Routes;