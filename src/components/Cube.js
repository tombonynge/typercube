import React from "react";
import { useFrame } from "react-three-fiber";

export default function Cube() {
    useFrame(() => {
        mesh.current.rotation.y += 0.01;
    });

    const mesh = React.useRef();
    return (
        <mesh castShadow ref={mesh} position={[0, 1, 0]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
