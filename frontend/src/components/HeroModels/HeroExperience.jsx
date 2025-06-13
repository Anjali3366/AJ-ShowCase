import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-Width:1024px)" });
  const isMobile = useMediaQuery({ query: "(max-Width:768px)" });

  return (
    <>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40" />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="purple" />
        </mesh>
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </Canvas>
    </>
  );
};

export default HeroExperience;

// Gib 3d models
// sketch fab
