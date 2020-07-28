import React, { useEffect, useState } from "react";
import useStore from "../Store";
import Score from "./Score";
import KeyScore from "./KeyScore";

export default function Display({ turnTime, gameStarted }) {
    const { score } = useStore();
    const { userChar } = useStore();

    useEffect(() => {
        console.log("display is mounting");
    }, [turnTime]);

    return (
        <>
            <div className="display typetime">Type time: {(turnTime - turnTime / 4) / 1000} seconds</div>
            {userChar && <div className="display userkey">you pressed: {userChar} </div>}
            <div className="key-score-container">
                <div className="key-score">
                    <KeyScore score={score} char={userChar} />
                </div>
            </div>
        </>
    );
}
