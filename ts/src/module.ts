export let value = 1;

setTimeout(() => {
    value = 2,
    console.log('Timeout', value)
}, 0)