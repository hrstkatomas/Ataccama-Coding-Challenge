import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon/Icon'


export default function AttributesRow({ attributes }) {
  return (
    <tr>
      <th>
        <Icon name="chevron-down" />
      </th>

      {attributes.map(
        attribute => (
          <th key={attribute}>
            {attribute}
          </th>
        )
      )}
    </tr>
  )
}

AttributesRow.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired
}
