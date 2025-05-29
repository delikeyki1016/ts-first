// 타입활용 : extends 
interface Track {
    title: string;
    relase: string;
}

interface Artist {
    name: string;
    debut: string;
}

type SearchItem<T extends "track" | "artist"> = T extends "track" ? Track : Artist;

const result: SearchItem<"track"> = {
    title: "hello",
    relase: "2024",
    // name: "lala", Track 타입에 없는 필드이므로 에러 발생함 
}


// as : 확신의 타입 지정 ==> 타입을 필히 지정해야 하는 곳에만 써야함. 
let someValue: unknown = "Hello";
// console.log(someValue.length) unknown타입이므로 에러 
let newValue = someValue as string;
console.log(newValue.length)

const inputElement = document.querySelector('input');
const input = inputElement as HTMLInputElement;



// infer : 타입 추론 (타입을 모를 때 사용)
// T가 함수타입일 때 
type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R ? R : never;

function getUserInfo() {
    return {name: "haha", age: 25}
}
//UserInfo는 getUserInfo 함수의 리턴값을 추론해서 가져오기 
type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>
