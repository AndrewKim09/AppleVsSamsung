import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung23Chip(props) {
  const { nodes, materials } = useGLTF('/models/Samsung/s23ultra/Chip.glb')

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mainBoard.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard001.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard002.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard003.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard004.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard005.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard006.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard007.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard008.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
      <mesh geometry={nodes.mainBoard009.geometry} material={materials.mainBoard} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={-4.227} />
    </group>
  )
}

useGLTF.preload('./models/Samsung/s23ultra/Chip.glb')