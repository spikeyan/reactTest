import React from 'react';
import style from './content.styl'
import PrivateRoute from 'archRoot/pro.jsx'

const A = ()=>(
    <div>A</div>
)
const B = ()=>(
    <div>B</div>
)
const C = ()=>(
    <div>C</div>
)

class Content extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className={style.content}>
            <PrivateRoute path="/main/a" component={A}/>
            <PrivateRoute path="/main/b" component={B}/>
            <PrivateRoute path="/main/c" component={C}/>
        </div>
    }
}

module.exports = Content