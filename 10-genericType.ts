// generic type : 타입을 선언할 때 타입 결정하지 않고, 타입을 사용할 때 타입을 결정함
// ex1
type ArrayType<T> = T[] 

const numberType:ArrayType<number> = [1,2,3]
const stringType:ArrayType<string> = ["a","b"]

// ex2
type ApiResponse<T> = {
    status: string,
    totalPage: number,
    page: number,
    data: T[]
}

type MovieResponse = ApiResponse<{title: string, genre: string}>
type CategoryResponse = ApiResponse<{name: string}>

// ex3
interface Summary<T,U> {
    first: T;
    second: U;
    display(): void;
}

const myName:Summary<string, number> = {
    first: "gildong",
    second: 18,
    display() {
        console.log(this.first + "의 나이는 " + this.second + "입니다.")
    }
}

myName.display()

// 조건부 type
type IsString<T> = T extends string ? "yes" : "no";

type result = IsString<number> // type result = "no"


// mapped type : 타입키값이 옵셔널할 때 사용 
type Info = {
    title: string,
    genre: string,
    release: string,
}

type Subset<T> = {
  [key in keyof T]? : T[key]
}

const SearchMovie:Subset<Info> = {title: "movie", genre: "melow"} 
const SearchDrama:Subset<Info> = {release: "2024-01-01"} 
