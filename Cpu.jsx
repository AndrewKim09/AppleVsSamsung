/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/samsung/galaxyS/cpu.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cpu.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.cpu.geometry} material={materials.cpu} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/cpu.glb')