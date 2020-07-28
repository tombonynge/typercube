import create from "zustand";
import * as THREE from "three";

const [useStore] = create((set, get) => ({
    // keep track of which key should be pressed (an index)
    cubeKey: 0,
    setCubeKey: (key) => set({ cubeKey: key }),

    //user's key (an index)
    userKey: 0,
    setUserKey: (key) => set({ userKey: key }),

    //Actual users key character
    userChar: null,
    setUserChar: (char) => set({ userChar: char }),

    // count of times user inputs key (prevents scoring more than once per letter)
    userAttempts: 0,
    setUserAttempts: (n) => set({ userAttempts: n }),
    resetUserAttempts: () => set({ userAttempts: 0 }),

    // check if user input any key ...to handle 'no key entered'.
    fail: false,
    timeToCheckKeys: () => {
        const userKey = get().userKey;
        const cubeKey = get().cubeKey;
        console.log("userKey", userKey);
        console.log("cubeKey", cubeKey);
        if (userKey !== cubeKey) {
            set({ fail: true });
            return true;
        } else {
            set({ fail: false });
            // get().setScore();
            // set({ reset: true });
            return false;
        }
    },

    // light color (to indicate win or not)
    lightColor: "white",
    setLightColor: (color) => set({ lightColor: color }),

    // cube rotation
    rotation: { axis: "", angle: 0 },
    setRotation: (a, b) => set({ rotation: { axis: a, angle: b } }),

    // the score
    score: 0,
    setScore: () => set({ score: get().score + 1 }),
    resetScore: () => set({ score: 0 }),

    getScore: () => {
        const score = get().score;
        return score;
    },

    message: 0,
    setMessage: (n) => set({ message: n }),

    keyboard: buildKeyboard(),
}));

function buildKeyboard() {
    let a = new Array(2).fill().map(() => {
        const pos = new THREE.Vector3(-2, 0, 0);
        const size = new THREE.Vector3(0.5, 0.5, 0.1);
        return { pos, size };
    });
    console.log(a);
    return a;
}

export default useStore;
