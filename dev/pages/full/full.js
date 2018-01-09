import React from 'react'
import style from './full.styl'
import Wheel from 'wheel-indicator'

class Full extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            current : 0
        }
        this.wheel = null
    }
    componentDidMount(){
        let $ = this
        this.wheel = new Wheel({
            elem: document.querySelector(`.${style.full}`),
            callback: function(e){
                $.roll(e.direction==='down')
            }
        });
    }
    componentWillUnmount(){
        this.wheel.destroy()
    }
    roll(down){
        let count = this.state.current
        if(count===0&&!down || count===4&&down)return
        this.setState({current:down?++count:--count})
    }
    render(){
        return <div className={style.full} style={{transform:`translate(0,${-this.state.current*window.innerHeight}px)`}}>
            <div className="full" style={{backgroundColor:'red'}}>12</div>
            <div className="full" style={{backgroundColor:'blue'}}>2333</div>
            <div className="full" style={{backgroundColor:'black'}}>3111</div>
            <div className="full" style={{backgroundColor:'yellow'}}>433</div>
            <div className="full" style={{backgroundColor:'orange'}}>555</div>
        </div>
    }
}

module.exports = Full