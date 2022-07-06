//1

const isDogBetter = true;
const isCatBetter = false;

//a 

console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(!(isDogBetter && isCatBetter));

//2

const atoms = 530;
const starsInSky = 350;
const sandGrains = 865;

//3

console.log(atoms > starsInSky && atoms > sandGrains);
console.log(atoms != sandGrains);
console.log(starsInSky < sandGrains || starsInSky > atoms)
console.log(atoms == starsInSky || atoms != sandGrains)
console.log(atoms >= 10 && sandGrains <= 10 )
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100)
