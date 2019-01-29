import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Icon from '../icon/Icon'

import { removeObject } from '../../actions/data.actions'


function ValuesRow({ attributes, values, removeObject }) {
  return (
    <tr onClick={() => removeObject(values)}>
      <td>
        <Icon name="chevron-down" />
      </td>

      {attributes.map(
        attribute => (
          <td key={`${attribute}-${values[attribute]}`}>
            {values[attribute]}
          </td>
        )
      )}
    </tr>
  )
}

ValuesRow.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  values:     PropTypes.object
}


export default connect(state => ({}), { removeObject })(ValuesRow)
