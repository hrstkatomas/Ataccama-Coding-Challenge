import React from 'react'
import PropTypes from 'prop-types'

import styles from './AttributesRow.scss'


export default function AttributesRow({ attributes }) {
  return (
    <tr className={styles.attributes}>
      <th />

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
