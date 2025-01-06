import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { useReducer, useRef } from 'react'

export const Ecosystem = (props) => {
  const { nodes, materials } = useGLTF('/models/ecosystem.glb')
  const groupRef = useRef();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y -= 0.01; // Adjust this value for speed
    }
  });
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group position={[0.033, -0.038, -0.014]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.419}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -3.5, -66.5]} rotation={[1.309, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube002_Material006_0.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Cube002_Material005_0_1.geometry} material={materials.framne} />
            <mesh geometry={nodes.Cube002_Material005_0_2.geometry} material={materials.camera} />
          </group>
          <mesh geometry={nodes.Cube_Material005_0.geometry} material={materials['Material.023']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
      <group position={[0.406, 0.016, -0.26]} rotation={[-1.253, -1.415, -2.969]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.708, -0.736, 4.583]} rotation={[0, 0, 0.065]} scale={0.914}>
            <mesh geometry={nodes.Back_cover_Black_Glossy2_0.geometry} material={materials.Black_Glossy2} />
            <mesh geometry={nodes.Back_cover_Black_Glossy_0.geometry} material={materials.Black_Glossy} />
            <mesh geometry={nodes.Back_cover_Glass_Clear2_0.geometry} material={materials.Glass_Clear2} />
          </group>
          <group position={[16.249, 8.337, 10.526]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.99, 0.99, 0.894]}>
            <mesh geometry={nodes.Button_Black2_0.geometry} material={materials.Black2} />
            <mesh geometry={nodes.Button_Iron_Clean2_0.geometry} material={materials.Iron_Clean2} />
            <mesh geometry={nodes.Button_Iron_Clean_0.geometry} material={materials.Iron_Clean} />
          </group>
          <group position={[-1.708, 1.559, 10.091]}>
            <mesh geometry={nodes['Cap_Material_#1898_0'].geometry} material={materials.Material_1898} position={[0, 0, -5.35]} />
          </group>
          <group position={[-1.708, -0.146, 10.091]}>
            <group position={[0, 0, -5.35]}>
              <mesh geometry={nodes.Case_Iron_Clean2_0.geometry} material={materials.Iron_Clean2} />
              <mesh geometry={nodes.Case_Iron_Clean_0.geometry} material={materials.Iron_Clean} />
            </group>
          </group>
          <group position={[-1.708, -0.146, 14.314]} scale={0.999}>
            <group position={[0, 0, -9.573]}>
              <mesh geometry={nodes.Case_2_Black_Glossy_TEXT_0.geometry} material={materials.Black_Glossy_TEXT} />
              <mesh geometry={nodes.Case_2_Black_Glossy_0.geometry} material={materials.Black_Glossy} />
            </group>
          </group>
          <group position={[-1.963, -6.058, -44.509]} scale={0.993}>
            <group position={[0, 5.981, 49.034]}>
              <mesh geometry={nodes.Rivet_Iron_Clean2_0.geometry} material={materials.Iron_Clean2} />
              <mesh geometry={nodes.Rivet_Iron_Clean3_0.geometry} material={materials.Iron_Clean3} />
            </group>
          </group>
          <group position={[-1.708, -0.146, 14.237]} scale={0.999}>
            <mesh geometry={nodes.Screen_Screen_1_0.geometry} material={materials.Screen_1} position={[0, 0, -9.573]} />
          </group>
          <mesh geometry={nodes.Glass_Glass_Clear_0.geometry} material={materials.Glass_Clear} position={[-1.708, -0.146, 4.741]} />
          <mesh geometry={nodes['Sensor_Material_#2034_0'].geometry} material={materials.Material_2034} position={[-1.708, -0.736, 3.935]} rotation={[0, 0, 0.065]} scale={0.914} />
          <mesh geometry={nodes.Strap_Rubber_0.geometry} material={materials.Rubber} position={[-1.81, -0.119, 4.597]} scale={0.993} />
        </group>
      </group>
      <group position={[-0.504, 0.086, -0.113]} rotation={[0.557, 0.17, -1.353]} scale={[0.254, 0.268, 0.254]}>
        <group position={[-0.012, -0.134, 0]} scale={[0.539, 0.539, 0.061]}>
          <mesh geometry={nodes.Cube005.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.Cube005_1.geometry} material={materials.Silver} />
        </group>
        <group position={[-0.032, -0.081, 0]} scale={[0.539, 0.539, 0.07]}>
          <mesh geometry={nodes.Cube004.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.Cube004_1.geometry} material={materials['Screen.001']} />
        </group>
        <mesh geometry={nodes.Cam_1.geometry} material={materials.Silver} position={[-0.371, 0.821, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={[0.113, 0.051, 0.113]} />
        <mesh geometry={nodes.Cam_2.geometry} material={materials.Silver} position={[-0.371, 0.554, 0.047]} rotation={[Math.PI / 2, 0, 0]} scale={[0.113, 0.054, 0.113]} />
        <mesh geometry={nodes.Cam_3.geometry} material={materials.Silver} position={[-0.371, 0.292, 0.05]} rotation={[Math.PI / 2, 0, 0]} scale={[0.113, 0.054, 0.113]} />
        <mesh geometry={nodes.Cam_4.geometry} material={materials.Silver} position={[-0.131, 0.56, 0.055]} rotation={[Math.PI / 2, 0, 0]} scale={[0.072, 0.051, 0.072]} />
        <mesh geometry={nodes.Cam_5.geometry} material={materials.Silver} position={[-0.131, 0.817, 0.055]} rotation={[Math.PI / 2, 0, 0]} scale={[0.072, 0.032, 0.072]} />
        <mesh geometry={nodes.Cam_board_1.geometry} material={materials['Material.025']} position={[-0.373, 0.822, 0.069]} rotation={[Math.PI / 2, 0, 0]} scale={[0.094, 0.004, 0.094]} />
        <mesh geometry={nodes.Cam_board_2.geometry} material={materials['Material.025']} position={[-0.373, 0.558, 0.069]} rotation={[Math.PI / 2, 0, 0]} scale={[0.094, 0.004, 0.094]} />
        <mesh geometry={nodes.Cam_board_3.geometry} material={materials['Material.025']} position={[-0.373, 0.296, 0.069]} rotation={[Math.PI / 2, 0, 0]} scale={[0.094, 0.004, 0.094]} />
        <mesh geometry={nodes.Cam_board_4.geometry} material={materials['Material.025']} position={[-0.13, 0.818, 0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.061, 0.003, 0.061]} />
        <mesh geometry={nodes.Cam_board_5.geometry} material={materials['Material.025']} position={[-0.133, 0.56, 0.07]} rotation={[Math.PI / 2, 0, 0]} scale={[0.061, 0.003, 0.061]} />
        <mesh geometry={nodes['Cam_G;lass_1'].geometry} material={materials['Material.026']} position={[-0.373, 0.819, 0.105]} rotation={[Math.PI / 2, 0, 0]} scale={[0.096, 0.004, 0.096]} />
        <mesh geometry={nodes['Cam_G;lass_1001'].geometry} material={materials['Material.026']} position={[-0.371, 0.556, 0.106]} rotation={[Math.PI / 2, 0, 0]} scale={[0.102, 0.004, 0.102]} />
        <mesh geometry={nodes['Cam_G;lass_1002'].geometry} material={materials['Material.026']} position={[-0.373, 0.291, 0.109]} rotation={[Math.PI / 2, 0, 0]} scale={[0.096, 0.004, 0.096]} />
        <mesh geometry={nodes['Cam_G;lass_1003'].geometry} material={materials['Material.026']} position={[-0.131, 0.818, 0.085]} rotation={[Math.PI / 2, 0, 0]} scale={[0.064, 0.003, 0.064]} />
        <mesh geometry={nodes['Cam_G;lass_1004'].geometry} material={materials['Material.026']} position={[-0.131, 0.56, 0.1]} rotation={[Math.PI / 2, 0, 0]} scale={[0.064, 0.003, 0.064]} />
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
        <mesh geometry={nodes.Power_Btn.geometry} material={materials['Material.025']} position={[-0.507, 0.057, 0]} scale={[0.105, 0.084, 0.019]} />
        <mesh geometry={nodes.S_pen.geometry} material={materials['Material.025']} position={[0.469, -1.213, -0.001]} scale={[0.035, 0.102, 0.026]} />
        <mesh geometry={nodes.Volume_Btn.geometry} material={materials['Material.025']} position={[-0.507, 0.427, 0]} scale={[0.105, 0.152, 0.019]} />
      </group>
      <mesh geometry={nodes.NurbsPath.geometry} material={materials['Material.016']} />
      <mesh geometry={nodes.NurbsPath001.geometry} material={materials['Material.011']} position={[0.239, -0.377, 0.38]} />
      <mesh geometry={nodes.NurbsPath002.geometry} material={materials['Material.009']} position={[-0.194, -0.644, -0.691]} />
      <mesh geometry={nodes.NurbsPath003.geometry} material={materials['Material.007']} position={[-0.99, -0.802, -1.056]} />
      <mesh geometry={nodes.NurbsPath004.geometry} material={materials['Material.006']} position={[-1.558, -0.326, -0.869]} />
      <mesh geometry={nodes.NurbsPath005.geometry} material={materials['Material.021']} position={[-2.197, -0.591, -0.92]} />
      <mesh geometry={nodes.NurbsPath006.geometry} material={materials['Material.017']} position={[0.203, -0.259, -0.572]} />
      <mesh geometry={nodes.NurbsPath007.geometry} material={materials['Material.020']} position={[0.709, 0.354, -0.001]} />
      <mesh geometry={nodes.NurbsPath008.geometry} material={materials['Material.022']} position={[0.567, 1.195, 0.291]} />
      <mesh geometry={nodes.NurbsPath009.geometry} material={materials['Material.018']} position={[-2.445, -0.484, -1.205]} />
      <mesh geometry={nodes.NurbsPath010.geometry} material={materials['Material.008']} position={[-2.551, -0.514, -0.666]} />
      <mesh geometry={nodes.NurbsPath011.geometry} material={materials['Material.004']} position={[-1.581, -0.183, -0.753]} />
      <mesh geometry={nodes.NurbsPath012.geometry} material={materials['Material.010']} position={[-0.557, 0.313, -0.37]} />
      <mesh geometry={nodes.NurbsPath013.geometry} material={materials['Material.019']} position={[-0.863, 0.083, 1.496]} />
      <mesh geometry={nodes.NurbsPath014.geometry} material={materials['Material.013']} position={[-0.989, -0.3, 1.108]} />
      <mesh geometry={nodes.NurbsPath015.geometry} material={materials['Material.012']} position={[-1.08, -0.101, 1.509]} />
      <mesh geometry={nodes.NurbsPath016.geometry} material={materials['Material.014']} position={[-1.048, -0.246, 1.245]} />
      <mesh geometry={nodes.NurbsPath017.geometry} material={materials['Material.015']} position={[-1.512, -0.294, 1.287]} />
      <mesh geometry={nodes.NurbsPath018.geometry} material={materials['Material.002']} position={[-2.84, -0.344, 1.994]} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials.Material} position={[0.587, 0.554, 0.583]} scale={0.049} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials.Material} position={[0.591, 0.707, -0.396]} scale={0.049} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials.Material} position={[-0.144, 0.711, -0.686]} scale={0.049} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials.Material} position={[-0.858, 0.38, 0.353]} scale={0.049} />
      <mesh geometry={nodes.Sphere005.geometry} material={materials.Material} position={[0.003, 0.986, -0.002]} scale={0.049} />
      <mesh geometry={nodes.Sphere006.geometry} material={materials.Material} position={[-0.319, 0.928, 0.221]} scale={0.049} />
      <mesh geometry={nodes.Sphere007.geometry} material={materials.Material} position={[-0.326, 0.395, 0.86]} scale={0.049} />
      <mesh geometry={nodes.Sphere008.geometry} material={materials.Material} position={[-0.357, -0.382, 0.85]} scale={0.049} />
      <mesh geometry={nodes.Sphere009.geometry} material={materials.Material} position={[0.811, -0.556, -0.165]} scale={0.049} />
      <mesh geometry={nodes.Sphere010.geometry} material={materials.Material} position={[0.592, -0.698, 0.366]} scale={0.049} />
      <mesh geometry={nodes.Sphere011.geometry} material={materials.Material} position={[-0.327, -0.848, 0.415]} scale={0.049} />
      <mesh geometry={nodes.Sphere012.geometry} material={materials.Material} position={[0.013, -0.989, -0.002]} scale={0.049} />
      <mesh geometry={nodes.Sphere013.geometry} material={materials.Material} position={[-0.463, -0.557, -0.696]} scale={0.049} />
      <mesh geometry={nodes.Sphere014.geometry} material={materials.Material} position={[-0.69, 0.198, -0.693]} scale={0.049} />
    </group>
  )
}
useGLTF.preload('/models/ecosystem.glb')
