import React from 'react'
import PropTypes from 'prop-types'


export default function TitleRow({ title }) {
  if (!title) return null

  return (
    <tr>
      <th colSpan="100%">
        {title}
      </th>
    </tr>
  )
}

TitleRow.propTypes = {
  title: PropTypes.string
}
