import React from 'React'
import { rendor } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Triune from './Triune'
import Home from './Home'

render(
  (
    <Router history={ hashHistory}>
      <Route component={ Triune }>
        <Route path="/" component={ Home }/>
      </Route>
    </Router>
  )
)
