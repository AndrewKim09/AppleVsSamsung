import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung8Battery(props) {
  const { nodes, materials } = useGLTF('/models/samsung/galaxys8/battery.json')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.battery_1.geometry} material={materials.battery} />
        <mesh geometry={nodes.battery_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/samsung/galaxys8/battery.json')
