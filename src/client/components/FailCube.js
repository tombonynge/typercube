import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";
import useStore from "../Store";
import { Messages } from "./Textures";

export default function FailCube() {
    const mesh = useRef();
    const [t, setT] = useState(6.283);
    const [axis, setAxis] = useState();
    const [sign, setSign] = useState();
    const setLightColor = useStore((state) => state.setLightColor);
    const material = Messages();
    const message = useStore((state) => state.message);

    useEffect(() => {
        setAxis(chooseBetween(["x", "y", "both"]));
        setSign(chooseBetween([-1, 1]));
        setLightColor("white");
        mesh.current.material = material[message];
    }, []);

    useFrame(() => {
        if (t > 0) {
            let oldT = t;
            let angle = t * t * 0.1 * sign;
            if (axis === "both") {
                mesh.current.rotation.x = angle;
                mesh.current.rotation.y = angle;
            } else {
                mesh.current.rotation[axis] = angle;
            }

            setT(oldT - 0.1);
        }
        if (t <= 0) {
            mesh.current.rotation[axis] = 0;
        }
    });

    const chooseBetween = (arr) => {
        let index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };

    return (
        <mesh castShadow ref={mesh} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
