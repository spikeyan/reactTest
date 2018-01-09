import React from 'react'
import style from './full.styl'

class Full extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    roll(e){

    }
    render(){
        return <div className={style.full}>
            <div className="full"><button onClick={(e)=>{this.roll(e)}}></button></div>
            <div className="full">2</div>
            <div className="full">3</div>
            <div className="full">4</div>
        </div>
    }
}

module.exports = Full