import React from 'react'
import PropTypes from 'prop-types'

import Table from '../table/Table'

import styles from './KidsRow.scss'


export default function KidsRow({ kids }) {
  const title = Object.keys(kids)[0]
  if (!title) return null

  console.log(kids);
  

  return (
    <tr>
      <td
        className={styles.padded}
        colSpan="100%"
      >
        <Table
          title={title}
          records={kids[title].records}
        />
      </td>
    </tr>
  )
}

KidsRow.propTypes = {
  kids: PropTypes.object
}
