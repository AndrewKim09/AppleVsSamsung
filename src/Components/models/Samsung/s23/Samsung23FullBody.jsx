import React from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useMemo } from 'react';
import * as THREE from 'three';

export function Samsung23FullBody(props) {
  const { nodes, materials } = useGLTF('/models/samsung/s23ultra/samsungs23ultra.json') 
  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xADD8E6 });
  }, []);
  
  const screenLineEnd = [0.05, -.05, 0.1];
  const frameLineEnd = [0.04, 0.16, 0];
  const backpanelLineEnd = [0.1, 0.1, -.1];

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
        <div className='w-3 p-[0.4px] px-[0.2px] text-[0.7px] lineText'>
          Dynamic AMOLED 2X
        </div>
      </Html>
      
      <primitive object={new THREE.Line(frameLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(frameLineEnd[0], frameLineEnd[1] * 1.2, frameLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-4 p-[1px] text-[1px] lineText leading-[2px]'>
          Grade 2 Titanium
        </div>
      </Html>
      
      <primitive object={new THREE.Line(backpanelLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1.1, backpanelLineEnd[1] * 1.3, backpanelLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-4 p-[0.5px]  text-[1px] lineText leading-[1px]'>
          Corning Gorilla Glass Victus 2
        </div>
      </Html>
      <group position={[0.014, 0, 0]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['screen outline']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.side} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['side control']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['back cover']} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials['front camera outline']} />
        <mesh geometry={nodes.Cube003_5.geometry} material={materials['front camera lens']} />
        <mesh geometry={nodes.Cube003_6.geometry} material={materials.speakers} />
        <mesh geometry={nodes.Cube003_7.geometry} material={materials['charger.001']} />
        <mesh geometry={nodes.Cube003_8.geometry} material={materials['back camera outline']} />
        <mesh geometry={nodes.Cube003_9.geometry} material={materials['back camera']} />
        <mesh geometry={nodes.Cube003_10.geometry} material={materials.LED} />
        <mesh geometry={nodes.Cube003_11.geometry} material={materials['LED flash']} />
        <mesh geometry={nodes.Cube003_12.geometry} material={materials.lidar} />
        <mesh geometry={nodes.Cube003_13.geometry} material={materials['pen room']} />
        <mesh geometry={nodes.Cube003_14.geometry} material={materials.headphones} />
        <mesh geometry={nodes.Cube003_15.geometry} material={materials['samsung logo']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/samsung/s23ultra/samsungs23ultra.json')