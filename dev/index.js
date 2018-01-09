/**
 * Created by spikeyan on 2017/12/19.
 */
// import './arch/arch.styl'
import './arch/root.stylus'
import React from 'react'
import ReactDom from 'react-dom'
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import PrivateRoute from './arch/pro.jsx'


import Login from './pages/login/login'
import Main from './pages/main/main'
import Full from './pages/full/full'



const Root = () =>(
    <Router>
        <div style={{height:'100%'}}>
            <Route exact path="/" render={() => (
                <Redirect to="/main"/>
            )}/>
            <Route path="/login" component={Login}/>
            <Route path="/full" component={Full}/>
            <PrivateRoute path="/main" component={Main}/>
        </div>
    </Router>
)

ReactDom.render(
    <Root/>,
    document.getElementById('root')
)
