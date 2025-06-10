"use strict";
//возвращает
function sum(a, b) {
    return String(a + b);
}
sum(2, 4);
// не возвращает
const sayHi = (name) => {
    console.log('Hi ', name);
};
const admin = {
    name: 'Sergey',
    cb: sayHi,
    car: {
        model: 'Audi'
    }
};
//never
const createError = () => {
    throw new Error('Oooops!');
};
