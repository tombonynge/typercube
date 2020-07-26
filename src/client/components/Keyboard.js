import React, { useRef } from "react";
import useStore from "../Store";

const Key = React.memo(({ pos, size }) => {
    const ref = useRef();

    return (
        <group ref={ref}>
            <mesh position={pos}>
                <boxGeometry attach="geometry" args={[size.x, size.y, size.z]} />
                <meshStandardMaterial attach="material" color="red" />
            </mesh>
        </group>
    );
});

export default function Keyboard() {
    const keyboard = useStore((state) => state.keyboard);
    console.log(keyboard);
    return keyboard.map((data, index) => <Key key={index} pos={data.pos} size={data.size} />);
}
