import React from 'react'
import { useGLTF } from '@react-three/drei'

export function AppleXChip(props) {
  const { nodes, materials } = useGLTF('./models/Apple/iphonex/cpu.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cpu.geometry} material={materials.cpu} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('./models/Apple/iphonex/cpu.glb')