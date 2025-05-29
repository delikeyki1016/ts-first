//15강
//문제 1 : 함수의 리턴타입만 추출하는 타입 작성 
type ExtractReturnType<F> = F extends (...args: any[]) => infer R ? R : never

// 테스트 코드
type Test1 = ExtractReturnType<() => string>;
type Test2 = ExtractReturnType<(x: number) => boolean>;
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>;


//문제2 : 동적으로 주어진 키를 사용해 객체의 값을 추출하는 함수 작성
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key] as T[K]
}

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(getValue(user, "name")); // 기대 출력: "Alice"
console.log(getValue(user, "email")); // 기대 출력: "alice@example.com"
console.log(getValue(user, "id")); //기대출력: 1


//문제 3:
// 조건부 타입 정의 
type RequestData<T> = T extends "text" ? string : T extends "json" ? Record<string, any> : T extends "binary" ? Uint8Array : never;

//요청 처리 함수 
function processRequest<T extends "text" | "json" | "binary">(type: T, data: RequestData<T>): string {
    if (type === "text") {
        return `Processed: ${data}`
    } else if (type === "json") {
        return `Processed: ${JSON.stringify(data)}`
    } else if (type === "binary") {
        return `Processed: ${data.join(",")}`
    }
    throw new Error("error...")
}

// 테스트 코드
console.log(processRequest("text", "Hello")); // "Processed: Hello"
console.log(processRequest("json", { key: "value" })); // "Processed: {"key":"value"}"
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111]))); // "Processed: 72,101,108,108,111"
