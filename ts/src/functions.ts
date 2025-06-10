//возвращает

function sum(a: number, b: number):string {
    return String(a + b)
}

sum(2, 4);

// не возвращает


const sayHi = (name: string):void => {
    console.log('Hi ', name)
}

interface IAdminCar {
    model: string
}

interface IAdmin {
    name: string,
    cb: (name: string) => void,
    car?: IAdminCar
}

const admin: IAdmin = {
    name: 'Sergey',
    cb: sayHi,
    car: {
        model: 'Audi'
    }
}

//never

const createError = ():never => {
    throw new Error('Oooops!')
}