import create from "zustand";

const [useStore] = create((set, get) => ({
    // keep track of which key should be pressed
    cubeKey: 0,
    setCubeKey: (key) => set({ cubeKey: key }),

    //user's key
    userKey: 0,
    setUserKey: (key) => set({ userKey: key }),

    // count of times user inputs key (prevents scoring more than once per letter)
    userAttempts: 0,
    setUserAttempts: () => set({ userAttempt: get().userAttempt + 1 }),

    // check if user input any key ...to handle 'no key entered'.
    fail: false,
    timeToCheckKeys: () => {
        const userKey = get().userKey;
        const cubeKey = get().cubeKey;
        if (userKey !== cubeKey) {
            set({ fail: true });
            return true;
        } else {
            set({ fail: false });
            // set({ reset: true });
            return false;
        }
    },

    // keep track of which key was pressed
    userKey: 0,
    setUserKey: (key) => set({ userKey: key }),

    // light color (to indicate win or not)
    lightColor: "white",
    setLightColor: (color) => set({ lightColor: color }),

    // cube rotation
    rotation: { axis: "", angle: 0 },
    setRotation: (a, b) => set({ rotation: { axis: a, angle: b } }),
}));

export default useStore;
