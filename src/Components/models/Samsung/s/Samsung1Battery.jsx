import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung1Battery(props) {
  const { nodes, materials } = useGLTF('./models/Samsung/galaxyS/battery.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.battery.geometry} material={materials.battery} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('./models/Samsung/galaxyS/battery.glb')