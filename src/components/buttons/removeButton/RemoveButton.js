import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import IconButton from '../iconButton/IconButton'

import { removeObject } from '../../../actions/data.actions'

import styles from './RemoveButton.scss'


function RemoveButton({ removeObject, object }) {
  return (
    <IconButton
      className={styles.removeButton}
      iconName="trash-alt"
      onClick={() => removeObject(object)}
    />
  )
}

RemoveButton.propTypes = {
  removeObject: PropTypes.func.isRequired,
  object:       PropTypes.object.isRequired
}


export default connect(() => ({}), { removeObject })(RemoveButton)
