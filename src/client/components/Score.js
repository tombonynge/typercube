import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../app.css";

export default function Score({ score }) {
    // useEffect(() => {
    //     console.log("mounting score");
    // }, []);

    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    return (
        <animated.div className="number" style={props}>
            {score}
        </animated.div>
    );
}
