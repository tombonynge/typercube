import React, { useEffect } from "react";
import useStore from "../Store";

export default function Display({ isRunning, turnTime }) {
    const { score } = useStore();
    const { userChar } = useStore();
    const { cubeKey } = useStore();
    const { clearMessage } = useStore();

    useEffect(() => {}, [clearMessage]);

    return (
        <>
            <div className="display level">
                level 1 <br /> type time: {turnTime - turnTime / 4}
            </div>
            <div className="display score">Score: {score}</div>
            {userChar && <div className="display userkey">you pressed: {userChar} </div>}
        </>
    );
}
