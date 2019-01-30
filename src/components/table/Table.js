import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import TitleRow from '../titleRow/TitleRow'
import AttributesRow from '../attributesRow/AttributesRow'
import ValuesRow from '../valuesRow/ValuesRow'
import KidsRow from '../kidsRow/KidsRow'

import includesObjectShallow from '../../helpers/arrays/includesObjectShallow'
import hasRecords from '../../helpers/kids/hasRecords'

import styles from './Table.scss'


function Table({ records, title = null }) {
  if (!records.length) return null

  const attributes = Object.keys(records[0].data)

  return (
    <table className={styles.table}>
      <thead>
        <TitleRow title={title} />
        <AttributesRow attributes={attributes} />
      </thead>

      <tbody>
        {records.map(
          ({ data, kids, expanded }) => (
            <>
              <ValuesRow
                attributes={attributes}
                values={data}
                expanded={expanded}
                hasKids={hasRecords(kids)}
              />

              {expanded && <KidsRow kids={kids} />}
            </>
          )
        )}

      </tbody>
    </table>
  )
}

Table.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      data:     PropTypes.object,
      kids:     PropTypes.object,
      expanded: PropTypes.bool
    })
  ).isRequired,
  title: PropTypes.string
}

const getRecordsWithExpanded = createSelector(
  (state, props) => props.records,
  state => state.expanded,
  (records, expanded) => {
    return records.map(
      record => ({
        ...record,
        expanded: includesObjectShallow(expanded, record.data)
      })
    )
  }
)

const mapStateToProps = (state, props) => ({
  records: getRecordsWithExpanded(state, props)
})

export default connect(mapStateToProps)(Table)
