//number
let num: number = 10;
console.log(num);

//string
let str: string = 'test string';
str = 'new string';

str.length;

//boolean

let isAdmin: boolean = true;

//bigint

let bigNumber: bigint = 1234n;

//symbol
const symb: symbol = Symbol('1');

//null

const a: null = null;

//undefined

const b: undefined = undefined;

// any, unknown

let c: any = 'string';
// c = false;
// c = 5;

// c.toUpperCase();

 console.log(c.toUpperCase());

let d: unknown = 5;
if(typeof d === 'number')  d.toString();


type TUniversalType = string | number | undefined;

const universalVars: TUniversalType = 10;

type TColorsAppType = 'brand' | 'dark' | 'light';

const headerColor: TColorsAppType = 'dark';

const width: string = 5 + 'px';