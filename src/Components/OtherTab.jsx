import React, { useRef, useEffect, useState, memo } from 'react';
import { OrbitControls, ScrollControls, Environment } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import specs from '../specs.json';
import { Globe } from './models/Others/Globe';
import { Ecosystem } from './models/Others/Ecosystem';
import { Money } from './models/Others/Money';
import { SoftwareIcon } from './models/Others/SoftwareIcon';
import { Security } from './models/Others/Security';

const models = {
  popularity: Globe,
  "device ecosystem": Ecosystem,
  price: Money,
  security: Security,
  software: SoftwareIcon
};

const sectionsWithModels = ['popularity', 'device ecosystem', 'price'];
const sectionsWithImages = ['security', 'software']

const SectionComponent = memo(({ setSection, cameraRef, section, type, details }) => {
  const divRef = useRef();
  const isLarge = useRef(false);
  const isLg = window.innerWidth >= 1536;

  useEffect(() => {
    if (section === type) {
      gsap.to(divRef.current, { width: '100%', height: '100%', duration: 1 });
      isLarge.current = true;
    } else if (isLarge.current) {
      gsap.to(divRef.current, { 
        width: '100%', 
        height: isLg ? '208px' : '106.4px', 
        duration: 1 
      });
      isLarge.current = false;
    }
  }, [section, type, isLg]);

  const Model = models[type];

  return (
    <div
      ref={divRef}
      className='flex flex-col items-center overflow-hidden bg-purple-200 border-4 border-purple-500 border-solid cursor-pointer rounded-2xl hover:border-purple-600'
      onClick={() => setSection(type)}
    >
      <div className='w-full h-[98.4px] lg:h-[200px]'>
        <div className='h-[98.4px] lg:h-[200px] flex flex-col items-center'>
          {console.log(section)}
          {sectionsWithModels.includes(type) ? 
          <Section cameraRef={cameraRef} cameraPosition={[0, 0, -2]}>
            <Model />
          </Section>

          :
 
          <Model/>
          
        }
          <h1 className='mb-5 capitalize'>{type}</h1>
        </div>
        {details.map((detail, index) => (
          <span className='flex flex-col items-center w-auto px-4 text-xs' key={index}>
            <h1 className='mt-2 font-bold'>{detail.title}</h1>
            <p className='text-red-500'><b>Apple: </b>{detail.apple}</p>
            <p className='text-blue-500'><b>Samsung: </b>{detail.samsung}</p>
            <p className='text-green-600'><b>Winner: </b>{detail.winner}</p>
          </span>
        ))}
      </div>
    </div>
  );
});

const Section = ({ cameraRef, cameraPosition, children }) => (
  <Canvas camera={{ fov: 64, position: cameraPosition }}>
    <ambientLight intensity={1} />
    <OrbitControls enableZoom enableRotate enablePan={false} />
    <ScrollControls>{children}</ScrollControls>
    <Environment preset='studio' background={false} />
    <CameraHelper cameraRef={cameraRef} position={cameraPosition} />
  </Canvas>
);

const CameraHelper = ({ cameraRef, position }) => {
  const { camera } = useThree();

  useEffect(() => {
    if (cameraRef) cameraRef.current = camera;
    if (position) camera.position.set(...position);
  }, [cameraRef, camera, position]);

  return null;
};

export const OtherTab = (props) => {
  const [section, setSection] = useState('');
  const cameraRef = useRef();
  const [year, setYear] = useState(2024);

  const sections = ['popularity', 'device ecosystem', 'price', 'security', 'software'];

  return (
    <div className='z-40 grid items-start justify-center w-full grid-cols-5 gap-2 mx-10 mt-20 lg:mx-5 2xl:mx-40'>
      {sections.map((type) => (
        <SectionComponent
          key={type}
          setSection={setSection}
          cameraRef={cameraRef}
          section={section}
          type={type}
          details={specs[props.year]['other'][type]}
        />
      ))}
    </div>
  );
};
