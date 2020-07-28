import React, { useEffect, useState } from "react";
import useStore from "../Store";
import Score from "./Score";
import KeyScore from "./KeyScore";

export default function Display({ turnTime }) {
    const { score } = useStore();
    const { userChar } = useStore();
    const [turns, setTurns] = useState([]);
    const [prevTime, setPrevTime] = useState(0);

    useEffect(() => {
        if (turnTime > prevTime) {
            setTurns([2000]);
        } else {
            let t = turns;
            t.push(turnTime);
            setTurns(t);
        }

        setPrevTime(turnTime);
    }, [turnTime]);

    return (
        <>
            {/* <div className="display typetime">Type time: {(turnTime - turnTime / 4) / 1000} seconds</div> */}
            <div className="display typetime">
                {turns.map((turn, index) => {
                    if (index === turns.length - 1) {
                        return (
                            <div className="selected" key={index}>
                                Type time: {(turn - turn / 4) / 1000} seconds
                            </div>
                        );
                    } else {
                        return <div key={index}>Type time: {(turn - turn / 4) / 1000} seconds</div>;
                    }
                })}
            </div>
            {userChar && <div className="display userkey">you pressed: {userChar} </div>}
            <div className="key-score-container">
                <div className="key-score">
                    <KeyScore score={score} char={userChar} />
                </div>
            </div>
        </>
    );
}
