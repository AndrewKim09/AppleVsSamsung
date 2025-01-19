import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function AppleXFullBody(props) {
  const { nodes, materials } = useGLTF('/models/apple/iphonex/fullBody.json')
    const appleLineMaterial = useMemo(() => {
        return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
      }, []);
  
      const screenLineEnd = [-.3, -.3, 0.2];
      const frameLineEnd = [-.3, 0, .03];
      const backpanelLineEnd = [-.2, 0.5, -.1];
  
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
            new THREE.Vector3(-.05, 0, 0),
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
      <primitive object={new THREE.Line(screenLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(screenLineEnd[0] , screenLineEnd[1] , screenLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-7 p-[1px] text-[2px] lineText'>
          Super Retina HD OLED
        </div>
      </Html>
            
        <primitive object={new THREE.Line(frameLineGeometry, appleLineMaterial)} />
        <Html position={new THREE.Vector3(frameLineEnd[0] * 1.3, frameLineEnd[1] * 1.3, frameLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-6 p-[1px] text-[1.5px] lineText'>
          Surgical-Grade Stainless Steel
          </div>
        </Html>
            
        <primitive object={new THREE.Line(backpanelLineGeometry, appleLineMaterial)} />
          <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1, backpanelLineEnd[1] * 1.1, backpanelLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
            <div className='w-7 p-[1px] text-[2px] lineText'>
            Corning Gorilla Glass
            </div>
          </Html>
      <group position={[0, -0.371, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.37, 0]}>
            <mesh geometry={nodes.Object_12.geometry} material={materials.Metal} position={[-0.142, 0.092, 0]} rotation={[0, 0, -Math.PI / 2]} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.flash} position={[0.096, 0.213, -0.019]} rotation={[Math.PI / 2, 0, 0]} />
            <group position={[0.096, 0.213, -0.019]} rotation={[Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.Object_18.geometry} material={materials.flash} position={[0, -0.001, 0]} />
              <mesh geometry={nodes.Object_21.geometry} material={materials.Metal} position={[0, -0.001, 0]} />
              <mesh geometry={nodes.Object_24.geometry} material={materials.glass} position={[0, -0.001, 0]} />
              <mesh geometry={nodes.Object_27.geometry} material={materials.glass_blue} position={[0, 0.003, 0.028]} />
              <mesh geometry={nodes.Object_15.geometry} material={materials.black_plastic} />
            </group>
            <mesh geometry={nodes.Object_48.geometry} material={materials.glass} rotation={[Math.PI, 0, Math.PI]} />
            <mesh geometry={nodes.Object_51.geometry} material={materials.glass_blue} position={[0.043, 0.261, 0.011]} rotation={[Math.PI / 2, 0, 0]} />
            <mesh geometry={nodes.Object_57.geometry} material={materials.Metal_flat} position={[-0.027, -0.283, 0]} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.white_plastic} />
            <group position={[0.14, -0.016, 0]}>
              <mesh geometry={nodes.Object_39.geometry} material={materials.Metal} position={[-0.002, -0.02, 0]} rotation={[0, 0, -Math.PI / 2]} />
              <mesh geometry={nodes.Object_36.geometry} material={materials.Metal} />
            </group>
            <mesh geometry={nodes.Object_42.geometry} material={materials.Metal} position={[0.141, 0.119, 0]} />
            <mesh geometry={nodes.Object_33.geometry} material={materials['Metal.frame']} />
            <mesh geometry={nodes.Object_45.geometry} material={materials.black_plastic} />
            <mesh geometry={nodes.Object_54.geometry} material={materials['Material.001']} />
            <mesh geometry={nodes.Object_60.geometry} material={materials.Metal_flat} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/apple/iphonex/fullBody.json')
