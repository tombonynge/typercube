import React, { useEffect, useState } from "react";
import useStore from "../Store";

export default function Display({ turnTime, level }) {
    const { score } = useStore();
    const { resetScore } = useStore();
    const { userChar } = useStore();
    const [string, setString] = useState();

    useEffect(() => {
        // if (score > 10) {
        //     console.log("next level!");
        //     nextLevel();
        //     resetScore();
        // }
    });

    return (
        <>
            <div className="display level">
                level {level} <br /> type time: {(turnTime - turnTime / 4) / 1000} s
            </div>
            <div className="display score">
                Score: {score} <br /> {string}
            </div>
            {userChar && <div className="display userkey">you pressed: {userChar} </div>}
        </>
    );
}
