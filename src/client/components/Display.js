import React, { useEffect, useState } from "react";
import useStore from "../Store";
import Score from "./Score";
import KeyScore from "./KeyScore";
import Level from "./Level";

export default function Display({ turnTime, level }) {
    const { score } = useStore();
    const { resetScore } = useStore();
    const { userChar } = useStore();
    const [string, setString] = useState();
    // const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    useEffect(() => {
        console.log("display is mounting");
    }, [turnTime, level]);

    return (
        <>
            <div className="display level">level {level}</div>
            <div className="display typetime">type time: {(turnTime - turnTime / 4) / 1000} s</div>
            {/* <div className="display score">
                Score:
                <Score key={score} score={score} />
            </div> */}
            {/* {userChar && <div className="display userkey">you pressed: {userChar} </div>} */}
            <div className="display key-score">
                <KeyScore score={score} char={userChar} />
            </div>
            {/* <div className="display level">
                <Level level={level} />
            </div> */}
        </>
    );
}
