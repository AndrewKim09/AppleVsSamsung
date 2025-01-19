import { Html, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

interface IphoneFullBodyProps {
  setClickedMesh: (meshName: string) => void;
}

export function Iphone15FullBody(props: IphoneFullBodyProps) {
  const [screenHovered, setScreenHovered] = useState(false);
  const { camera, size } = useThree();
  const { nodes, materials } = useGLTF('/models/iPhoneFullBody2.json') as any;

  //----------LINES----------
  const screenLineEnd = [-2, 1, 0.5];
  const frameLineEnd = [-2, 0, -0.2];
  const backpanelLineEnd = [1, 1, -.4];

  const appleLineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xEE4B2B });
  }, []);

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
      new THREE.Vector3(-.4, -.3, 0),
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

  //-----------end LINES----------

  const hoveredMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: 0x3BB143,
        side: THREE.FrontSide,
        transparent: true,
        opacity: 0.3,
      }),
    []
  );  

  useEffect(() => {
    document.body.style.cursor = screenHovered ? 'pointer' : 'default';
  }, [screenHovered]);

  return (
    <group {...props} dispose={null}>
      {/* Line connecting to target mesh point */}
      <primitive object={new THREE.Line(screenLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(screenLineEnd[0] * 1.1, screenLineEnd[1] * 1.3, screenLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-24 p-1 text-xs lineText'>
            Super Retina XDR OLED
          </div>
      </Html>

      <primitive object={new THREE.Line(frameLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(frameLineEnd[0] * 1.1, frameLineEnd[1] * 1.3, frameLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-24 p-1 text-xs lineText'>
            Grade 5 Titanium
          </div>
      </Html>

      <primitive object={new THREE.Line(backpanelLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1.1, backpanelLineEnd[1] * 1.3, backpanelLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-24 p-1 text-xs lineText'>
          Matte Glass
        </div>
      </Html>

      <group position={[0.027, 0.957 - .5, 0.002]} rotation={[0, -1.571, 0]} scale={[0.748, 1, 1]}>
        <mesh geometry={nodes.Cube039_1.geometry} material={materials.backpanel} />
        <mesh geometry={nodes.Cube039_2.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Cube039_3.geometry} material={materials.gray} />
        <mesh geometry={nodes.Cube039_4.geometry} material={materials.black} />
      </group>
      <mesh geometry={nodes.Cube034.geometry} material={materials.backpanel} position={[0.353, 1.947 - .5, -0.117]} rotation={[0, 1.571, 0]} scale={[0.025, 0.352, 0.352]} />
      <mesh geometry={nodes.Cube035.geometry} material={materials.metalframe} position={[0.844, 1.218 - .5, 0.002]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes.Cube036.geometry} material={materials.metalframe} position={[-0.792, 1.209 - .5, 0.002]} rotation={[0, -1.571, 0]} />
      <mesh geometry={nodes.Cube037.geometry} material={materials.metalframe} position={[-0.792, 1.528 - .5, 0.002]} rotation={[0, -1.571, 0]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials.metalframe} position={[-0.788, 1.896 - .5, 0.002]} rotation={[0, -1.571, 0]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials.metalframe} position={[-0.777, 0.52 - .5, 0.002]} rotation={[Math.PI, 1.571, 0]} scale={[-1.132, -1, -1]} />
      <group position={[0.576, 2.236 - .5, -0.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.184}>
        <mesh geometry={nodes.Cylinder031.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Cylinder031_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cylinder031_2.geometry} material={materials.lens} />
      </group>
      <group position={[0.17, 2.02 - .5, -0.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.184}>
        <mesh geometry={nodes.Cylinder032.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Cylinder032_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cylinder032_2.geometry} material={materials.lens} />
      </group>
      <mesh geometry={nodes.Cylinder027.geometry} material={materials.gray} position={[0.169, 1.711 - .5, -0.025]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.074} />
      <group position={[0.167, 2.324 - .5, -0.068]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.085}>
        <mesh geometry={nodes.Cylinder034.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Cylinder034_1.geometry} material={materials.lens} />
      </group>
      <mesh geometry={nodes.Cylinder029.geometry} material={materials.gray} position={[0.037, 1.792 - .5, -0.11]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.009, 0.033, 0.009]} />
      <group position={[0.576, 1.799 - .5, -0.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.184}>
        <mesh geometry={nodes.Cylinder036.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Cylinder036_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.Cylinder036_2.geometry} material={materials.lens} />
      </group>
      <mesh geometry={nodes.Cube040.geometry} material={materials.black} position={[0.025, 2.384 - .5, 0.091]} rotation={[0, -1.571, 0]} scale={[0.087, 1, 1]} />
      <mesh geometry={nodes.Cube041.geometry} material={materials.gray} position={[0.012, -1.036 - .5, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={0.736} />
      <mesh geometry={nodes.Cube042.geometry} material={materials.gray} position={[0.006, -1.024 - .5, 0.004]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh onPointerEnter={() => {setScreenHovered(true)}} onPointerLeave={() => {setScreenHovered(false)}} geometry={nodes.SCreen.geometry} material={materials.black} position={[0.027, 0.957 - .5, 0.002]} rotation={[0, -1.571, 0]} scale={[0.748, 1, 1]} >
      </mesh>
      {screenHovered && <mesh geometry={nodes.SCreen.geometry} material={hoveredMaterial} position={[0.027, 0.957 - .5, 0.002]} rotation={[0, -1.571, 0]} scale={[0.748, 1, 1]} />}
      <group position={[0.027, 0.957 - .5, 0.002]} rotation={[0, -1.571, 0]} scale={[0.748, 1, 1]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.backpanel} />

        <mesh geometry={nodes.Cube003_1.geometry} material={materials.glass} />
      </group>
    </group>
  );
}

useGLTF.preload('/models/iPhoneFullBody2.json');
