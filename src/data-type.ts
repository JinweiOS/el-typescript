// 类型推导
// 在基础类型赋值时，可以免去类型声明
// boolean
let isDone: boolean = true;
const num = 2;

// string
const str: string = 'hello'
// 数组需要指定类型

// Array
const arr: Array<number> = [1, 1]
const arr2: string[] = ['1']


// undefined
const blank: undefined = undefined

// null
const blankObj: null = null;

// void
function handle(param: string): void {
}

// any
const what: any = {};

// never
function neverHaveReturnVal(): never {
    throw new Error('hahhaah')
}

// unknown 类型
// unknown 类型只能赋值给any类型和他本身
let usageAfter: unknown;
const value: unknown = 124

usageAfter = 1;
let count: any = usageAfter

// 元组
const tuple: [string, number, string] = ['1', 1, 'hahah']

// 枚举类型
enum Season {
    Spring = 'spring', // 0
    Summer = 'summer', // 1
    Autumn = 'autumn', // 2
    Winter = 'winter'// 3
}

let a: Season = Season.Spring;

// 函数声明
function handleFn(param: string): void {
}

// 箭头函数
let callback = (msg?: string): void => console.log(msg)

callback('1')


// 自定义类型
interface Student {
    age: number;
    name: string;
    bestLikeSeason: Season
}

let student: Student;

student = {
    age: 1,
    name: 'xxx',
    bestLikeSeason: Season.Autumn
}


// 联合类型
let canChange: string | number;

// 混合类型，交叉类型
interface IPersion {
    id: string;
    name?: string;
}

interface IWorker {
    companyId: number
}

type IStaff = IPersion & IWorker;

const staff: IStaff = {
    id: '1',
    companyId: 2
}

// 返回值接口类型

// 泛型
function func<T = number>(param: Array<T>):Array<T> {
    return param;
}

func(['2'])

const getReturn = func<string>(['1'])

interface Cat<T> {
    id: T
}

let cat1: Cat<string> = {
    id: '小花猫'
}

let cat2: Cat<number> = {
    id: 12346
}

interface Dog {
    id: string
}

// 泛型继承
function adoptDog<T extends Dog>(animal: T) {
    console.log(animal)
}

interface bird extends Dog {
    name: string;
}

adoptDog<bird>({id: '111', name: '小飞鸟'})
