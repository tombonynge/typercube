import React, { useEffect } from "react";
import { useFrame } from "react-three-fiber";
import Textures from "./Textures";
import useStore from "../Store";

export default function Cube({ turnTime, unmountMe }) {
    //store key...global property

    const setCubeKey = useStore((state) => state.setCubeKey);
    const timeToCheckKeys = useStore((state) => state.timeToCheckKeys);
    const setLightColor = useStore((state) => state.setLightColor);
    const setRotation = useStore((state) => state.setRotation);
    // const fail = useStore((state) => state.fail);

    const mesh = React.useRef();
    const mat = Textures();

    //timing
    const timeFactor = Math.PI / (turnTime / 4);
    let startTime;
    let t;

    //angles & axes
    const angles = [(45 * Math.PI) / 180, (-45 * Math.PI) / 180];
    let angle;
    const axes = ["x", "y"];
    let axis;

    //boolean for changing cube faces prior to rotation
    let changeFaces = true;
    let faces;

    //keys
    let nextKey;
    let currentKey;

    let isMounted = true;

    useFrame(() => {
        //when component renders!
        if (isMounted) {
            isMounted = false;
            nextKey = chooseLetter();
            setCubeKey(nextKey);
            const faces = [mat[nextKey], mat[nextKey], mat[nextKey], mat[nextKey], mat[nextKey], mat[nextKey]];
            mesh.current.material = faces;
            startTime = resetTime();
            t = startTime;

            // console.log(userKey);
            console.log("CUBE JUST RENDERED");
        }

        if (t <= 0) {
            startTime = resetTime();
            t = startTime;
            mesh.current.rotation[axis] = angle > 0 ? (90 * Math.PI) / 180 : (-90 * Math.PI) / 180;
            changeFaces = true;
        }

        if (t <= turnTime / 4) {
            if (changeFaces) {
                const reset = timeToCheckKeys();
                if (reset) {
                    // reset the cube
                    unmountMe();
                    return;
                }

                axis = chooseBetween(axes);
                angle = chooseBetween(angles);

                // choose the next letter and set the current to the old next..
                currentKey = nextKey;
                nextKey = chooseLetter();

                mesh.current.rotation.x = 0;
                mesh.current.rotation.y = 0;
                mesh.current.rotation.z = 0;

                // we don't know which face will show next (rotation is random), so set all of them to be the next letter
                // except the one we are currently looking at
                faces = [mat[nextKey], mat[nextKey], mat[nextKey], mat[nextKey], mat[currentKey], mat[nextKey]];

                // set the mesh material to the faces and update
                mesh.current.material = faces;
                mesh.current.material.needsUpdate = true;

                //set global key to upcoming letter key
                setCubeKey(nextKey);
                //reset the light
                setLightColor("white");

                changeFaces = false;
            }

            let r = angle + Math.cos(t * timeFactor) * angle;
            mesh.current.rotation[axis] = r;
            setRotation(axis, r);
        }

        t = startTime - Date.now();
    });

    const resetTime = () => {
        return Date.now() + turnTime;
    };

    const chooseBetween = (arr) => {
        let index = Math.floor(Math.random() * 2);
        return arr[index];
    };

    const chooseLetter = () => {
        let index = Math.floor(Math.random() * 26);
        return index;
    };

    return (
        <mesh castShadow ref={mesh} position={[0, 0.8, 0]}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshStandardMaterial attach="material" color="red" />
        </mesh>
    );
}
