import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Depth, LayerMaterial, Noise } from 'lamina'

import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, Loader, OrbitControls, ScrollControls } from '@react-three/drei'
import gsap from 'gsap'
import { CompareTables } from './CompareTables.jsx'
import specs from '../specs.json'
import { OtherTab } from './OtherTab.jsx'
import ModelManager from './models/ModelManager.jsx'

const Background = (props) => {
  const meshRef = useRef();
  const depthRef = useRef();

  useEffect(() => {
    const startAnimation = () => {
      const backgroundTimeline = gsap.timeline();
      setTimeout(() => {
        props.setPlaying(false);
      }, 1500);
      backgroundTimeline.fromTo(
        meshRef.current.scale,
        { x: 0, y: 0, z: 0 }, // starting scale
        {
          x: 10,
          y: 10,
          z: 10,
          duration: 1, // adjust duration as needed
          delay: 0.5,
          ease: 'power2.inOut',
        }
      );

      backgroundTimeline.to(meshRef.current.scale, {
        x: 100,
        y: 100,
        z: 100,
        duration: 2,
        ease: 'power2.inOut',
      }
      )
    };

    if (document.readyState === 'complete') {
      startAnimation(); // Start immediately if already loaded
    } else {
      window.addEventListener('load', startAnimation); // Wait for load event if still loading
      return () => window.removeEventListener('load', startAnimation); // Cleanup
    }
  }, []);


  useEffect(() => {
    if (props.near && props.far && props.near != props.currentNear && props.far != props.currentFar) {
      props.depthTimeline.fromTo(depthRef.current, {
        near: props.currentNear,
        far: props.currentFar
      }, {
        near: props.near,
        far: props.far,
        duration: 1,
        ease: 'power2.inOut'
      }
      )
      .then(() => {
        // props.setBackgroundAnimationPlaying(false);
        props.setCurrentNear(props.near);
        props.setCurrentFar(props.far);
      })
      return () => props.depthTimeline.kill();
    }
  }, [props.currentSection])


  return (
    <mesh scale={0} ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#f21a62"
          colorB="#0081fc"
          alpha={1}
          mode="normal"
          near={props.currentNear}
          far={props.currentFar}
          origin={[100, 100, -100]}
          ref={depthRef}
        />
        <Noise
          mapping='local'
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode='subtract'
          alpha={0.1}
        />
      </LayerMaterial>
    </mesh>
  )
}

const CameraHelper = ({ cameraRef, position }) => {
  const { camera } = useThree();

  // Set the camera ref to the camera object
  if (cameraRef) {
    cameraRef.current = camera;
  }

  // Update the camera position if provided
  if (position) {
    camera.position.set(position[0], position[1], position[2]);
  }

  return null;
};

const Section = (props) => {
  const orbitControlsRef = useRef();

  useEffect(() => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.minAzimuthAngle = props.minAzimuthAngle || -Infinity;
      orbitControlsRef.current.maxAzimuthAngle = props.maxAzimuthAngle || Infinity;
    }
  }, [props.minAzimuthAngle, props.maxAzimuthAngle]);

  return (
    <Canvas
      camera={{
        fov: 64,
        position: [props.x, props.y, props.z],
      }}
      style={{ pointerEvents: 'auto' }}
    >
      <ambientLight intensity={props.light} />
      <OrbitControls
        enableZoom={props.enableZoom}
        enableRotate={props.enableRotate}
        enablePan={false}
        ref={orbitControlsRef}
      />
      <ScrollControls>
        <Suspense fallback={null}>{props.children}</Suspense>
      </ScrollControls>
      {/* Use the CameraHelper to handle the camera ref and position */}
      <CameraHelper cameraRef={props.cameraRef} position={props.cameraPosition} />
      <Environment  preset='studio' background={false} />
      
      
    </Canvas>
  );
};



const NavButton = (props) => {
  return (
    <button className='border-2 border-solid border-[#8d21a3] text-[#8d21a3] hover:border-[#9b40ad] hover:text-[#9b40ad] px-4 py-2 z-10 rounded-lg active:border-[#f1aeff] active:text-[#f1aeff] w-[6rem] ' onClick={() => {props.onClick()}}>
      {props.text}
    </button>
  )
}

const ActiveButton = (props) => {
  return (
    <button className='border-2 border-solid border-[#9b40ad] text-[#9b40ad] px-4 py-2 z-10 rounded-lg active:border-[#f1aeff] active:text-[#f1aeff] w-[6rem]'>
      {props.text}
    </button>
  )
}

export const ComparePage = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [year, setYear] = useState("2024");
  const [timeLine, setTimeLine] = useState(true);
  const [playing, setPlaying] = useState(true);

  const depthTimeline = gsap.timeline();

  const [currentNear, setCurrentNear] = useState(180);
  const [currentFar, setCurrentFar] = useState(230);

  const appleCameraRef = useRef();
  const samsungCameraRef = useRef();
  const navBarRef = useRef();

  const depthRef = useRef();

  const [currentAppleModel, setCurrentAppleModel] = useState(null);
  const [currentSamsungModel, setCurrentSamsungModel] = useState(null);

  const [appleMinAzimuthAngle, setAppleMinAzimuthAngle] = useState(-Infinity);
  const [appleMaxAzimuthAngle, setAppleMaxAzimuthAngle] = useState(Infinity);

  const [samsungMinAzimuthAngle, setSamsungMinAzimuthAngle] = useState(-Infinity);
  const [samsungMaxAzimuthAngle, setSamsungMaxAzimuthAngle] = useState(Infinity);

  const [clickedMesh, setClickedMesh] = useState(null);

  const [otherTab, setOtherTab] = useState(false);

  const onChangeModels = (models, section, positions, appleMinAzimuthAngle, appleMaxAzimuthAngle, samsungMinAzimuthAngle, samsungMaxAzimuthAngle) => {
    setOtherTab(false);
    if(playing) return;
    if(!depthTimeline.isActive()) {
        setAppleMinAzimuthAngle(appleMinAzimuthAngle);
        setAppleMaxAzimuthAngle(appleMaxAzimuthAngle);
        setSamsungMinAzimuthAngle(samsungMinAzimuthAngle);
        setSamsungMaxAzimuthAngle(samsungMaxAzimuthAngle);

      if (appleCameraRef.current) {
        appleCameraRef.current.position.set(positions[0][0], positions[0][1], positions[0][2]);
      }
      if (samsungCameraRef.current) {
        samsungCameraRef.current.position.set(positions[1][0], positions[1][1], positions[1][2]);
      }

      setCurrentAppleModel(models[0]);
      setCurrentSamsungModel(models[1]);
      setCurrentSection(section);
    }
  };

  const changeYear = (year) => {
    setCurrentAppleModel(null);
    setCurrentSamsungModel(null);
    setCurrentSection("");
    setYear(year);
    setTimeLine(false);
  }

  const onHover = (id) => {
    if(playing) return;
    const element = document.getElementById(id);
    const image = document.getElementById(`image${id}`);
  
    element.style.opacity = 1;
    image.style.opacity = 1;
    image.style.top = '-350px';
  }
  
  const onLeave = (id) => {
    const element = document.getElementById(id);
    const image = document.getElementById(`image${id}`);
  
    image.style.opacity = 0;
    element.style.opacity = 0;
    image.style.top = '-250px';
  }
  
  return (
    <div className='relative flex w-screen h-screen overflow-hidden'>
      <div className='absolute w-full h-full'>
      
        <Section x={-12} y={10} z={-10} light={5} enableZoom={false} enableRotate={false}>
          <Background 
            depthRef={depthRef} 
            near={currentSection? specs[year][currentSection].depth.near : 180} 
            far={currentSection? specs[year][currentSection].depth.far : 230}
            currentNear={currentNear}
            currentFar={currentFar}
            setCurrentNear={setCurrentNear}
            setCurrentFar={setCurrentFar}
            currentSection={currentSection}
            depthTimeline={depthTimeline}
            setPlaying={setPlaying}
          />
        </Section>
      </div>

    { !timeLine && 
    <>
    <button className='absolute z-40 px-2 py-1 bg-white border-solid rounded-sm top-5 left-5' onClick={() => setTimeLine(!timeLine)}>{year}</button>
    <div className='absolute w-[100vw] flex justify-center gap-2 overflow-hidden top-3 left-[50%] translate-x-[-50%] z-20' ref={navBarRef}>
      {["fullbody", "chip", "battery", "camera"].map((section) => (
        currentSection === section ? 
            <ActiveButton text={section.charAt(0).toUpperCase() + section.slice(1)} /> : 
            <NavButton 
                text={section.charAt(0).toUpperCase() + section.slice(1)} 
                onClick={() => {
                    const config = ModelManager.getModels(year, section, setClickedMesh);
                    if (config) {
                        onChangeModels(
                            config.models,
                            section,
                            config.positions,
                            ...config.rotationLimits
                        );
                    }
                }} 
            />
      ))}

      {otherTab ? (
        <ActiveButton text="Other" />
      ) : (
        <NavButton text="Other" onClick={() => setOtherTab(true)} />
      )}
        
      </div>

      {!otherTab && 
      <div className='flex w-screen h-screen'>
        <Suspense fallback={<Loader />}>
          <div className='w-[50vw] h-full flex justify-center items-center'>
            <Section x={2} y={4} z={6} light={1} enableZoom={true} enableRotate={true} cameraRef={appleCameraRef} minAzimuthAngle={appleMinAzimuthAngle} maxAzimuthAngle={appleMaxAzimuthAngle}>
              {currentAppleModel}
            </Section>
          </div>
          <div className='w-[50vw] h-full flex justify-center items-center'>
            <Section x={2} y={2} z={10} light={1} enableZoom={true} enableRotate={true} cameraRef={samsungCameraRef} minAzimuthAngle={samsungMinAzimuthAngle} maxAzimuthAngle={samsungMaxAzimuthAngle}>
            {currentSamsungModel}
            </Section>
          </div>
        </Suspense>

      </div>
      }

      {otherTab &&
        <OtherTab year={year}/>
      }
      
      {!otherTab && currentSection && <CompareTables data={specs[year][currentSection]} clickedMesh={clickedMesh}/>}
      </>
  }

  { timeLine &&
  <>
  <div className='timeline m-0 relative w-full top-[50%] translate-y-[-50%]'>
    <div className='grid grid-cols-[1fr_2fr_1fr_1fr] align-middle  absolute translate-y-[-50%] top-[50%] w-full justify-between z-10 px-[10%]'>
      <div className='relative flex justify-center'>
        <button className='relative p-4 year bg-inherit top-10 ' onMouseEnter={() => {onHover('2010')}} onMouseLeave={() => {onLeave('2010')}} onClick={() => {changeYear('2010')}}>
          2010
        </button>
        <div id="2010" className='rounded-lg p-4 absolute w-[300px] h-[200px] bg-white opacity-0 top-[150px] left-[50%] translate-x-[-50%] duration-[800ms] text-sm'>
          The beginning of a rivalry between Apple and Samsung with Samsungs first smartphone, 
          the Galaxy S. However, Apple was already a well established company with the iPhone 4 that resulted in a lawsuit between the two companies.
          Apple ultimately won the lawsuit and Samsung had to pay Apple $1 billion in damages.
        </div>
        <img id="image2010" src="/samsungVsApple2010.png" className=' min-h-[300px] min-w-[300px] absolute top-[-250px] opacity-0 duration-[800ms]'/>
      </div>
      <div className='relative flex justify-center'>
        <button className='relative p-4 year bg-inherit top-10 ' onMouseEnter={() => {onHover('2017')}} onMouseLeave={() => {onLeave('2017')}} onClick={() => {changeYear('2017')}}>
          2017
        </button>
        <div id="2017" className='rounded-lg p-4 absolute w-[300px] h-[200px] bg-white opacity-0 top-[150px] left-[50%] translate-x-[-50%] duration-[800ms] text-sm'>
          At this stage, Apple and Samsung were both well established companies with a large market share, with Samsung having the larger share.
        </div>
        <img id="image2017" src="/samsungVsApple2017.png" className=' min-h-[375px] h-[375px] min-w-[300px] w-[300px]  absolute top-[-250px] opacity-0 duration-[800ms]'/>
      </div> 
      
      <div className='relative flex justify-center'>
        <button className='relative p-4 year bg-inherit top-10 ' onMouseEnter={() => {onHover('2023')}} onMouseLeave={() => {onLeave('2023')}} onClick={() => {changeYear('2023')}}>
          2023
        </button>
        <div id="2023" className='rounded-lg p-4 absolute w-[300px] h-[200px] bg-white opacity-0 top-[150px] left-[50%] translate-x-[-50%] duration-[800ms] text-sm'>
          Samsung and Apple are now the top 2 smartphone manufacturers with a combined market share of over 40%. Both constantly innovating and pushing the boundaries of technology.
        </div>
        <img id="image2023" src="/samsungVsApple2023.png" className=' min-h-[300px] min-w-[300px] absolute top-[-250px] opacity-0 duration-[800ms]'/>
      </div>

      <div className='relative flex justify-center'>
        <button className='relative p-4 year bg-inherit top-10 ' onMouseEnter={() => {onHover('2024')}} onMouseLeave={() => {onLeave('2024')}} onClick={() => {changeYear('2024')}}>
          2024
        </button>
        <div id="2024" className='rounded-lg p-4 absolute w-[300px] h-[200px] bg-white opacity-0 top-[150px] left-[50%] translate-x-[-50%] duration-[800ms] text-sm'>
          The latest year with the most recent data on the market share of Apple and Samsung.
        </div>
        <img id="image2024" src="/samsungVsApple2024.png" className=' min-h-[300px] min-w-[300px] absolute top-[-250px] opacity-0 duration-[800ms]'/>
      </div>
    </div>
  </div>

  </>

  }
   </div>
  )
}
