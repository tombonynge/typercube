import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import useStore from "../Store";
import { Start } from "./Textures";

export default function FailCube() {
    const mesh = useRef();
    const [t, setT] = useState(6.283);
    const [axis, setAxis] = useState();
    const setLightColor = useStore((state) => state.setLightColor);

    const start = Start();

    useEffect(() => {
        setAxis(chooseBetween(["x", "y"]));
        setLightColor("white");
        mesh.current.material = start;
    }, []);

    useFrame(() => {
        if (t > 0) {
            let oldT = t;
            let angle = t * t * 0.1;
            mesh.current.rotation[axis] = angle;

            setT(oldT - 0.1);
        }
        if (t <= 0) {
            mesh.current.rotation[axis] = 0;
        }
    });

    const chooseBetween = (arr) => {
        let index = Math.floor(Math.random() * 2);
        return arr[index];
    };

    return (
        <mesh castShadow ref={mesh} position={[0, 0.8, 0]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
