import { Html, useGLTF } from '@react-three/drei'
import React, { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'

export const Samsung24Chip = (props) => {
  const { nodes, materials } = useGLTF('/models/samsung/SChip.glb')
  const hoveredMaterial = useMemo(() => 
    new THREE.MeshBasicMaterial({ color: 0x3BB143, side: THREE.DoubleSide, transparent: true, opacity: 0.5 }), []
  )
  const [processorHovered, setProcessorHovered] = useState(false)

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: 0xADD8E6 });
  }, []);


    //-------------Lines----------------
    const processorLineEnd = [0.2, 0, -0.2]
    const ramLineEnd = [0.2, 0.2, -.1]
    const processorLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -.1, .1),
        new THREE.Vector3(processorLineEnd[0], processorLineEnd[1], processorLineEnd[2]),
      ]);
      return geometry;
    })
  
    const ramLineGeometry = useMemo(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -.1, .1),
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
          <div className=' lineText text-[3px] p-[2px] w-5'>
          Snapdragon 8 Gen 3
          </div>
      </Html>
      <primitive object={new THREE.Line(ramLineGeometry, lineMaterial)} />
      <Html position={new THREE.Vector3(ramLineEnd[0] * 1.1, ramLineEnd[1] * 1.3 , ramLineEnd[2])} zIndexRange={[0,0]} distanceFactor={10}>
          <div className=' lineText text-[3px] p-[2px] w-3'>
            12GB
          </div>
      </Html>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w_1'].geometry} material={materials['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w']} />
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w_2'].geometry} material={materials['Material.002']} />
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w_3'].geometry} material={materials['Material.003']} />
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w_4'].geometry} material={materials['Material.004']} />
      </group>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh 
        geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w001_1'].geometry} 
        material={materials['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w']} 
        onPointerOver={() => {setProcessorHovered(true)}}
        onPointerOut={() => {setProcessorHovered(false)}}
        onClick={() => {props.setClickedMesh('processor')}}
        />
        {processorHovered && <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w001_1'].geometry} material={hoveredMaterial} />}

        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w001_2'].geometry} material={materials['Material.001']} />
        {processorHovered && <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w001_2'].geometry} material={hoveredMaterial} />}
      </group>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w002_1'].geometry} material={materials['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w']} />
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w002_2'].geometry} material={materials['Material.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w003_1'].geometry} material={materials['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w']} />
        <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w003_2'].geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w004'].geometry} material={materials['galaxy-s24-ultra-motherboard-pcb-module-1000x1000w']} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/models/samsung/SChip.glb')