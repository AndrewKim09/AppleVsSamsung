import React, { useMemo } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import * as THREE from 'three'

export function AppleXCameraChip(props) {
  const { nodes, materials } = useGLTF('/models/apple/iphonex/camera.json')
  const appleLineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
  }, []);

  const wideEnd = [0.1, -.2, 0.2];
  const telephotoEnd = [0.1, 0.3, 0.1];

  const wideGeometry = useMemo(() => {
      const points = [
        new THREE.Vector3(0.01, 0, .1),
        new THREE.Vector3(wideEnd[0], wideEnd[1], wideEnd[2]),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return geometry;
    }, [])
  
    const telephotoGeometry = useMemo(() => {
      const points = [
        new THREE.Vector3(0.01, 0, -.1),
        new THREE.Vector3(telephotoEnd[0], telephotoEnd[1], telephotoEnd[2]),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      return geometry
    }, [])

  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(telephotoGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(telephotoEnd[0] , telephotoEnd[1] * 1.2, telephotoEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-6 p-[1px] text-[4px] lineText'>
            telephoto
          </div>
      </Html>

      <primitive object={new THREE.Line(wideGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(wideEnd[0], wideEnd[1] * 0.8, wideEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-4 p-[1px] text-[4px] lineText'>
            Wide
          </div>
      </Html>
      
      <group position={[0, 0.047, 0.004]} rotation={[1.374, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_1'].geometry} material={materials['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface']} />
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_2'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_3'].geometry} material={materials['Material.002']} />
        <mesh geometry={nodes['GPHBX51NJGIKZwZs_0ef09dea-ba84-4d99-959f-112e7afdface_4'].geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/apple/iphonex/camera.json')