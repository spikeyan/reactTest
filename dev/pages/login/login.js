import React from 'react';
import Auth from 'archRoot/auth'

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }
    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }
    render(){
        return (()=>{
            // console.log(this)
        })(),
            <div>
                <label>
                    Name:
                    <input type="text" value={this.state.username} onChange={(...args)=>{this.handleUsernameChange(...args)}} />
                </label>
                <label>
                    Password:
                    <input type="text" value={this.state.password} onChange={(...args)=>{this.handlePasswordChange(...args)}} />
                </label>
                <button onClick={()=>{Auth.state=true;this.props.history.push('/main')}}>Login</button>
            </div>
    }
}

module.exports = Login