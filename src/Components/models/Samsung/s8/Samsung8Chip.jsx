import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung8Chip(props) {
  const { nodes, materials } = useGLTF('/models/samsung/galaxys8/cpu.json')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.cpu_1.geometry} material={materials.cpu} />
        <mesh geometry={nodes.cpu_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.cpu_3.geometry} material={materials.Material} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/samsung/galaxys8/cpu.json')
