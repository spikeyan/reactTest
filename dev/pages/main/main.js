import React from 'react';
import style from './main.styl';
import {HashRouter as Router} from 'react-router-dom'

import TopNav from './topNav';
import SideBar from './sideBar';
import Content from './content';

class MainContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className={style.main}>
            <TopNav/>
            <Router>
            <div className={style.content}>
                <SideBar/>
                <Content/>
            </div>
            </Router>
        </div>
    }
}

module.exports = MainContainer