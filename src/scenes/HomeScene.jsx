import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stars,
} from "@react-three/drei";

export const HomeScene = () => {
  return (
    <>
      <OrbitControls />

      <Environment preset="city" />

      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>

      <group position={(0, -3, 0)}>
        {/* cube */}
        <mesh castShadow receiveShadow position={[0, 1, 0]}>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial
            color="#FF5E71"
            envMapIntensity={0.5}
            roughness={1}
            metalness={0.8}
          />
        </mesh>

        <mesh castShadow receiveShadow position={[6, 1.5, 0]}>
          <coneGeometry args={[3, 8, 34]} />
          <meshStandardMaterial
            color="#2E86C1"
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        <mesh castShadow receiveShadow position={[-6, 2, 0]}>
          <sphereGeometry args={[2, 32, 16]} />
          <meshStandardMaterial
            color="#F5B041"
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Base */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[10, 10, 10, 64]} />
          <meshStandardMaterial
            color="white"
            envMapIntensity={0.5}
            roughness={0}
            metalness={0}
          />
        </mesh>
      </group>
      <Stars
        radius={120}
        depth={50}
        count={5000}
        factor={20}
        saturation={0}
        fade
        speed={2}
      />
    </>
  );
};
