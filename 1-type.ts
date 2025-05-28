//1강
//1. 변수 타입 지정 
let userName:string; // 예: 이름
let userAge:number; // 예: 나이
let isAdmin:boolean; // 예: 관리자 여부

userName = "Alice";
userAge = 25;
isAdmin = true;


//2. 변수 타입 선언 및 초기값 지정
let productName:string="아동복"; // 상품 이름
let productPrice:number=12000; // 상품 가격
let isAvailable:boolean=false; // 상품 재고 여부

console.log(`상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable}`);


//3. 두 숫자 더하는 함수 작성, 함수 매개변수와 반환값에 타입 지정
const addNumbers = (a:number, b:number):number => {
  return a+b;
}

console.log(addNumbers(5, 3)); 


//4. 주어진 값을 받아 문자열로 반환하는 함수 작성. 값이 null or undefined 이면 "값이 없습니다." 반환
function stringifyValue(value: any):string {
  if(value === null || value === undefined) {
    return "값이 없습니니다."
  } 
  return value.toString();
}

// 함수 호출
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
console.log(stringifyValue(23)); // "23"
console.log(stringifyValue(false)); // "false"


//5. 함수의 동작결과 예측
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 느슨한 동등성 : 느슨한 동등성에서 null과 undefined는 같다고 평가됨
console.log(compareValues(false, 0)); // 느슨한 동등성 : 느슨한 동등성에서 false는 0으로 변환되어 같다고 평가됨
console.log(compareValues(NaN, NaN)); // 동등하지 않음 : NaN은 자기 자신과도 같지 않음. NaN === NaN도 false를 반환.
console.log(compareValues(42, 42)); // 엄격한 동등성


//6. 주어진 값이 원시타입인지 아닌지 확인하는 함수 작성
function isPrimitive(value: unknown): boolean {
  return (
    value === null ||
    (typeof value !== "object" && typeof value !== "function")
  )
}
// typeof null === "object"이기 때문에 별도로 value === null 체크가 필요
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
console.log(isPrimitive(()=>{})); // false