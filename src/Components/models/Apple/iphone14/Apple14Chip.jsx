import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Apple14Chip(props) {
  const { nodes, materials } = useGLTF('/models/apple/iphone14/chip.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.cpu_1.geometry} material={materials.cpu} />
        <mesh geometry={nodes.cpu_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.cpu_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/apple/iphone14/chip.glb')