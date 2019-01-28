import React from 'react'
import PropTypes from 'prop-types'

import TitleRow from '../titleRow/TitleRow'
import AttributesRow from '../attributesRow/AttributesRow'
import ValuesRow from '../valuesRow/ValuesRow'
import KidsRow from '../kidsRow/KidsRow'


export default function Table({ records, title = null }) {
  const attributes = Object.keys(records[0].data)

  return (
    <table>
      <thead>
        <TitleRow title={title} />
        <AttributesRow attributes={attributes} />
      </thead>

      <tbody>
        {records.map(
          ({ data, kids }) => (
            <>
              <ValuesRow
                attributes={attributes}
                values={data}
              />
              <KidsRow kids={kids} />
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
      data: PropTypes.object,
      kids: PropTypes.object
    })
  ).isRequired,
  title: PropTypes.string
}
