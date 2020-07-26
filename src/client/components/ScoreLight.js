import React, { useRef } from "react";
import useStore from "../Store";
import { useFrame } from "react-three-fiber";

export default function ScoreLight() {
    const light = useRef();
    const lightColor = useStore((state) => state.lightColor);

    return <pointLight ref={light} position={[0, 0, 5]} intensity={0.4} color={lightColor} />;
}
