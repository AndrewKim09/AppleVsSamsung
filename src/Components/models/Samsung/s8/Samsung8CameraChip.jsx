import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung8CameraChip(props) {
  const { nodes, materials } = useGLTF('/models/Samsung/galaxys8/camera.json')  
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.camera_1.geometry} material={materials.camera} />
        <mesh geometry={nodes.camera_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Samsung/galaxys8/camera.json')