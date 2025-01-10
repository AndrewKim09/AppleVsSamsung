import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Apple4Battery(props) {
  const { nodes, materials } = useGLTF('/models/Apple/iphone4/battery.json')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.battery_1.geometry} material={materials.battery} />
        <mesh geometry={nodes.battery_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.battery_3.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Apple/iphone4/battery.json')