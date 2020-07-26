import { useLoader } from "react-three-fiber";
import * as THREE from "three";

// there must be a better way to do this...
// making 1 texture and sampling areas from it? Is that possible in three.js?
import a from "../img/a.png";
import b from "../img/b.png";
import c from "../img/c.png";
import d from "../img/d.png";
import e from "../img/e.png";
import f from "../img/f.png";
import g from "../img/g.png";
import h from "../img/h.png";
import i from "../img/i.png";
import j from "../img/j.png";
import k from "../img/k.png";
import l from "../img/l.png";
import m from "../img/m.png";
import n from "../img/n.png";
import o from "../img/o.png";
import p from "../img/p.png";
import q from "../img/q.png";
import r from "../img/r.png";
import s from "../img/s.png";
import t from "../img/t.png";
import u from "../img/u.png";
import v from "../img/v.png";
import w from "../img/w.png";
import x from "../img/x.png";
import y from "../img/y.png";
import z from "../img/z.png";

export default function Textures() {
    let textures = [];

    const t0 = useLoader(THREE.TextureLoader, a);
    const m0 = new THREE.MeshStandardMaterial({ map: t0 });
    textures.push(m0);

    const t1 = useLoader(THREE.TextureLoader, b);
    const m1 = new THREE.MeshStandardMaterial({ map: t1 });
    textures.push(m1);

    const t2 = useLoader(THREE.TextureLoader, c);
    const m2 = new THREE.MeshStandardMaterial({ map: t2 });
    textures.push(m2);

    const t3 = useLoader(THREE.TextureLoader, d);
    const m3 = new THREE.MeshStandardMaterial({ map: t3 });
    textures.push(m3);

    const t4 = useLoader(THREE.TextureLoader, e);
    const m4 = new THREE.MeshStandardMaterial({ map: t4 });
    textures.push(m4);

    const t5 = useLoader(THREE.TextureLoader, f);
    const m5 = new THREE.MeshStandardMaterial({ map: t5 });
    textures.push(m5);

    const t6 = useLoader(THREE.TextureLoader, g);
    const m6 = new THREE.MeshStandardMaterial({ map: t6 });
    textures.push(m6);

    const t7 = useLoader(THREE.TextureLoader, h);
    const m7 = new THREE.MeshStandardMaterial({ map: t7 });
    textures.push(m7);

    const t8 = useLoader(THREE.TextureLoader, i);
    const m8 = new THREE.MeshStandardMaterial({ map: t8 });
    textures.push(m8);

    const t9 = useLoader(THREE.TextureLoader, j);
    const m9 = new THREE.MeshStandardMaterial({ map: t9 });
    textures.push(m9);

    const t10 = useLoader(THREE.TextureLoader, k);
    const m10 = new THREE.MeshStandardMaterial({ map: t10 });
    textures.push(m10);

    const t11 = useLoader(THREE.TextureLoader, l);
    const m11 = new THREE.MeshStandardMaterial({ map: t11 });
    textures.push(m11);

    const t12 = useLoader(THREE.TextureLoader, m);
    const m12 = new THREE.MeshStandardMaterial({ map: t12 });
    textures.push(m12);

    const t13 = useLoader(THREE.TextureLoader, n);
    const m13 = new THREE.MeshStandardMaterial({ map: t13 });
    textures.push(m13);

    const t14 = useLoader(THREE.TextureLoader, o);
    const m14 = new THREE.MeshStandardMaterial({ map: t14 });
    textures.push(m14);

    const t15 = useLoader(THREE.TextureLoader, p);
    const m15 = new THREE.MeshStandardMaterial({ map: t15 });
    textures.push(m15);

    const t16 = useLoader(THREE.TextureLoader, q);
    const m16 = new THREE.MeshStandardMaterial({ map: t16 });
    textures.push(m16);

    const t17 = useLoader(THREE.TextureLoader, r);
    const m17 = new THREE.MeshStandardMaterial({ map: t17 });
    textures.push(m17);

    const t18 = useLoader(THREE.TextureLoader, s);
    const m18 = new THREE.MeshStandardMaterial({ map: t18 });
    textures.push(m18);

    const t19 = useLoader(THREE.TextureLoader, t);
    const m19 = new THREE.MeshStandardMaterial({ map: t19 });
    textures.push(m19);

    const t20 = useLoader(THREE.TextureLoader, u);
    const m20 = new THREE.MeshStandardMaterial({ map: t20 });
    textures.push(m20);

    const t21 = useLoader(THREE.TextureLoader, v);
    const m21 = new THREE.MeshStandardMaterial({ map: t21 });
    textures.push(m21);

    const t22 = useLoader(THREE.TextureLoader, w);
    const m22 = new THREE.MeshStandardMaterial({ map: t22 });
    textures.push(m22);

    const t23 = useLoader(THREE.TextureLoader, x);
    const m23 = new THREE.MeshStandardMaterial({ map: t23 });
    textures.push(m23);

    const t24 = useLoader(THREE.TextureLoader, y);
    const m24 = new THREE.MeshStandardMaterial({ map: t24 });
    textures.push(m24);

    const t25 = useLoader(THREE.TextureLoader, z);
    const m25 = new THREE.MeshStandardMaterial({ map: t25 });
    textures.push(m25);

    return textures;
}
