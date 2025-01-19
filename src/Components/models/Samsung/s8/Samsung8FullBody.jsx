import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Samsung8FullBody(props) {
  const { nodes, materials } = useGLTF('/models/samsung/galaxys8/galaxy_s8.json')
  const lineMaterial = useMemo(() => {
      return new THREE.LineBasicMaterial({ color: 0xADD8E6 });
    }, []);
    
    const screenLineEnd = [1, -6, 1];
    const frameLineEnd = [3, 0.16, 0];
    const backpanelLineEnd = [0, 4.5, -.1];
  
    const screenLineGeometry = useMemo(() => {
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(screenLineEnd[0], screenLineEnd[1], screenLineEnd[2]),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return geometry;
    }, [])
    
    const frameLineGeometry = useMemo(() => {
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(frameLineEnd[0], frameLineEnd[1], frameLineEnd[2]),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return geometry
    }, [])
    
    const backpanelLineGeometry = useMemo(() => {
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(backpanelLineEnd[0], backpanelLineEnd[1], backpanelLineEnd[2]),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return geometry
    }, [])
  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(screenLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(screenLineEnd[0], screenLineEnd[1], screenLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-[330px] h-[60px] text-[40px] lineText'>
          Dynamic AMOLED 2X
        </div>
      </Html>
      
      <primitive object={new THREE.Line(frameLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(frameLineEnd[0], frameLineEnd[1] * 1.2, frameLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10} heig>
        <div className='w-[300px] h-[60px] text-[40px] lineText  '>
          Grade 2 Titanium
        </div>
      </Html>
      
      <primitive object={new THREE.Line(backpanelLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1.1, backpanelLineEnd[1] * 1.3, backpanelLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-[480px] h-[60px] text-[35px] lineText'>
          Corning Gorilla Glass Victus 2
        </div>
      </Html>
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

useGLTF.preload('/models/samsung/galaxys8/galaxy_s8.json')