import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { meshBounds, OrbitControls, Sparkles } from "@react-three/drei";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });
  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles
        count={100}
        scale={1}
        size={6}
        noise={0.2}
        speed={0.04}
        color={"red"}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas
        style={{
          height: "100vh",
          width: "100vw, ",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight
          position={[1, 1, 1]}
          intensity={10}
          color={0x9cdba6}
        />
        <color args={["#0F0F0F"]} />
        <RotatingCube />
      </Canvas>
    </>
  );
}

export default App;
