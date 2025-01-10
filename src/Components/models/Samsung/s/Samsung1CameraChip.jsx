import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung1CameraChip(props) {
  const { nodes, materials } = useGLTF('/models/Samsung/galaxyS/backCamera.json')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.005, 0, 0]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.backCamera_1.geometry} material={materials.backCamera} />
        <mesh geometry={nodes.backCamera_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.backCamera_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.backCamera_4.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Samsung/galaxyS/backCamera.json')