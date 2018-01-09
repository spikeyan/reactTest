import React from 'react'
import style from './sideBar.styl'
import {Link} from 'react-router-dom'

class SideBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (()=>{})(),
            <div className={style["side-bar"]}>
                <div><Link to="/main/a">A</Link></div>
                <div><Link to="/main/b">B</Link></div>
                <div><Link to="/main/c">C</Link></div>
            </div>
    }
}

module.exports = SideBar