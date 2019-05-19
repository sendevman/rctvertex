import React, { memo } from 'react'
import { useSolidLambert } from '@react-vertex/material-hooks'
import { useSphereElements } from '@react-vertex/geometry-hooks'
import { useColorSlider, useValueSlider } from '@react-vertex/scene-helpers'

function Sphere() {
  const radius = useValueSlider('Sphere Radius:', 10, 10, 20, 0.1)
  const sphere = useSphereElements(radius, 30, 30)

  const kd = useColorSlider('Diffuse Color:', '#9B9B9B', true)

  const ka = useColorSlider('Ambient Color:', '#808080', true)
  const na = useValueSlider('Ambient Level:', 0.2, 0, 1, 0.01)

  const program = useSolidLambert(kd, na, ka)

  return (
    <material program={program}>
      <geometry {...sphere} />
    </material>
  )
}

Sphere.propTypes = {}

export default memo(Sphere)
