import React from 'react'
import PropTypes from 'prop-types'

import styles from './TitleRow.scss'

export default function TitleRow({ title }) {
  if (!title) return null

  return (
    <tr>
      <th
        colSpan="100%"
        className={styles.title}
      >
        {title}
      </th>
    </tr>
  )
}

TitleRow.propTypes = {
  title: PropTypes.string
}
