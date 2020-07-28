import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { getAngle } from "./Utils";

export default function ({ mouse }) {
    const mesh = useRef();
    const [oldAngle, setOldAngle] = useState({ x: 0, y: 0 });

    useFrame(() => {
        let angle = getAngle(mouse.current.x, mouse.current.y, 10);
        //add some easing so cube doesn't snap to new angle if mouse exits and re-enters window frame
        if (oldAngle.x !== angle.x) {
            let xdif = angle.x - oldAngle.x;
            angle.x = oldAngle.x + xdif * 0.1;
        }
        if (oldAngle.y !== angle.y) {
            let ydif = angle.y - oldAngle.y;
            angle.y = oldAngle.y + ydif * 0.1;
        }

        mesh.current.rotation.x = angle.y;
        mesh.current.rotation.y = angle.x;

        setOldAngle({ x: angle.x, y: angle.y });
    });

    return (
        <mesh castShadow ref={mesh} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
