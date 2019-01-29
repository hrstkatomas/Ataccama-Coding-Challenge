import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon/Icon'


export default function ValuesRow({ attributes, values }) {
  return (
    <tr>
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
