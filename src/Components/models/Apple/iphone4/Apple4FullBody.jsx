import React, { useMemo } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Apple4FullBody(props) {
  const { nodes, materials } = useGLTF('/models/Apple/iphone4/fulllBody.json')

    const screenLineEnd = [10, 20, 5];
    const frameLineEnd = [1, 0, 18];
    const backpanelLineEnd = [-4, -25, 0];
  
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

  return (
    <group {...props} dispose={null}>
      <primitive object={new THREE.Line(screenLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(screenLineEnd[0] * 1.1, screenLineEnd[1], screenLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-[580px] h-[200px]  p-1 text-[100px] lineText'>
           IPS LCD
          </div>
      </Html>

      <primitive object={new THREE.Line(frameLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(frameLineEnd[0] * 1.1, frameLineEnd[1] * 1.3, frameLineEnd[2] * 1.1)} zIndexRange={[0,0]} distanceFactor={10}>
          <div className='w-[1080px] h-[200px]  p-1 text-[130px] lineText'>
            Stainless Steel
          </div>
      </Html>

      <primitive object={new THREE.Line(backpanelLineGeometry, appleLineMaterial)} />
      <Html position={new THREE.Vector3(backpanelLineEnd[0] * 1.1, backpanelLineEnd[1], backpanelLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
        <div className='w-[1280px] h-[200px]  p-1 text-[130px] lineText'>
          Corning Gorilla Glass
        </div>
      </Html>
      <group position={[0, 0.102, 0.237]} rotation={[-Math.PI / 2, -0.002, Math.PI]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.564, -18.073, -0.114]} scale={[1.834, 14.595, 14.653]}>
            <mesh geometry={nodes.Object_38.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_39.geometry} material={materials['Material.004']} />
          </group>
          <group position={[2.022, 10.449, -0.235]} rotation={[0, 0, -Math.PI / 2]} scale={[2.405, 1.18, 2.405]}>
            <mesh geometry={nodes.Object_68.geometry} material={materials['Material.004']} position={[0, 0.113, 0]} />
          </group>
          <group position={[0.192, -18.029, -7.306]} rotation={[Math.PI, 0, Math.PI]} scale={[0.76, 3.639, 1.454]}>
            <mesh geometry={nodes.Object_29.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_30.geometry} material={materials['Material.004']} />
          </group>
          <group position={[2.127, 17.821, -0.268]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1.049, 3.639, 2.005]}>
            <mesh geometry={nodes.Object_45.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_46.geometry} material={materials['Material.004']} />
          </group>
          <group position={[0.192, -18.029, 7.025]} rotation={[Math.PI, 0, Math.PI]} scale={[0.76, 3.639, 1.454]}>
            <mesh geometry={nodes.Object_32.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_33.geometry} material={materials['Material.004']} />
          </group>
          <group position={[0.704, 18.673, 7.595]} rotation={[0, 0, -Math.PI / 2]} scale={[1.397, 1.338, 1.397]}>
            <mesh geometry={nodes.Object_35.geometry} material={materials['Material.011']} />
            <mesh geometry={nodes.Object_36.geometry} material={materials['Material.016']} />
          </group>
          <group position={[-1.431, 17.806, -3.927]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.238, 0.2, 0.238]}>
            <mesh geometry={nodes.Object_54.geometry} material={materials['Material.017']} />
            <mesh geometry={nodes.Object_55.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_56.geometry} material={materials['Material.019']} />
          </group>
          <group position={[1.74, 18.673, 7.596]} rotation={[0, 0, -Math.PI / 2]} scale={[0.362, 0.317, 0.362]}>
            <mesh geometry={nodes.Object_50.geometry} material={materials['Material.017']} />
            <mesh geometry={nodes.Object_51.geometry} material={materials['Material.018']} />
            <mesh geometry={nodes.Object_52.geometry} material={materials['Material.016']} />
          </group>
          <group position={[0.171, -22.296, -0.204]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[0.999, 0.58, 4.328]}>
            <mesh geometry={nodes.Object_41.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_42.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_43.geometry} material={materials['Material.004']} />
          </group>
          <group position={[0.189, -0.365, -0.431]} scale={[1.444, 14.764, 15.071]}>
            <mesh geometry={nodes.Object_11.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_12.geometry} material={materials['Material.006']} />
          </group>
          <group position={[0.189, -0.365, -0.431]} scale={[1.834, 14.595, 14.653]}>
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['Material.004']} />
          </group>
          <group position={[0.178, 20.612, -6.786]} rotation={[Math.PI, 0, Math.PI]} scale={[1.347, 1.315, 1.347]}>
            <mesh geometry={nodes.Object_22.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Object_23.geometry} material={materials['Material.006']} />
          </group>
          <mesh geometry={nodes.Object_58.geometry} material={materials['Material.017']} position={[-1.431, 17.806, -3.927]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.19, 0.099, 0.19]} />
          <mesh geometry={nodes.Object_60.geometry} material={materials['Material.017']} position={[1.74, 18.673, 7.596]} rotation={[0, 0, -Math.PI / 2]} scale={[0.288, 0.156, 0.288]} />
          <mesh geometry={nodes.Object_62.geometry} material={materials['Material.020']} position={[1.944, 18.654, 5.241]} rotation={[0, 0, -Math.PI / 2]} scale={[0.204, 0.018, 0.204]} />
          <mesh geometry={nodes.Object_64.geometry} material={materials['Material.021']} position={[-1.497, -0.121, -0.127]} rotation={[Math.PI, 0, 0]} scale={[-0.098, -14.213, -9.455]} />
          <mesh geometry={nodes.Object_16.geometry} material={materials['Material.004']} position={[-0.105, 16.712, -11.515]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} scale={[1.147, 27.639, 0.272]} />
          <mesh geometry={nodes.Object_25.geometry} material={materials['Material.004']} position={[0.167, 8.424, -10.192]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.938, 1.338, 0.938]} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['Material.004']} position={[0.178, 20.435, 5.307]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[1.49, 0.545, 1.812]} />
          <mesh geometry={nodes.Object_14.geometry} material={materials['Material.004']} position={[0.182, -0.089, 10.877]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[3.666, 3.639, 0.562]} />
          <mesh geometry={nodes.Object_48.geometry} material={materials['Material.006']} position={[0.442, -21.381, -0.228]} rotation={[Math.PI, 0, Math.PI]} scale={[0.107, 0.276, 3.426]} />
          <mesh geometry={nodes.Object_66.geometry} material={materials['Material.022']} position={[1.842, 18.654, 5.241]} rotation={[0, 0, -Math.PI / 2]} scale={[0.503, 0.158, 0.503]} />
          <mesh geometry={nodes.Object_20.geometry} material={materials['Material.004']} position={[0.179, -21.027, 4.889]} rotation={[Math.PI, 0, 0]} scale={[0.343, 0.811, 0.343]} />
          <mesh geometry={nodes.Object_18.geometry} material={materials['Material.004']} position={[0.179, -21.027, -5.293]} rotation={[Math.PI, 0, 0]} scale={[0.343, 0.811, 0.343]} />
          <mesh geometry={nodes.Object_27.geometry} material={materials['Material.004']} position={[0.188, 12.303, -10.188]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.938, 1.338, 0.938]} />
        </group>
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('./models/Apple/iphone4/fulllBody.json')
