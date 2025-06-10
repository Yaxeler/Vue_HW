interface IBoss {
    name: string;
    age: string | number;
    staff: number,
    isAdmin: boolean,
    rate?: number
}

type TCar = 'BMW' | 'Audi';

interface IBoss {
    car: TCar
}

interface IWorker extends IBoss {
    workDays: number;
    hasChildren?: boolean;
}


export const boss: IBoss = {
    name: 'Ivan',
    age: '40',
    staff: 100,
    isAdmin: true,
    car: 'Audi'
}

export const worker: IWorker = {
    name: 'Vasily',
    age: '30',
    staff: 100,
    isAdmin: true,
    car: 'Audi',
    workDays: 22,
    hasChildren: true
}

boss.rate = 5000;

//array

//const fruits: (string | number | boolean)[] = ['apple', 'banana', 'pineapple', true];
//const fruits: Array<string | number | boolean> = ['apple', 'banana', 'pineapple', 5, true, null];
const bossList: IBoss[] = [{
    name: 'Ivan',
    age: '40',
    staff: 100,
    isAdmin: true,
    car: 'Audi'
}];

export default bossList;

const bossList1: Array<IBoss> = [{
    name: 'Ivan',
    age: '40',
    staff: 100,
    isAdmin: true,
    car: 'Audi'
}];