import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Apple4Camera(props) {
  const { nodes, materials } = useGLTF('/models/Apple/iphone4/backCamera.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.back_camera_1.geometry} material={materials['back camera']} />
        <mesh geometry={nodes.back_camera_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.back_camera_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.back_camera_4.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Apple/iphone4/backCamera.glb')