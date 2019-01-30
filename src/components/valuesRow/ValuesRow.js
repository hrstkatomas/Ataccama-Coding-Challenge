import React from 'react'
import PropTypes from 'prop-types'

import RemoveButton from '../buttons/removeButton/RemoveButton'
import ExpandButton from '../buttons/expandButton/ExpandButton'


export default function ValuesRow({
  attributes, values, expanded, hasKids
}) {
  return (
    <tr>
      <td>
        {hasKids && (
          <ExpandButton
            object={values}
            expanded={expanded}
          />
        )}
      </td>

      {attributes.map(
        attribute => (
          <td key={`${attribute}-${values[attribute]}`}>
            {values[attribute]}
          </td>
        )
      )}

      <td>
        <RemoveButton object={values} />
      </td>
    </tr>
  )
}

ValuesRow.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.string).isRequired,
  values:     PropTypes.object,
  expanded:   PropTypes.bool,
  hasKids:    PropTypes.bool
}
