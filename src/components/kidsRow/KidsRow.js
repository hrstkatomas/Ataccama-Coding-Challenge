import React from 'react'
import PropTypes from 'prop-types'

import Table from '../table/Table'

import hasRecords from '../../helpers/kids/hasRecords'
import getTitleOf from '../../helpers/kids/getTitleOf'
import getRecordsOf from '../../helpers/kids/getRecordsOf'

import styles from './KidsRow.scss'


export default function KidsRow({ kids }) {
  if (!hasRecords(kids)) return null

  return (
    <tr>
      <td
        className={styles.padded}
        colSpan="100%"
      >
        <Table
          title={getTitleOf(kids)}
          records={getRecordsOf(kids)}
        />
      </td>
    </tr>
  )
}

KidsRow.propTypes = {
  kids: PropTypes.object
}
