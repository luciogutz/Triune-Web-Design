import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'


const Header = () => (
  <section>
    <section className="header_container">
      <div className="menu-topBar">
        <p className="menu-topBar-quote">
          “Recognizing the need is the primary condition for design.” –Charles Eames
        </p>
      </div>
      <div className="menu">
        <img className="menu-logoImg" src="https://github.com/luciogutz/Triune-Web-Design/blob/master/assets/Triune-logo.png?raw=true" />
      </div>
      <div>
        <h1 className="header_title">
          “It’s not about ideas. It’s about making ideas happen.” —Scott Belsky
        </h1>
      </div>  
    </section>
  </section>
)

export default Header
