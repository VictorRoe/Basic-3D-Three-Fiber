import { Canvas } from "@react-three/fiber";
import { HomeScene } from "../scenes";

export const App = () => {
  return (
    <>
      <main className="app">
        <section className="hero">
          <h1>Basic 3D Three Fiber </h1>
          <p>For Victor Rangel - @victorroe_</p>
        </section>
      </main>
      <Canvas
        className="canvas"
        shadows
        camera={{ position: [0, 30, 60], fov: 15 }}
      >
        <HomeScene />
      </Canvas>
    </>
  );
};

export default App;
