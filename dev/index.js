/**
 * Created by spikeyan on 2017/12/19.
 */
import ReactDOM from 'react-dom'
import React from 'react'
import './basic.styl'

function tick() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);


class Welcome extends React.Component {
    render() {
        return this.what(),
            <h1>Hello, {this.props.name}</h1>;
    }
    what(){
        console.log(99888)
    }


}

class App extends React.Component {
    render(){
        return <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                    <Welcome name="Sara" />
                </div>
    }
}
