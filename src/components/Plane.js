import React, { useRef } from "react";
// import { useFrame } from "react-three-fiber";

export default function Plane() {
    return (
        <mesh
            receiveShadow
            rotation={[(-90 * Math.PI) / 180, 0, 0]}
            position={[0, -2, 0]}
        >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.1} />
        </mesh>
    );
}
