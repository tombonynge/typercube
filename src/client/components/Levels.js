import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "../app.css";
import useStore from "../store";
import hands from "../img/hands.png";
const list = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ({ changeLevel }) {
    const props = useSpring({
        transform: "translate3d(0,0,0)",
        from: { transform: "translate3d(-100px,0,0)" },
    });

    const onHover = (e) => {
        e.currentTarget.classList.add("active");
    };

    const offHover = (e) => {
        e.currentTarget.classList.remove("active");
    };

    const handleClick = (e) => {
        changeLevel(parseInt(e.currentTarget.firstChild.innerText));
    };

    return (
        <animated.div className="level-menu" style={props}>
            {list.map((item, index) => (
                <div className="level-item" key={index} onMouseEnter={onHover} onMouseLeave={offHover} onClick={handleClick}>
                    <div className="level-item-number">{item}</div>
                </div>
            ))}
        </animated.div>
    );
}
