import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { Group } from 'three';
import * as THREE from 'three';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Samsung24FullBodyMesh(props) {
  const { nodes, materials } = useGLTF('./models/SamsungFullBody.glb') as any
  const ref = useRef<Group>(null);
  
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[0.006, 0.002, 0.004]} rotation={[0, -1.567, 0]} scale={[2.132, 2.246, 2.132]}>
        <group position={[-0.012, -0.134, 0]} scale={[0.539, 0.539, 0.061]}>
          <mesh geometry={nodes.Cube005.geometry} material={materials['Material.002']} /> {/*Frame*/}
          <mesh geometry={nodes.Cube005_1.geometry} material={materials.Silver} />
        </group>
        <group position={[-0.032, -0.081, 0]} scale={[0.539, 0.539, 0.07]}>
          <mesh geometry={nodes.Cube004.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube004_1.geometry} material={materials['Screen.001']}/>{/*screen*/ }
        </group>
        <mesh geometry={nodes.Cam_1.geometry} material={materials.Silver} position={[-0.371, 0.821, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={[0.113, 0.051, 0.113]} />
        <mesh geometry={nodes.Cam_2.geometry} material={materials.Silver} position={[-0.371, 0.554, 0.047]} rotation={[Math.PI / 2, 0, 0]} scale={[0.113, 0.054, 0.113]} />
        <mesh geometry={nodes.Cam_3.geometry} material={materials.Silver} position={[-0.371, 0.292, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={[0.113, 0.054, 0.113]} />
        <mesh geometry={nodes.Cam_4.geometry} material={materials.Silver} position={[-0.131, 0.56, 0.055]} rotation={[Math.PI / 2, 0, 0]} scale={[0.072, 0.051, 0.072]} />
        <mesh geometry={nodes.Cam_5.geometry} material={materials.Silver} position={[-0.131, 0.817, 0.055]} rotation={[Math.PI / 2, 0, 0]} scale={[0.072, 0.032, 0.072]} />
        <mesh geometry={nodes.Cam_board_1.geometry} material={materials['Material.002']} position={[-0.373, 0.822, 0.069]} rotation={[Math.PI / 2, 0, 0]} scale={[0.094, 0.004, 0.094]} />
        <mesh geometry={nodes.Cam_board_2.geometry} material={materials['Material.002']} position={[-0.373, 0.558, 0.069]} rotation={[Math.PI / 2, 0, 0]} scale={[0.094, 0.004, 0.094]} />
        <mesh geometry={nodes.Cam_board_3.geometry} material={materials['Material.002']} position={[-0.373, 0.296, 0.069]} rotation={[Math.PI / 2, 0, 0]} scale={[0.094, 0.004, 0.094]} />
        <mesh geometry={nodes.Cam_board_4.geometry} material={materials['Material.002']} position={[-0.13, 0.818, 0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.061, 0.003, 0.061]} />
        <mesh geometry={nodes.Cam_board_5.geometry} material={materials['Material.002']} position={[-0.133, 0.56, 0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.061, 0.003, 0.061]} />
        <mesh geometry={nodes['Cam_G;lass_1'].geometry} material={materials['Material.004']} position={[-0.373, 0.819, 0.105]} rotation={[Math.PI / 2, 0, 0]} scale={[0.096, 0.004, 0.096]} />
        <mesh geometry={nodes['Cam_G;lass_1001'].geometry} material={materials['Material.004']} position={[-0.371, 0.556, 0.106]} rotation={[Math.PI / 2, 0, 0]} scale={[0.102, 0.004, 0.102]} />
        <mesh geometry={nodes['Cam_G;lass_1002'].geometry} material={materials['Material.004']} position={[-0.373, 0.291, 0.109]} rotation={[Math.PI / 2, 0, 0]} scale={[0.096, 0.004, 0.096]} />
        <mesh geometry={nodes['Cam_G;lass_1003'].geometry} material={materials['Material.004']} position={[-0.131, 0.818, 0.085]} rotation={[Math.PI / 2, 0, 0]} scale={[0.064, 0.003, 0.064]} />
        <mesh geometry={nodes['Cam_G;lass_1004'].geometry} material={materials['Material.004']} position={[-0.131, 0.56, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.064, 0.003, 0.064]} />
        <mesh geometry={nodes.Charge_pin.geometry} material={materials.Silver} position={[0, -1.274, 0.003]} scale={[0.074, 0.032, 0.003]} />
        <mesh geometry={nodes.Flash.geometry} material={materials.Flash} position={[-0.131, 0.688, 0.082]} scale={[0.028, 0.028, 0.007]} />
        <mesh geometry={nodes.Lens_1.geometry} material={materials.Lens} position={[-0.375, 0.823, 0.082]} scale={[0.032, 0.032, 0.019]} />
        <mesh geometry={nodes.Lens_2.geometry} material={materials.Lens} position={[-0.375, 0.556, 0.082]} scale={[0.032, 0.032, 0.019]} />
        <mesh geometry={nodes.Lens_3.geometry} material={materials.Lens} position={[-0.375, 0.295, 0.082]} scale={[0.039, 0.039, 0.023]} />
        <mesh geometry={nodes.Lens_4.geometry} material={materials.Lens} position={[-0.133, 0.556, 0.082]} scale={[0.022, 0.022, 0.013]} />
        <mesh geometry={nodes.Lens_board_1.geometry} material={materials['Screen.001']} position={[-0.375, 0.825, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[0.049, 0.028, 0.049]} />
        <mesh geometry={nodes.Lens_board_2.geometry} material={materials['Screen.001']} position={[-0.375, 0.555, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[0.049, 0.028, 0.049]} />
        <mesh geometry={nodes.Lens_board_3.geometry} material={materials['Screen.001']} position={[-0.375, 0.295, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[0.055, 0.031, 0.055]} />
        <mesh geometry={nodes.Lens_board_4.geometry} material={materials['Screen.001']} position={[-0.133, 0.558, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[0.033, 0.019, 0.033]} />
        <mesh geometry={nodes.Power_Btn.geometry} material={materials['Material.002']} position={[-0.507, 0.057, 0]} scale={[0.105, 0.084, 0.019]} />
        <mesh geometry={nodes.S_pen.geometry} material={materials['Material.002']} position={[0.469, -1.213, -0.001]} scale={[0.035, 0.102, 0.026]} />
        <mesh geometry={nodes.Volume_Btn.geometry} material={materials['Material.002']} position={[-0.507, 0.427, 0]} scale={[0.105, 0.152, 0.019]} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/SamsungFullBody.glb')