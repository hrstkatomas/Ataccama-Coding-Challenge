import React from 'react'
import PropTypes from 'prop-types'


export default function ValuesRow({ attributes, values }) {
  return (
    <tr>
      <td />

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
