import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import useStore from "./Store";
import "./app.css";
/**********COMPONENTS************/
import Cube from "./components/Cube";
import Plane from "./components/Plane";
import Loading from "./components/Loading";
import { Stats } from "./components/Stats";
import Score from "./components/Score";
import ScoreLight from "./components/ScoreLight";
import FailCube from "./components/FailCube";

softShadows();

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [turnTime, setTurnTime] = useState(2000);

    function startCube() {
        setIsRunning(true);
    }

    function stopCube() {
        setIsRunning(false);
    }

    return (
        <>
            <Score start={startCube} />
            <Canvas concurrent shadowMap>
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
                <ScoreLight />
                <pointLight position={[-10, 0, 5]} intensity={0.3} color="#ffffff" />
                <fog attach="fog" args={["#ffffff", 1, 10]} />
                {isRunning && (
                    <Suspense fallback={null}>
                        <Cube turnTime={turnTime} unmountMe={stopCube} />
                    </Suspense>
                )}
                {!isRunning && <FailCube />}
                <Plane />
                <Stats />
            </Canvas>
        </>
    );
}
