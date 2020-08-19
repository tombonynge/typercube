import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, softShadows } from "drei";
import useStore from "../Store";
import "../app.css";
/**********COMPONENTS************/
import { getMousePos } from "./Utils";
import Loading from "./Loading";
import IntroCube from "./IntroCube";
import Cube from "./Cube";
import Plane from "./Plane";
import { Stats } from "./Stats";
import Input from "./Input";
import ScoreLight from "./ScoreLight";
import FailCube from "./FailCube";
import Display from "./Display";
import Keyboard from "./Keyboard";
import LoadingCube from "./LoadingCube";

// console.log(<Keyboard />);
const turns = [2000, 1750, 1500, 1250, 1000, 750];

softShadows();

export default function Game({ gameStarted, level, levelUp }) {
    const [isRunning, setIsRunning] = useState(false);
    const [turnTime, setTurnTime] = useState(2000);
    const setUserChar = useStore((state) => state.setUserChar);
    const resetScore = useStore((state) => state.resetScore);
    const setMessage = useStore((state) => state.setMessage);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // document.querySelector("Canvas").parentElement.classList.add("canvas-container");
        hardReset();
    }, [gameStarted, level]);

    function startCube() {
        setIsRunning(true);
        setUserChar(null);
    }

    function resetTurnTime() {
        // setTurnTime(2000);
        // setLevel(1);
    }

    function winLevel() {
        setMessage(3);
        setIsRunning(false);
        setTurnTime(2000);
        resetScore();
        levelUp();
    }

    function stopCube() {
        setIsRunning(false);
    }

    function hardReset() {
        setMessage(0);
        setIsRunning(false);
        resetScore();
        setTurnTime(2000);
        // setLevel(1);
    }

    function restart() {
        setMessage(1);
        setIsRunning(false);
        resetScore();
        setTurnTime(2000);
        // setLevel(1);
    }

    function decreaseTurnTime() {
        setTurnTime(turnTime - 200);
        setMessage(2);
    }

    return (
        <>
            <Input start={startCube} stop={restart} isRunning={isRunning} resetTurnTime={resetTurnTime} />
            <Canvas shadowMap onMouseMove={(e) => (mouse.current = getMousePos(e))}>
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={0.5}
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

                <Suspense fallback={<Loading />}>{!gameStarted && <IntroCube mouse={mouse} />}</Suspense>

                <Suspense fallback={<LoadingCube />}>
                    {gameStarted && isRunning && (
                        <Cube
                            turnTime={turnTime}
                            unmountMe={stopCube}
                            decreaseTurnTime={decreaseTurnTime}
                            restart={restart}
                            level={level}
                            winLevel={winLevel}
                        />
                    )}
                </Suspense>

                <Suspense fallback={null}>{gameStarted && !isRunning && <FailCube />}</Suspense>
                <Plane />
            </Canvas>
            {gameStarted && <Display turnTime={turnTime} />}
        </>
    );
}
