import { useProgress } from "@react-three/drei";
import { ClipLoader, PulseLoader } from "react-spinners";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Add a background for visibility
      position: 'fixed', // Ensure it covers the entire screen
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2000, // Ensure it's on top
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'


    }}>
      <PulseLoader color={'#fff'} loading={true} size={15} />
      <h1 style={{ color: '#fff', marginTop: '1rem' }}>{Math.floor(progress)}%</h1>
    </div>
  );
}