import React from 'react'
import PropTypes from 'prop-types'
import { useTexture2d } from '@react-vertex/core'
import { usePhongTextured } from '@react-vertex/material-hooks'

function PhongTextured({ children, textureUrl }) {
  const [texture] = useTexture2d(textureUrl)
  const program = usePhongTextured(texture, 0.25)

  return <material program={program}>{children}</material>
}

PhongTextured.propTypes = {
  children: PropTypes.node,
  textureUrl: PropTypes.string.isRequired,
}

export default PhongTextured
