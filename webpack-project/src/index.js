import "./styles/index.scss"

const elvenShield = {
    leatherStrips : 2,
    ironIngot: 1,
    refinedMoonstone: 4
}


const myRecipie = {
    ...elvenShield,
    leather: 1,
    refinedMoonstone: 4
}

console.log(elvenShield);
console.log(myRecipie);
