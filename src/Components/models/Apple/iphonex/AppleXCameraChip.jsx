import React from 'react'
import { useGLTF } from '@react-three/drei'

export function AppleXCameraChip(props) {
  const { nodes, materials } = useGLTF('./models/Apple/iphonex/camera.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.047, 0.004]} rotation={[1.374, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_1'].geometry} material={materials['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface']} />
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_2'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_3'].geometry} material={materials['Material.002']} />
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_4'].geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Apple/iphonex/camera.glb')