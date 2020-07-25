import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
/**********COMPONENTS************/
import Cube from "./components/Cube";
import Plane from "./components/Plane";

softShadows();

export default function App() {
    function handleKeyDown(e) {
        console.log(e.key);
    }

    return (
        <>
            <Canvas shadowMap onKeyDown={handleKeyDown}>
                <OrbitControls />
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-near={1}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <pointLight
                    position={[0, 0, 5]}
                    intensity={0.4}
                    color="white"
                />
                <pointLight
                    position={[-10, 0, 5]}
                    intensity={0.3}
                    color="#ffffff"
                />
                {/* <fog attach="fog" args={["#ffffff", 1, 10]} /> */}
                <Cube />
                <Plane />
            </Canvas>
        </>
    );
}
