import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Apple4Chip(props) {
  const { nodes, materials } = useGLTF('./models/Apple/iphone4/cpu.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.cpuboard_1.geometry} material={materials.cpuboard} />
        <mesh geometry={nodes.cpuboard_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Apple/iphone4/cpu.glb')