import React from 'react';
import ReactDom from 'react-dom'

import style from './topNav.styl'

class TopNav extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.go()
        console.log('WillMouont')
    }
    componentDidMount(){
        // console.log(document.querySelector('.'+style["top-nav"]))
        console.log('DidMount')
    }
    render(){
        return <div className={style["top-nav"]} style={{backgroundColor: this.props.color}}></div>
    }
    componentWillReceiveProps(nextProps){

    }
    // shouldComponentUpdate(nextProps,nextState){
    //
    // }
    componentWillUpdate(nextProps,nextState){

    }
    componentDidUpdate(prevProps, prevState){

    }
    componentWillUnmount(){

    }
    componentDidCatch(error, info){

    }
    async go(){
        await new Promise((y,n)=>{
            setTimeout(()=>{y()},2000)
        })
        console.log('go')
    }
}

TopNav.defaultProps = {
    color:'orange'
}

module.exports = TopNav