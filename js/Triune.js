import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    )
  }
})
