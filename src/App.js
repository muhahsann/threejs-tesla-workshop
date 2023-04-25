import "./App.css";
import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { useRef, useEffect, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Orbit = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
};

const Box = (props) => {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/wood.jpeg");

  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref} {...props} castShadow>
      <sphereBufferGeometry />
      <meshPhysicalMaterial
        map={texture}
        // color="white"
        // // opacity={0.5}
        // transparent
        // roughness={0}
        // clearcoat={1}
        // transmission={0.7}
        // reflectivity={1}
        // side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial />
    </mesh>
  );
};

const Background = (props) => {
  const texture = useLoader(THREE.TextureLoader, "/autoshop.jpg");
  const { gl } = useThree();

  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted.texture} />;
};
const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 20, 20]} />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};
function App() {
  // const points = []
  // points.push(new THREE.Vector3(0,1, 1))
  // points.push(new THREE.Vector3(0, 0, 0))
  // points.push(new THREE.Vector3(0, 1, -1))

  // const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        shadowMap
        style={{ background: "black" }}
        camera={{ position: [3, 3, 3] }}
      >
        <ambientLight intensity={0.2} />
        <Bulb position={[0, 3, 0]} />
        <Orbit />
        <axesHelper args={[5]} />
        <Suspense fallback={null}>
          <Box position={[0, 1, 0]} />
        </Suspense>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <Floor position={[0, -0.5, 0]} />
        {/* <line geometry={lineGeometry}>
          <lineBasicMaterial attach="material" color={'#9c88ff'} linewidth={10} linecap={'round'} linejoin={'round'} />
        </line> */}
      </Canvas>
    </div>
  );
}

export default App;
