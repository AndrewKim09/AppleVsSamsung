import { useGLTF } from '@react-three/drei'
import React from 'react'

export const Samsung24Battery = (props) => {
  const { nodes, materials } = useGLTF('/models/samsung/SBattery.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.battery.geometry} material={materials.battery} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={3.089} />
    </group>
  )
}

useGLTF.preload('/samsung/SBattery.glb')
