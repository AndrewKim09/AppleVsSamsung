import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Samsung23CameraChip(props) {
  const { nodes, materials } = useGLTF('/models/Samsung/s23ultra/23CameraChip.json')

  const lineMaterial = useMemo(() => {
      return new THREE.LineBasicMaterial({ color: 0xADD8E6 });
    }, []);
  
    const ultraWideLineEnd = [0.2, 0.7, -.2];
    const wideAngleLineEnd = [0.2, 0.4, -0.3];
    const telephotoTenXLineEnd = [0.2, -.5, 0];
    const telephotoThreeXLineEnd = [0.2, .1, -.6];
  
    const ultraWideLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0.02, 0.33, 0.2),
        new THREE.Vector3(ultraWideLineEnd[0], ultraWideLineEnd[1], ultraWideLineEnd[2]),
      ]);
      return geometry;
    }, []);
  
    const wideAngleLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0.02, 0.04, 0.2),
        new THREE.Vector3(wideAngleLineEnd[0], wideAngleLineEnd[1], wideAngleLineEnd[2]),
      ]);
      return geometry;
    }, []);
  
    const telephotoTenXLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0.02, -0.24, 0.2),
        new THREE.Vector3(telephotoTenXLineEnd[0], telephotoTenXLineEnd[1], telephotoTenXLineEnd[2]),
      ]);
      return geometry;
    }, []);
  
    const telephotoThreeXLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0.02, 0, -.1),
        new THREE.Vector3(telephotoThreeXLineEnd[0], telephotoThreeXLineEnd[1], telephotoThreeXLineEnd[2]),
      ]);
      return geometry;
    }, []);
  return (
    
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(ultraWideLineGeometry, lineMaterial)} />
        <Html position={new THREE.Vector3(ultraWideLineEnd[0], ultraWideLineEnd[1] * 1.05, ultraWideLineEnd[2])}>
          <div className='w-24 p-1 text-xs lineText'>
            Ultra Wide
          </div>
        </Html>
  
        <primitive object={new THREE.Line(wideAngleLineGeometry, lineMaterial)} />
        <Html position={new THREE.Vector3(wideAngleLineEnd[0], wideAngleLineEnd[1] * 1.05, wideAngleLineEnd[2])}>
          <div className='w-24 p-1 text-xs lineText'>
            Wide Angle
          </div>
        </Html>
  
        <primitive object={new THREE.Line(telephotoTenXLineGeometry, lineMaterial)} />
        <Html position={new THREE.Vector3(telephotoTenXLineEnd[0], telephotoTenXLineEnd[1] * 1.05, telephotoTenXLineEnd[2])}>
          <div className='w-24 p-1 text-xs lineText'>
            Telephoto 10x
          </div>
        </Html>
  
        <primitive object={new THREE.Line(telephotoThreeXLineGeometry, lineMaterial)} />
        <Html position={new THREE.Vector3(telephotoThreeXLineEnd[0], telephotoThreeXLineEnd[1] * 1.05, telephotoThreeXLineEnd[2])}>
          <div className='w-24 p-1 text-xs lineText'>
            Telephoto 3x
          </div>
        </Html>
      <mesh geometry={nodes.S23ultrabackcamera001.geometry} material={materials.S23ultrabackcamera} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('./models/Samsung/s23ultra/23CameraChip.json')