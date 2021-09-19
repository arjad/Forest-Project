import React, { useState ,useEffect} from 'react'
import Home from '../src/comp/home/home'
import About from '../src/comp/about/about'
import Chat from '../src/comp/chat/chat'
import Contact from './comp/contact/contact'

import {BrowserRouter as Router,Route} from 'react-router-dom'
import Flip from 'react-reveal/Flip';

function App() 
{
    return (
        <>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/aboutus" exact component={About}/>
                <Route path="/livechat" exact component={Chat}/>
                <Route path="/contactus" exact component={Contact}/>
                
            </Router>

        </>
    )
}

export default App;