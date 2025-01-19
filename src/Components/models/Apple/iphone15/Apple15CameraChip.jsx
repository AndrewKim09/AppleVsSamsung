import { Html, useGLTF } from '@react-three/drei'
import React, { useState, useMemo, useEffect } from 'react'
import * as THREE from 'three'

export const Apple15CameraChip = (props) => {
  const { nodes, materials } = useGLTF('/models/apple/ACameraChip.json')
  
  const [mainCameraHovered, setMainCameraHovered] = useState(false)
  const [ultraWideCameraHovered, setUltraWideCameraHovered] = useState(false)
  const [telephotoCameraHovered, setTelephotoCameraHovered] = useState(false)

  const hoveredMaterial = useMemo(() => 
    new THREE.MeshBasicMaterial({ color: 0x3BB143, side: THREE.DoubleSide, transparent: true, opacity: 0.5 }), []
  )

  useEffect(() => {
    if (mainCameraHovered || ultraWideCameraHovered || telephotoCameraHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }, [mainCameraHovered || ultraWideCameraHovered || telephotoCameraHovered])

  //-------------Lines----------------
  const ultraWideLineEnd = [0.2, 0.3, 0.6]
  const telephotoLineEnd = [0.2, -0.4, .2]
  const wideLineEnd = [0.2, 0.5, 0.3]


  const appleLineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
  }, []);

  const ultraWideLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(ultraWideLineEnd[0], ultraWideLineEnd[1], ultraWideLineEnd[2])
    ]);
    return geometry;
  }, [])

  const telephotoLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.06, -0.1, -0.2),
      new THREE.Vector3(telephotoLineEnd[0], telephotoLineEnd[1], telephotoLineEnd[2])
    ]);
    return geometry;
  })

  const WideLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.06, .2, -.2),
      new THREE.Vector3(wideLineEnd[0], wideLineEnd[1], wideLineEnd[2])
    ]);
    return geometry;
  }, [])

  //-------------End of Lines----------------
  
  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(ultraWideLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(ultraWideLineEnd[0] * 1.1, ultraWideLineEnd[1] * 1.1, ultraWideLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
      <div className='w-7 p-1 text-[4px] lineText'>
          Ultra Wide
          </div>
      </Html>
      <primitive object={new THREE.Line(telephotoLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(telephotoLineEnd[0] * 1.1, telephotoLineEnd[1], telephotoLineEnd[2] * 2)} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-6 p-1 text-[4px] lineText'>
          Telephoto
        </div>
      </Html>

      <primitive object={new THREE.Line(WideLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(wideLineEnd[0] * 1.1, wideLineEnd[1] * 1.1, wideLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-6 p-1 text-[4px] lineText'>
          Wide
        </div>
      </Html>

      
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh geometry={nodes.iphonecamera_1.geometry} material={materials.iphonecamera} />
        <mesh geometry={nodes.iphonecamera_2.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.iphonecamera_3.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.iphonecamera_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.iphonecamera_5.geometry} material={materials.metalFrame} />
      </group>
      
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh 
          geometry={nodes.iphonecamera001.geometry} 
          material={materials.iphonecamera} 
          onPointerOver={() => setMainCameraHovered(true)} 
          onPointerOut={() => setMainCameraHovered(false)}
          onClick={() => {props.setClickedMesh('main')}}
        />
        {mainCameraHovered && (
          <mesh geometry={nodes.iphonecamera001.geometry} material={hoveredMaterial} renderOrder={1} />
        )}
        <mesh geometry={nodes.iphonecamera001_1.geometry} material={materials['Material.018']} />
        {mainCameraHovered && <mesh geometry={nodes.iphonecamera001_1.geometry} material={hoveredMaterial} renderOrder={1} />}
      </group>
      
      <group position={[0.011, 0.002, 0.003]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh 
          geometry={nodes.iphonecamera002.geometry} 
          material={materials.iphonecamera} 
          onPointerOver={() => setUltraWideCameraHovered(true)} 
          onPointerOut={() => setUltraWideCameraHovered(false)}
          onClick={() => {props.setClickedMesh('ultraWide')}}
        />
        {ultraWideCameraHovered && (
          <mesh geometry={nodes.iphonecamera002.geometry} material={hoveredMaterial} renderOrder={1} />
        )}
        <mesh geometry={nodes.iphonecamera002_1.geometry} material={materials['Material.018']} />
        {ultraWideCameraHovered && <mesh geometry={nodes.iphonecamera002_1.geometry} material={hoveredMaterial} renderOrder={1} />}
      </group>
      
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <mesh 
          geometry={nodes.iphonecamera003.geometry} 
          material={materials.iphonecamera} 
          onPointerOver={() => setTelephotoCameraHovered(true)}
          onPointerOut={() => setTelephotoCameraHovered(false)}
          onClick={() => {props.setClickedMesh('5xZoom')}}
        />
        {telephotoCameraHovered && (
          <mesh geometry={nodes.iphonecamera003.geometry} material={hoveredMaterial} renderOrder={1} />
        )}
        <mesh geometry={nodes.iphonecamera003_1.geometry} material={materials['Material.018']} />
        {telephotoCameraHovered && <mesh geometry={nodes.iphonecamera003_1.geometry} material={hoveredMaterial} renderOrder={1} />}
      </group>
    </group>
  )
}

useGLTF.preload('/models/apple/ACameraChip.json')
