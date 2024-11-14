const sguareCilinder = (radius, hight) => 2 * Math.PI * radius * (radius + hight);
const r = 2;
const h = 4.5;
const S = sguareCilinder(r, h);
console.log(S)