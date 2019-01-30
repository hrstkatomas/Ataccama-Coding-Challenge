import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Table from '../components/table/Table'

class App extends Component {
  static propTypes = {
    data: PropTypes.array
  }

  render() {
    const { data } = this.props

    return (
      <div>
        <h1>Hello Ataccama</h1>

        <Table records={data} />
      </div>
    )
  }
}


const mapStateToProps = state => state

export default connect(mapStateToProps)(App)
