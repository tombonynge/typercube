import React, { useEffect } from "react";
import useStore from "../Store";
//map keycodes to my weird keyorder (because of levels)
const keyMapping = [24, 11, 16, 15, 14, 7, 10, 1, 12, 4, 13, 18, 5, 2, 17, 22, 23, 6, 20, 9, 3, 8, 19, 21, 0, 25];

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
        setUserKey(keyMapping[e.keyCode - 65]);
        if (isRunning) {
            if (userAttempts === 0) {
                //set the user char here..so user can see what key they pressed..
                if (e.keyCode === 32) {
                    setUserChar("space");
                } else {
                    setUserChar(e.key);
                }

                // update the userChar to show the key pressed on screen to user.
                // e.key for a space is '' so have to do this
                if (cubeKey !== null) {
                    if (cubeKey === keyMapping[e.keyCode - 65]) {
                        setLightColor("seagreen");
                        setScore();
                    } else {
                        setLightColor("lightcoral");
                    }
                }

                let n = userAttempts;
                setUserAttempts(n + 1);
                console.log("user attempts:", n + 1);
            } else {
                // maybe reset?
                resetScore();
                stop();
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
