import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export const Money = (props) => {
  const { nodes, materials } = useGLTF('/models/money.glb')
  const moneyRef = useRef()
  useFrame(() => {
    if (moneyRef.current) {
      moneyRef.current.rotation.y -= 0.01; // Adjust this value for speed
    }
  });
  return (
    <group {...props} dispose={null} ref={moneyRef}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['4279596_1'].geometry} material={materials['4279596']} />
        <mesh geometry={nodes['4279596_2'].geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/money.glb')