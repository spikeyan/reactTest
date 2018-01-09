import React from 'react'
import Auth from './auth'
import {Route,Redirect,Switch} from 'react-router-dom'

let count = false

class PrivateRoute extends React.Component {
    constructor(props){
        super(props)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     return !Auth.state
    // }
    render(){
        const Component = this.props.component
        const x = Auth.state?<Component/>:<Redirect to="/login"/>;
        return <Route path={this.props.path} render={()=>(x)}/>
    }
}


module.exports = PrivateRoute