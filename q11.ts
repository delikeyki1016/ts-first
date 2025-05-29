//11강
//문제 1
type ArrayType<T> = T[]

function getFirstElement<T>(input: ArrayType<T>): T | undefined {
  return input[0]
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined


//문제2
function isNumberArray<T>(input: T[]): boolean {
  return input.every((item) => typeof item === "number")
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)


//문제3
type IsArray<T> = T extends any[] ? true : false;

function checkArrayType<T>(input: T): string {
    if(Array.isArray(input)) return "This is an array"
    return "This is not an array"
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."


//문제4
// Mapped Type 정의
type WithDefault<T> = {
  [K in keyof T]: [T[K], T[K]];
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }


//문제5
// K extends PropertyKey : 키 타입이 객체에서 사용 가능한 키(string, number, symbol)만 허용되도록 제한
function createObject<K extends PropertyKey, V>(key: K, value: V): { [P in K]: V } {
  return { [key]: value } as { [P in K]: V };
}

console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }


//문제6
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]
