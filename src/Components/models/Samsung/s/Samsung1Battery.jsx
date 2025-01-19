import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung1Battery(props) {
  const { nodes, materials } = useGLTF('/models/samsung/galaxyS/battery.json')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.battery.geometry} material={materials.battery} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/models/samsung/galaxyS/battery.json')