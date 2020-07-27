import React, { useEffect, useState } from "react";
import { useTransition, useSpring, animated } from "react-spring";
import "../app.css";
import useStore from "../store";

export default function KeyScore({ score, char, level }) {
    const [chars, setChars] = useState([]);
    const [currentLevel, setCurrentLevel] = useState();
    const timeToCheckKeys = useStore((state) => state.timeToCheckKeys);
    // const { score } = useStore();

    useEffect(() => {
        updateChars();
    }, [score]);

    function updateChars() {
        let arr = chars;
        arr.push({ key: chars.length, text: char });
        setChars(arr);
        if (score === 0) {
            setChars([]);
        }
    }

    const transitions = useTransition(chars, (char) => char.key, {
        from: { transform: "translate3d(-40px,0,0)" },
        enter: { transform: "translate3d(0,0px,0)" },
        leave: { transform: "translate3d(-100px,0,0)" },
    });
    return transitions.map(({ item, props, key }) => (
        <animated.div style={props} key={key}>
            {item.text}
        </animated.div>
    ));
}
