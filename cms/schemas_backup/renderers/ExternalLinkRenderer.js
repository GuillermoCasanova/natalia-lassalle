import React from 'react'
import PropTypes from 'prop-types'

const ExternalLink = props => (
  <span>
    {props.children}
  </span>
)

ExternalLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default ExternalLink