import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Apple14Battery(props) {
  const { nodes, materials } = useGLTF('/models/apple/iphone14/battery.glb')
  console.log(nodes, materials)
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['3840-iphone-14-pro-original-battery_1'].geometry} material={materials['3840-iphone-14-pro-original-battery']} />
        <mesh geometry={nodes['3840-iphone-14-pro-original-battery_2'].geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/apple/iphone14/battery.glb')