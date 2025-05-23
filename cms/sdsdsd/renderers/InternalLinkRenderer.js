import React from 'react'
import PropTypes from 'prop-types'

const InternalLink = props => (
  <span>
    {props.children}
  </span>
)

InternalLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default InternalLink