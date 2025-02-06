import { Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { Samsung24FullBodyMesh } from './models/Samsung/s24/Samsung24FullBodyMesh.tsx'
import { Iphone15FullBodyMesh } from './models/Apple/iphone15/Iphone15FullBodyMesh.tsx'

const Section = (props) => {
  
  return(
  <>
        <Canvas camera={{
          fov: 64,
          position: [props.x, props.y, props.z],
        }} style={{ pointerEvents: 'auto' }}> 
          <ambientLight intensity={props.light} />
          <OrbitControls enableZoom={true} enableRotate={true} enablePan={false} ref={props.orbitRef? props.orbitRef : null}/>
          
          <ScrollControls>
            {props.children}
          </ScrollControls>
          <Environment  preset='studio' background={false} />
        </Canvas>
  </>
  )
}


export const HomePage = () => {
  const appleOrbitRef = useRef();
  const samsungOrbitRef = useRef();
  const navigate = useNavigate();

  const [animationState, setAnimationState] = useState(false)

  const onStartClick = () => {
    moveCameraToFront();
  }

  const moveCameraToFront = () => {
    if (appleOrbitRef.current && samsungOrbitRef.current) {
      const appleControls = appleOrbitRef.current;
      const samsungControls = samsungOrbitRef.current;

      const appleGsap = gsap.timeline();
      const samsungGsap = gsap.timeline();
      
      setAnimationState(true);
  
      appleGsap.to(appleControls.object.position, {
        x: 0,
        y: 2,
        z: 5, // Adjust as needed
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          appleControls.update(); // Update controls during animation
        }
      });

      appleGsap.to(appleControls.object.position, {
        x: 0,
        y: 0,
        z: 0.4, // Adjust as needed
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          appleControls.update(); // Update controls during animation
        }})

      samsungGsap.to(samsungControls.object.position, {
        x: 10,
        y: 0,
        z: 0, // Adjust as needed
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          samsungControls.update(); // Update controls during animation
        }
      });

      samsungGsap.to(samsungControls.object.position, {
        x: 0.4,
        y: 0,
        z: 0, // Adjust as needed
        duration: 1,
        ease: 'power2.inOut',
        onUpdate: () => {
          samsungControls.update(); // Update controls during animation
        }
      }).then(() => {
        navigate('/compare');
      });
    } else {
      console.log('Refs are not available:', appleOrbitRef.current, samsungOrbitRef.current);
    }
  };
  return (
      <div className='flex w-screen h-screen overflow-hidden'>
          <div className='z-20 w-full h-full overflow-hidden'>
          <Section x={2} y={2} z={10} light={20} orbitRef={appleOrbitRef}>
            <Iphone15FullBodyMesh/>
          </Section>
          </div>
          <div className='z-20 w-full h-full overflow-hidden'>
            <Section x={5} y={2} z={10} light={5} orbitRef={samsungOrbitRef}>
              <Samsung24FullBodyMesh/>
            </Section>
          </div>

      <div className='absolute h-[100%] z-0 w-[50%] bg-gradient-to-tl from-red-300 to-red-600 overflow-hidden'></div>
      <div className='absolute right-0 h-[100%] z-0 w-[50%] bg-gradient-to-tr from-blue-300 to-blue-600 overflow-hidden'></div>

        <button className='
          text-xl
          rounded-[5000px] 
          border-solid border-2 
          border-black absolute 
          bg-white 
          px-3 
          py-1.5 
          font-bold 
          bottom-[10%] 
          left-[50%] 
          translate-x-[-50%] 
          hover:translate-y-[-2px]
          hover:shadow-2xl
          hover:opacity-100
          transition-all
          opacity-80
        '
         onClick={onStartClick}
         style={{zIndex: animationState ? 0: 20}}
        >START</button>

        <div className='absolute text-center w-[100%] text-purple-100 font-bold pt-10 text-[30px] tracking-wide z-0'>Whos better?: Apple or Samsung</div>
        <div className='absolute bottom-0 text-sm font-bold text-black left-5'>iPhone 15 Pro Max</div>
        <div className='absolute bottom-0 text-sm font-bold text-black right-5'>Galaxy S24 Ultra</div>
      </div>
      
  )
}
