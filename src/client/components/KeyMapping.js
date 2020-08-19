const str = "yhnujmrfvtgbikedcolwsxpqaz";
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let newStr = [];

for (let i = 0; i < alphabet.length; i++) {
    newStr.push(str.indexOf(alphabet[i]));
}
console.log(newStr);


const str = "yhnujmrfvtgbikedcolwsxpqaz";

for (let i = 0; i < str.length; i++) {
    console.log(`const t${i} = useLoader(THREE.TextureLoader, ${str[i]});`);
    console.log(`const m${i} = new THREE.MeshStandardMaterial({ map: t${i} });`);
    console.log(`textures.push(m${i});`);
}

