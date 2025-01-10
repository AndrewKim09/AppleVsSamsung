import { Html, useGLTF } from "@react-three/drei";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import * as THREE from "three";

export const Samsung24CameraChip = (props) => {
  const { nodes, materials } = useGLTF("/models/samsung/SCameraChip.json");
  const frame = new THREE.MeshStandardMaterial({
    color: 0xb6b6b6,
    roughness: 0,
    metalness: 1,
    transparent: false,
    opacity: 1,
  });

  const hoveredMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: 0x3bb143,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      }),
    []
  );
  const [mainCameraHovered, setMainCameraHovered] = useState(false);
  const [ultraWideCameraHovered, setUltraWideCameraHovered] = useState(false);
  const [threeXZoomCameraHovered, setThreeXZoomCameraHovered] = useState(false);
  const [fiveXZoomCameraHovered, setFiveXZoomCameraHovered] = useState(false);

  //-------------Lines----------------
  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xADD8E6 });
  }, []);

  const ultraWideLineEnd = [0.2, 1, -.2];
  const wideAngleLineEnd = [0.2, 0.7, -0.3];
  const telephotoTenXLineEnd = [0.2, -.9, 0];
  const telephotoThreeXLineEnd = [0.2, .1, -.6];

  const ultraWideLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.11, 0.7, 0.3),
      new THREE.Vector3(ultraWideLineEnd[0], ultraWideLineEnd[1], ultraWideLineEnd[2]),
    ]);
    return geometry;
  }, []);

  const wideAngleLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.11, 0, 0.3),
      new THREE.Vector3(wideAngleLineEnd[0], wideAngleLineEnd[1], wideAngleLineEnd[2]),
    ]);
    return geometry;
  }, []);

  const telephotoTenXLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.11, -0.7, 0.3),
      new THREE.Vector3(telephotoTenXLineEnd[0], telephotoTenXLineEnd[1], telephotoTenXLineEnd[2]),
    ]);
    return geometry;
  }, []);

  const telephotoThreeXLineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.11, 0, 0.-.15),
      new THREE.Vector3(telephotoThreeXLineEnd[0], telephotoThreeXLineEnd[1], telephotoThreeXLineEnd[2]),
    ]);
    return geometry;
  }, []);

  //-------------End of Lines----------------

  useEffect(() => {
    if (mainCameraHovered || ultraWideCameraHovered || threeXZoomCameraHovered || fiveXZoomCameraHovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
}, [mainCameraHovered || ultraWideCameraHovered || threeXZoomCameraHovered || fiveXZoomCameraHovered])
  return (
    <group {...props} dispose={null}>

      <primitive object={new THREE.Line(ultraWideLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(ultraWideLineEnd[0], ultraWideLineEnd[1] * 1.05, ultraWideLineEnd[2])}>
        <div className='w-24 p-1 text-xs lineText'>
          Ultra Wide
        </div>
      </Html>

      <primitive object={new THREE.Line(wideAngleLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(wideAngleLineEnd[0], wideAngleLineEnd[1] * 1.05, wideAngleLineEnd[2])}>
        <div className='w-24 p-1 text-xs lineText'>
          Wide Angle
        </div>
      </Html>

      <primitive object={new THREE.Line(telephotoTenXLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(telephotoTenXLineEnd[0], telephotoTenXLineEnd[1] * 1.05, telephotoTenXLineEnd[2])}>
        <div className='w-24 p-1 text-xs lineText'>
          Telephoto 10x
        </div>
      </Html>

      <primitive object={new THREE.Line(telephotoThreeXLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(telephotoThreeXLineEnd[0], telephotoThreeXLineEnd[1] * 1.05, telephotoThreeXLineEnd[2])}>
        <div className='w-24 p-1 text-xs lineText'>
          Telephoto 3x
        </div>
      </Html>



      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={2.255}>
        <mesh
          geometry={nodes.camera001_1.geometry}
          material={materials.camera}
        />
        <mesh
          geometry={nodes.camera001_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.camera001_3.geometry}
          material={materials.metalframe}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={2.255}>
        <mesh
          geometry={nodes.camera002.geometry}
          material={materials.camera}
          onPointerOver={() => {
            setUltraWideCameraHovered(true);
          }}
          onPointerOut={() => {
            setUltraWideCameraHovered(false);
          }}
          onClick={() => {
            props.setClickedMesh("ultraWide")
          }}
        />{/*ultra wide camera*/}
        {ultraWideCameraHovered && (
          <mesh
            geometry={nodes.camera002.geometry}
            material={hoveredMaterial}
            renderOrder={1}
          />
        )}
        <mesh
          geometry={nodes.camera002_1.geometry}
          material={materials["Material.001"]}
        />
        {ultraWideCameraHovered && (
          <mesh
            geometry={nodes.camera002_1.geometry}
            material={hoveredMaterial}
            renderOrder={1}
          />
        )}
      </group>
      <mesh
        geometry={nodes.wide2x.geometry}
        material={materials.camera}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.255}
        onPointerOver={() => {
          setMainCameraHovered(true);
        }}
        onPointerOut={() => {
          setMainCameraHovered(false);
        }}
        onClick={() => {
          props.setClickedMesh("main")
        }}
      />{/*main Camera*/}
      {mainCameraHovered && (
        <mesh
          geometry={nodes.wide2x.geometry}
          material={hoveredMaterial}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={2.255}
          renderOrder={1}
        />
      )}
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={2.255}>
        <mesh
          geometry={nodes.camera004.geometry}
          material={materials.camera}
          onPointerOver={() => {
            setThreeXZoomCameraHovered(true);
          }}
          onPointerOut={() => {
            setThreeXZoomCameraHovered(false);
          }}
          onClick={() => {
            props.setClickedMesh("3xZoom")
          }}
        />{/*3xzoom camera*/}
        {threeXZoomCameraHovered && (
          <mesh
            geometry={nodes.camera004.geometry}
            material={hoveredMaterial}
            renderOrder={1}
          />
        )}
        <mesh
          geometry={nodes.camera004_1.geometry}
          material={materials["Material.001"]}
        />
        {threeXZoomCameraHovered && (
          <mesh
            geometry={nodes.camera004_1.geometry}
            material={hoveredMaterial}
            renderOrder={1}
          />
        )}
      </group>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={2.255}>
        <mesh
          geometry={nodes.camera005.geometry}
          material={materials.camera}
          onPointerOver={() => {
            setFiveXZoomCameraHovered(true);
          }}
          onPointerOut={() => {
            setFiveXZoomCameraHovered(false);
          }}
          onClick={() => {
            props.setClickedMesh("5xZoom")
          }}
        />{/*5x zoom camera*/}
        {fiveXZoomCameraHovered && (
          <mesh
            geometry={nodes.camera005.geometry}
            material={hoveredMaterial}
            renderOrder={1}
          />
        )}
        <mesh
          geometry={nodes.camera005_1.geometry}
          material={materials["Material.001"]}
        />
        {fiveXZoomCameraHovered && (
          <mesh
            geometry={nodes.camera005_1.geometry}
            material={hoveredMaterial}
            renderOrder={1}
          />
        )}
      </group>
    </group>
  );
};

useGLTF.preload("/samsung/SCameraChip.json");
