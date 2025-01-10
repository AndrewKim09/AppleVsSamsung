import { Html, useGLTF } from '@react-three/drei'
import React, { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'

export const Apple15Chip = (props) => {
  const { nodes, materials } = useGLTF('/models/apple/AChip.json')
  const testMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const hoveredMaterial = useMemo(() => 
    new THREE.MeshBasicMaterial({ color: 0x3BB143, side: THREE.DoubleSide, transparent: true, opacity: 0.5 }), []
  )
  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
  }, []);
  const [processorHovered, setProcessorHovered] = useState(false)

  //-------------Lines----------------
  const processorLineEnd = [0.2, 0, 0.4]
  const ramLineEnd = [0.1, 0.2, 0.3]
  const processorLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0.1, 0),
      new THREE.Vector3(processorLineEnd[0], processorLineEnd[1], processorLineEnd[2]),
    ]);
    return geometry;
  })

  const ramLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0.1, 0),
      new THREE.Vector3(ramLineEnd[0], ramLineEnd[1], ramLineEnd[2]),
    ]);
    return geometry;
  }, [])

  //-------------End of Lines----------------

  useEffect(() => {
    if (processorHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
}, [processorHovered])
  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(processorLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(processorLineEnd[0] * 1.1, 0.05, processorLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
          <div className=' lineText text-[3px] p-[2px] w-4'>
           A17 Pro
          </div>
      </Html>
      <primitive object={new THREE.Line(ramLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(ramLineEnd[0] * 1.1, ramLineEnd[1] , ramLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
          <div className=' lineText text-[3px] p-[2px] w-3'>
            8GB
          </div>
      </Html>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu001_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu001_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.iphone15promaxcpu001_3.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.iphone15promaxcpu001_4.geometry} material={materials.Material} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu002_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu002_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu002_2.geometry} material={materials['Material.003']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu003_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu003_1.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.iphone15promaxcpu003_2.geometry} material={materials['Material.003']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu004_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu004_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu004_2.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu005_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu005_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu005_2.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu006_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu006_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu006_2.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu007_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu007_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu007_2.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu008_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu008_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu008_2.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu009.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu009.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu009_1.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu010_1.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu010_1.geometry} material={testMaterial} />
        <mesh geometry={nodes.iphone15promaxcpu010_2.geometry} material={materials['Material.001']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh 
        geometry={nodes.iphone15promaxcpu011.geometry} material={materials['iphone15promaxcpu.001']} 
        onPointerOver={() => {setProcessorHovered(true)}}
        onPointerOut={() => {setProcessorHovered(false)}}
        onClick={() => {props.setClickedMesh('processor')}}
        />
        <mesh geometry={nodes.iphone15promaxcpu011.geometry} material={testMaterial} />
        {processorHovered && <mesh geometry={nodes.iphone15promaxcpu011.geometry} material={hoveredMaterial} />}
        <mesh geometry={nodes.iphone15promaxcpu011_1.geometry} material={materials['Material.002']} />
      </group>
      <group rotation={[0, 0, -Math.PI / 2]} scale={[0.571, 0.777, 0.571]}>
        <mesh geometry={nodes.iphone15promaxcpu012.geometry} material={materials['iphone15promaxcpu.001']} />
        <mesh geometry={nodes.iphone15promaxcpu012.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.iphone15promaxcpu012_1.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}
useGLTF.preload('/models/apple/AChip.json')
