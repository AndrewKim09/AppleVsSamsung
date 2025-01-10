import { Html, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

interface IphoneFullBodyProps {
  setClickedMesh: (meshName: string) => void;
}

export function Iphone15FullBodyMesh(props: IphoneFullBodyProps) {
  const { camera, size } = useThree();
  const { nodes, materials } = useGLTF('models/iPhoneFullBody2.json') as any;

  const blackMaterial = useMemo(() => new THREE.MeshBasicMaterial({ color: 0x000000 }), []);

  return (
    <group {...props} dispose={null}>

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
      <mesh geometry={nodes.Cube040.geometry} material={blackMaterial} position={[0.025, 2.384 - .5, 0.091]} rotation={[0, -1.571, 0]} scale={[0.087, 1, 1]} />
      <mesh geometry={nodes.Cube041.geometry} material={materials.gray} position={[0.012, -1.036 - .5, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={0.736} />
      <mesh geometry={nodes.Cube042.geometry} material={materials.gray} position={[0.006, -1.024 - .5, 0.004]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SCreen.geometry} material={blackMaterial} position={[0.027, 0.957 - .5, 0.002]} rotation={[0, -1.571, 0]} scale={[0.748, 1, 1]} >
      </mesh>
      <group position={[0.027, 0.957 - .5, 0.002]} rotation={[0, -1.571, 0]} scale={[0.748, 1, 1]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials.backpanel} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.glass} />
      </group>
    </group>
  );
}

useGLTF.preload('models/iPhoneFullBody2.json');
