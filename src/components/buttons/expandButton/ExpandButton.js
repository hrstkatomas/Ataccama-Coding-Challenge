import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import IconButton from '../iconButton/IconButton'

import { expandObject } from '../../../actions/expanded.actions'


function ExpandButton({ expandObject, object, expanded }) {
  return (
    <IconButton
      iconName={`chevron-${expanded ? 'down' : 'right'}`}
      onClick={() => expandObject(object)}
    />
  )
}

ExpandButton.propTypes = {
  expandObject: PropTypes.func.isRequired,
  object:       PropTypes.object.isRequired,
  expanded:     PropTypes.bool.isRequired
}


export default connect(() => ({}), { expandObject })(ExpandButton)
