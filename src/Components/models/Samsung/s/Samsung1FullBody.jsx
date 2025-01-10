import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Samsung1FullBody(props) {
  const { nodes, materials } = useGLTF('/models/samsung/galaxyS/galaxyS.glb')

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xADD8E6 });
  }, []);
  
  const screenLineEnd = [1, -2.4, 0.5];
  const frameLineEnd = [0, 0, -1.5];
  const backpanelLineEnd = [-1, 2.4, -.4];
  
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
      new THREE.Vector3(0, -.3, -1.2),
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
        <div className='w-[120px] h-[35px] text-[15px] lineText leading-10'>
          Super AMOLED
        </div>
      </Html>
      
      <primitive object={new THREE.Line(frameLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(frameLineEnd[0], frameLineEnd[1] * 1.2, frameLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10} heig>
        <div className='w-[80px] h-[35px] text-[15px] lineText leading-10'>
          Plastic
        </div>
      </Html>
      
      <primitive object={new THREE.Line(backpanelLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1.1, backpanelLineEnd[1] * 1.1, backpanelLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-[80px] h-[35px] text-[15px] lineText leading-10'>
          Plastic
        </div>
      </Html>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[0, -0.241, 0]} scale={[0.867, 0.801, 0.761]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.007']} position={[0.19, -0.227, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.854, 1, 0.654]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.006']} position={[0.003, -0.247, 0.002]} scale={[0.867, 0.783, 0.727]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} position={[0.2, 0.956, -0.037]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.005']} position={[0.201, 0, 0]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes['647a2ca1c7675ddef0df9f0f3c1098d6'].geometry} material={materials['647a2ca1c7675ddef0df9f0f3c1098d6']} position={[0.205, 1.588, -0.005]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.284} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.010']} position={[0.163, 1.804, -0.001]} scale={0.088} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.011']} position={[0.169, 1.807, 0.642]} rotation={[0, 0, -Math.PI / 2]} scale={0.032} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.012']} position={[0.169, 1.809, 0.493]} rotation={[0, 0, -Math.PI / 2]} scale={0.032} />
      <group position={[0.141, 1.807, -0.563]} rotation={[0, 0, -Math.PI / 2]} scale={0.062}>
        <mesh geometry={nodes.Cylinder002_1.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Material.014']} />
      </group>
      <mesh geometry={nodes['647a2ca1c7675ddef0df9f0f3c1098d6001'].geometry} material={materials['647a2ca1c7675ddef0df9f0f3c1098d6']} position={[-0.201, -1.223, -0.047]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.33} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.018']} position={[0, 1.509, -0.718]} scale={0.189} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.017']} position={[-0.039, 1.457, 0.417]} scale={[0.144, 0.08, 0.023]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.016']} position={[-0.039, 1.459, 0.486]} scale={[0.144, 0.08, 0.023]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.015']} position={[-0.039, 1.46, 0.557]} scale={[0.144, 0.08, 0.023]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Material.019']} position={[0.002, 1.509, -0.718]} scale={[0.189, 0.198, 0.2]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[0.022, -1.929, 0.009]} scale={[0.185, 0.146, 0.226]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.004']} position={[0.037, -1.929, 0.009]} scale={[0.171, 0.135, 0.209]} />
      <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.008']} />
      <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.009']} />
    </group>
  )
}

useGLTF.preload('./models/samsung/galaxyS/galaxyS.glb')