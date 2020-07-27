import React, { useRef } from "react";

export default function LoadingCube() {
    const mesh = useRef();
    return (
        <mesh castShadow ref={mesh} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    );
}
