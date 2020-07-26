import React, { useEffect } from "react";
import useStore from "../Store";

export default function Input({ start, stop, isRunning, resetTurnTime }) {
    const cubeKey = useStore((state) => state.cubeKey);
    const setUserKey = useStore((state) => state.setUserKey);
    const setUserChar = useStore((state) => state.setUserChar);
    const setLightColor = useStore((state) => state.setLightColor);
    const setScore = useStore((state) => state.setScore);
    const resetScore = useStore((state) => state.resetScore);
    const userAttempts = useStore((state) => state.userAttempts);
    const setUserAttempts = useStore((state) => state.setUserAttempts);
    const resetUserAttempts = useStore((state) => state.resetUserAttempts);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    function handleKeyDown(e) {
        setUserKey(e.keyCode - 65);
        if (isRunning) {
            if (userAttempts === 0) {
                // update the userChar to show the key pressed on screen to user.
                // e.key for a space is '' so have to do this
                if (e.keyCode === 32) {
                    setUserChar("space");
                } else {
                    setUserChar(e.key);
                }

                if (cubeKey !== null) {
                    if (cubeKey === e.keyCode - 65) {
                        setLightColor("green");
                        // setScore();
                    } else {
                        // resetScore();
                        // resetTurnTime();
                        // stop();
                    }
                }
                setUserAttempts();
            } else {
                // maybe reset?
                // resetScore();
                // stop();
            }
        } else {
            if (e.keyCode === 32) {
                // start the game && reset the key!
                start();
                setUserChar("");
                resetUserAttempts();
            }
        }
    }

    return <></>;
}
