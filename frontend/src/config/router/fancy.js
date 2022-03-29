import React from 'react'
import { Route } from 'react-router-dom'

class FancyRoute extends React.Component {
  constructor({ title }) {
    super();
    document.title = `${title} - Blog Saya`;
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

export default FancyRoute
