import { useGLTF } from '@react-three/drei'
import React from 'react'

export const Apple15Battery = (props) => {
  const { nodes, materials } = useGLTF('./models/apple/ABattery.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1.693}>
        <mesh geometry={nodes.iphone_15_pro_max_battery_1.geometry} material={materials['iphone 15 pro max battery']} />
        <mesh geometry={nodes.iphone_15_pro_max_battery_2.geometry} material={materials['Material.021']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/apple/ABattery.glb')

