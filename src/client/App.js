// TO DO
//// ADD BETTER TEXTURES
//// ADD 'YOU LOSE SPACE TO RESTART' TEXTURE

//// LEVELS 1 THROUGH 8.
//// SHOW WHICH KEYS AND FINGERS PER LEVEL

// DONE
//// STARTING CUBE THAT LOOKS AT MOUSE! - DONE!

import React, { useState, useCallback } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import Game from "./components/Game";
import UI from "./components/UI";
import "./app.css";
import Score from "./components/Score";
import Levels from "./components/Levels";
import useStore from "./Store";
import { SkeletonHelper } from "three";
import Helper from "./components/Helper";

// const pages = [
//     ({ style }) => <animated.div style={{ ...style, background: "lightgreen" }}>Play</animated.div>,
//     ({ style }) => <animated.div style={{ ...style, background: "lightpink" }}>Stop</animated.div>,
// ];

// function Play() {
//     const [index, set] = useState(0);
//     const onClick = useCallback(() => set((state) => (state + 1) % 2), []);
//     const transitions = useTransition(index, (p) => p, {
//         from: { opacity: 0, transform: "translate3d(100%,0,0)" },
//         enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
//         leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
//     });
//     return (
//         <div className="play" onClick={onClick}>
//             {transitions.map(({ item, props, key }) => {
//                 const Page = pages[item];
//                 return <Page key={key} style={props} />;
//             })}
//         </div>
//     );
// }

export default function App() {
    const [startGame, setStartGame] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [level, setLevel] = useState(0);
    const [endGame, setEndGame] = useState(false);
    const [help, setHelp] = useState(false);
    const props = useSpring({ transform: "translate3d(0,0,0)", from: { transform: "translate3d(0,-100%,0)" } });
    const text = ["play", "stop"];
    const test = 1;

    function changeLevel(n) {
        //zero indexed!
        setLevel(n - 1);
        console.log(level);
        setToggle(false);
    }

    function levelUp() {
        //zero indexed!
        if (level < 7) {
            setLevel(level + 1);
        } else {
            setStartGame(false);
            setEndGame(true);
        }
    }

    return (
        <>
            <animated.div className="menu" style={props}>
                <div
                    className="help btn "
                    onClick={(e) => {
                        setHelp(!help);
                        setToggle(false);
                        setStartGame(false);
                        if (document.querySelector(".play-btn")) {
                            document.querySelector(".play-btn").classList.remove("stop");
                        }
                    }}
                >
                    ?
                </div>
                {test && (
                    <div
                        className="level btn"
                        onClick={(e) => {
                            setToggle(!toggle);
                            setHelp(false);
                            setStartGame(false);
                            if (document.querySelector(".play-btn")) {
                                document.querySelector(".play-btn").classList.remove("stop");
                            }
                        }}
                    >
                        Level {level + 1}
                    </div>
                )}
                <div
                    className="play btn "
                    onClick={(e) => {
                        startGame ? e.target.classList.remove("stop") : e.target.classList.add("stop");
                        setToggle(false);
                        setStartGame(!startGame);
                        setHelp(false);

                        setEndGame(false);
                    }}
                >
                    {!startGame ? text[0] : text[1]}
                </div>
            </animated.div>

            {toggle && <Levels changeLevel={changeLevel} />}
            {endGame && (
                <div
                    className="winning-message"
                    onClick={(e) => {
                        setEndGame(false);
                    }}
                >
                    CONGRATULATIONS!! YOU ARE A MASTER TYPER
                </div>
            )}
            {help && <Helper />}
            <Game gameStarted={startGame} level={level} levelUp={levelUp} />
        </>
    );
}
