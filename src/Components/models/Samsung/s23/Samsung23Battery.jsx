import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung23Battery(props) {
  const { nodes, materials } = useGLTF('./models/Samsung/s23ultra/battery.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.battert_1.geometry} material={materials.battert} />
        <mesh geometry={nodes.battert_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.battert_3.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Samsung/s23ultra/battery.glb')