import React, { useEffect } from "react";
import useStore from "../Store";

export default function Score({ start, stop }) {
    const cubeKey = useStore((state) => state.cubeKey);
    const setUserKey = useStore((state) => state.setUserKey);
    const setLightColor = useStore((state) => state.setLightColor);

    useEffect(() => {
        console.log("score is mounting");

        //if no key was pressed last round.. minus to score
        //

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    function handleKeyDown(e) {
        setUserKey(e.keyCode - 65);
        if (e.keyCode === 32) {
            //start the game!
            start();
        } else {
            if (cubeKey !== null) {
                if (e.keyCode >= 65 && e.keyCode <= 90) {
                    if (cubeKey === e.keyCode - 65) {
                        setLightColor("green");
                    } else {
                        setLightColor("red");
                    }
                }
            }
        }
    }

    return <div className="letter">{cubeKey}</div>;
}
