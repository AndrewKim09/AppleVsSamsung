import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Apple14Camera(props) {
  const { nodes, materials } = useGLTF('./models/apple/iphone14/camera.glb')
  const ultraWideLineEnd = [0.2, 0.3, 0.6]
    const telephotoLineEnd = [0.2, .5, .2]
    const mainLineEnd = [0,-.2,.6]
  
  
    const appleLineMaterial = useMemo(() => {
      return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
    }, []);
  
    const ultraWideLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -.15),
        new THREE.Vector3(ultraWideLineEnd[0], ultraWideLineEnd[1], ultraWideLineEnd[2])
      ]);
      return geometry;
    }, [])
  
    const telephotoLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, .1, .2),
        new THREE.Vector3(telephotoLineEnd[0], telephotoLineEnd[1], telephotoLineEnd[2])
      ]);
      return geometry;
    })
  
    const mainLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0.05, -.1, .25),
        new THREE.Vector3(mainLineEnd[0], mainLineEnd[1], mainLineEnd[2])
      ]);
      return geometry;
    }, [])
  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(ultraWideLineGeometry, appleLineMaterial)} />
            <Html position={new THREE.Vector3(ultraWideLineEnd[0] * 1.1, ultraWideLineEnd[1] * 1.1, ultraWideLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
            <div className='w-7 p-1 text-[4px] lineText'>
                Ultra Wide
                </div>
            </Html>
            <primitive object={new THREE.Line(telephotoLineGeometry, appleLineMaterial)} />
            <Html position={new THREE.Vector3(telephotoLineEnd[0], telephotoLineEnd[1] * 0.8, telephotoLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
              <div className='w-6 p-1 text-[4px] lineText'>
                Telephoto
              </div>
            </Html>
      
            <primitive object={new THREE.Line(mainLineGeometry, appleLineMaterial)} />
            <Html position={new THREE.Vector3(mainLineEnd[0], mainLineEnd[1] * 1.6, mainLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
              <div className='w-6 p-1 text-[4px] lineText'>
                Main
              </div>
            </Html>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.camera_1.geometry} material={materials.camera} />
        <mesh geometry={nodes.camera_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.camera_3.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/apple/iphone14/camera.glb')
