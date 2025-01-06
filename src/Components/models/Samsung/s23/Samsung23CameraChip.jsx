import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung23CameraChip(props) {
  const { nodes, materials } = useGLTF('./models/Samsung/s23ultra/23CameraChip.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.S23ultrabackcamera001.geometry} material={materials.S23ultrabackcamera} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('./models/Samsung/s23ultra/23CameraChip.glb')