import { useMemo } from 'react'
import {
  useWebGLContext,
  useProgram,
  useProgramUniforms,
} from '@react-vertex/core'
import vert from '../shaders/base.vert'
import frag from './curl.frag'

export default function useCurlProgram() {
  const gl = useWebGLContext()
  const program = useProgram(gl, vert, frag)
  const uniforms = useProgramUniforms(gl, program)

  const curl = useMemo(() => {
    return { program, uniforms }
  }, [program, uniforms])

  return curl
}