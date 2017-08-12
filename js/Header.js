import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, history } from 'react-router-dom'

const Header = () => (
  <section>
    <section className="header_container">
      <div className="fullWidth">
        <img src={require('./assets/Triune-logo.png')} />
        <h1 className="header_title">
          This is the Triune Web Design Website
        </h1>
      </div>
    </section>
  </section>
)

export default Header
