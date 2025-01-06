import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung23FullBody(props) {
  const { nodes, materials } = useGLTF('./models/Samsung/s23ultra/samsungs23ultra.glb') 
  return (
    <group {...props} dispose={null}>
      <group position={[0.014, 0, 0]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['screen outline']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.side} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['side control']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['back cover']} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials['front camera outline']} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials['front camera lens']} />
        <mesh geometry={nodes.Cube003_6.geometry} material={materials.speakers} />
        <mesh geometry={nodes.Cube003_7.geometry} material={materials['charger.001']} />
        <mesh geometry={nodes.Cube003_8.geometry} material={materials['back camera outline']} />
        <mesh geometry={nodes.Cube003_9.geometry} material={materials['back camera']} />
        <mesh geometry={nodes.Cube003_10.geometry} material={materials.LED} />
        <mesh geometry={nodes.Cube003_11.geometry} material={materials['LED flash']} />
        <mesh geometry={nodes.Cube003_12.geometry} material={materials.lidar} />
        <mesh geometry={nodes.Cube003_13.geometry} material={materials['pen room']} />
        <mesh geometry={nodes.Cube003_14.geometry} material={materials.headphones} />
        <mesh geometry={nodes.Cube003_15.geometry} material={materials['samsung logo']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Samsung/s23ultra/samsungs23ultra.glb')