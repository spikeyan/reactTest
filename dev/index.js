/**
 * Created by spikeyan on 2017/12/19.
 */

import ReactDOM from 'react-dom'
import React from 'react'
import {hello} from './basic.styl'


class NumberList extends React.Component {
    constructor(){
        super()
    }
    render(){
        const numbers = this.props.numbers;
/*        const listItems = numbers.map((number,count)=>
            <div key={count.toString()}>{number}</div>
        )
        console.log(listItems)*/
        let listItems = []
        for(let i in numbers){
            listItems.push(<div key={i}>{numbers[i]+10}</div>)
        }
        return(
            <div>{listItems}</div>
        )
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            job:true,
            numbers:[1,2,3,4,5]
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    alert(e){
        this.setState({
            job:!this.state.job
        })
        console.log(this.state.job)
        this.state.numbers.push(this.state.numbers[this.state.numbers.length-1]+1)
        this.setState({
            numbers:this.state.numbers
        })
    }

    render() {
        const T = this;
        const S = T.state;
        return(
            <div className={hello}>
                {
                    S.job ?
                        <div>
                            <h1>Hello, world!</h1>
                            <h2>It is {S.date.toLocaleTimeString()}.</h2>
                            <NumberList numbers={S.numbers} />
                            <button onClick={e=>{T.alert(e)}}>hello</button>
                        </div>
                        :
                            <div>
                                <h1>im h1</h1>
                                <button onClick={e=>{T.alert(e)}}>hello me</button>
                            </div>
                }
            </div>
        )

    }
}

function cao(){
    alert(998)
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
