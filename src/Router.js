import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Forecast from './components/pages/Forecast';

function Routes () {
    return (
        <Switch>
            <Route path={['/','/home']} exact component={Home}/>
            <Route path='/Forecast' component={Forecast}/>
        </Switch>
    );
}

export default Routes;