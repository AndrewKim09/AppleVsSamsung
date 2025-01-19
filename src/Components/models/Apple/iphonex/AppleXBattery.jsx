import React from 'react'
import { useGLTF } from '@react-three/drei'

export function AppleXBattery(props) {
  const { nodes, materials } = useGLTF('/models/apple/iphonex/battery.json')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.iphonexbattery_1.geometry} material={materials.iphonexbattery} />
        <mesh geometry={nodes.iphonexbattery_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.iphonexbattery_3.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/apple/iphonex/battery.json')