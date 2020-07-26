import React, { useRef, useEffect } from "react";
import { useThree } from "react-three-fiber";
import * as THREE from "three";

export default function Camera(props) {
    const ref = useRef();
    const { setDefaultCamera } = useThree();
    // This makes sure that size-related calculations are proper
    // Every call to useThree will return this camera instead of the default camera
    useEffect(() => void setDefaultCamera(ref.current), []);
    return <perspectiveCamera ref={camera} {...props} />;
}
