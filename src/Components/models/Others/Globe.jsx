import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'

export const Globe = (props) => {
  const { nodes, materials } = useGLTF('/models/globe.glb')
  const globeRef = useRef()
  const emissiveMaterial = useMemo(() => 
    new THREE.MeshStandardMaterial({
      emissive: new THREE.Color('white'), // Emissive color
      emissiveIntensity: 10,                 // Adjust intensity
    }), []
  )

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y -= 0.01; // Adjust this value for speed
    }
  });


  return (
    <group {...props} dispose={null} ref={globeRef} scale={[0.5, 0.5, 0.5]}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
      <group position={[-0.345, 1.476, 1.264]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['Apple-Logo_1'].geometry} material={materials['Apple-Logo']} />
        <mesh geometry={nodes['Apple-Logo_2'].geometry} material={materials['Material.007']} />
      </group>
      <mesh geometry={nodes.Samsung_Logosvg.geometry} material={materials['Samsung_Logo.svg']} position={[-0.223, 1.378, -1.803]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.edge.geometry} material={materials['Material.002']} scale={1.344} />
      <mesh geometry={nodes.vertexSphere.geometry} material={emissiveMaterial} position={[-0.79, 0, -1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere001.geometry} material={emissiveMaterial} position={[-0.925, -0.707, -0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere002.geometry} material={emissiveMaterial} position={[-0.707, -1.143, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere003.geometry} material={emissiveMaterial} position={[-0.218, -1.143, -0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere004.geometry} material={emissiveMaterial} position={[-0.371, -0.601, -1.143]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere005.geometry} material={emissiveMaterial} position={[0.572, -1.143, -0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere006.geometry} material={emissiveMaterial} position={[0.353, -0.707, -1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere007.geometry} material={emissiveMaterial} position={[0, 0, -1.344]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere008.geometry} material={emissiveMaterial} position={[0.973, -0.601, -0.707]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere009.geometry} material={emissiveMaterial} position={[0.79, 0, -1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere010.geometry} material={emissiveMaterial} position={[0.371, 0.601, -1.143]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere011.geometry} material={emissiveMaterial} position={[1.278, 0, -0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere012.geometry} material={emissiveMaterial} position={[0.925, 0.707, -0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere013.geometry} material={emissiveMaterial} position={[1.202, 0.601, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere014.geometry} material={emissiveMaterial} position={[0.707, 1.143, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere015.geometry} material={emissiveMaterial} position={[0.925, 0.707, 0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere016.geometry} material={emissiveMaterial} position={[0, 1.344, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere017.geometry} material={emissiveMaterial} position={[0.218, 1.143, 0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere018.geometry} material={emissiveMaterial} position={[0.371, 0.601, 1.143]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere019.geometry} material={emissiveMaterial} position={[-0.572, 1.143, 0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere020.geometry} material={emissiveMaterial} position={[0.218, 1.143, -0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere021.geometry} material={emissiveMaterial} position={[-0.353, 0.707, 1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere022.geometry} material={emissiveMaterial} position={[-0.973, 0.601, 0.707]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere023.geometry} material={emissiveMaterial} position={[0.79, 0, 1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere024.geometry} material={emissiveMaterial} position={[0.973, -0.601, 0.707]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere025.geometry} material={emissiveMaterial} position={[1.278, 0, 0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere026.geometry} material={emissiveMaterial} position={[1.143, -0.707, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere027.geometry} material={emissiveMaterial} position={[0.353, -0.707, 1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere028.geometry} material={emissiveMaterial} position={[0, 0, 1.344]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere029.geometry} material={emissiveMaterial} position={[-0.371, -0.601, 1.143]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere030.geometry} material={emissiveMaterial} position={[-0.218, -1.143, 0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere031.geometry} material={emissiveMaterial} position={[-0.79, 0, 1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere032.geometry} material={emissiveMaterial} position={[-0.925, -0.707, 0.672]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere033.geometry} material={emissiveMaterial} position={[-1.278, 0, 0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere034.geometry} material={emissiveMaterial} position={[-1.202, -0.601, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere035.geometry} material={emissiveMaterial} position={[-0.915, -0.7, -0.674]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere036.geometry} material={emissiveMaterial} position={[-1.278, 0, -0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere037.geometry} material={emissiveMaterial} position={[-1.143, 0.707, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere038.geometry} material={emissiveMaterial} position={[-0.973, 0.601, -0.707]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere039.geometry} material={emissiveMaterial} position={[-0.353, 0.707, -1.087]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere040.geometry} material={emissiveMaterial} position={[-0.572, 1.143, -0.415]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere041.geometry} material={emissiveMaterial} position={[0, -1.344, 0]} scale={0.022} />
      <mesh geometry={nodes.vertexSphere042.geometry} material={emissiveMaterial} position={[0.572, -1.143, 0.415]} scale={0.022} />
    </group>
  )
}

useGLTF.preload('/models/globe.glb')