import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Samsung8FullBody(props) {
  const { nodes, materials } = useGLTF('./models/Samsung/galaxys8/galaxy_s8.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -5.465, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-4.052, -4.052, 0]}>
          <mesh geometry={nodes.Object_10.geometry} material={materials.lens} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.base} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.black} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.flash} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.front} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.logo} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['Material.002']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/Samsung/galaxys8/galaxy_s8.glb')