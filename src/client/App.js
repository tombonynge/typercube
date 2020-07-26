import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import useStore from "./Store";
import "./app.css";
/**********COMPONENTS************/
import Cube from "./components/Cube";
import Plane from "./components/Plane";
import { Stats } from "./components/Stats";
import Input from "./components/Input";
import ScoreLight from "./components/ScoreLight";
import FailCube from "./components/FailCube";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

// console.log(<Keyboard />);

softShadows();

export default function App() {
    const [isRunning, setIsRunning] = useState(false);
    const [turnTime, setTurnTime] = useState(2000);
    const [level, setLevel] = useState(1);
    const resetScore = useStore((state) => state.resetScore);
    const mouse = useStore((state) => state.mouse);
    const updateMouse = useStore((state) => state.updateMouse);
    const setMessage = useStore((state) => state.setMessage);

    function startCube() {
        setIsRunning(true);
    }

    function resetTurnTime() {
        setTurnTime(2000);
        setLevel(1);
    }

    function stopCube() {
        setIsRunning(false);
    }

    function restart() {
        setMessage(1);
        setIsRunning(false);
        resetScore();
        setTurnTime(2000);
        setLevel(1);
    }

    function nextLevel() {
        setTurnTime(turnTime - 200);
        setLevel(level + 1);
        setMessage(2);
    }

    return (
        <>
            <Input start={startCube} isRunning={isRunning} resetTurnTime={resetTurnTime} />
            <Canvas shadowMap>
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
                        <Cube turnTime={turnTime} unmountMe={stopCube} nextLevel={nextLevel} restart={restart} />
                    </Suspense>
                )}
                <Suspense fallback={null}>{!isRunning && <FailCube />}</Suspense>
                <Plane />
                {/* <Stats /> */}
                {/* <Keyboard /> */}
            </Canvas>
            <Display isRunning={isRunning} turnTime={turnTime} nextLevel={nextLevel} level={level} />
        </>
    );
}
