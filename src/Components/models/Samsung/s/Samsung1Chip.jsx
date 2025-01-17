import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung1Chip(props) {
  const { nodes, materials } = useGLTF('/models/samsung/galaxyS/cpu.json')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cpu.geometry} material={materials.cpu} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/models/samsung/galaxyS/cpu.json')