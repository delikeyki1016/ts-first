//고급타입
//any : 자바스크립트의 모든 타입은 any다

let a:any = "pang";
a=3;
a=true;


//unknown : 아직 결정되지 않은 타입
let b:unknown = "hello";
// let c:string = b; // unknown으로 지정된 것은 할당할수 없다. 에러
// console.log(b.toUpperCase()) // unknown형식이기 때문에 에러.


//void 
function double(a,b) {
    console.log(a,b) // 함수의 return이 없을 때 함수는 void타입
}

interface NewType {
    name: string;
    double: (a:number, b:number) => void
}


//never : 잘 사용하지 않음, 리턴값이 없다. 
// function infinite():never {
//     while(true) {
//         console.log("무한굴레")
//     }
// }

function throwError(): never {
    throw new Error("항상 에러를 던집니다.")
}

// a 또는 b 만 가능하게 하려면 아래와 같이 사용. b?:never, a?:never를 사용하지 않으면, a 또는 b 또는 ab도 가능하기 때문
type AorB = {a:number, b?:never} | {a?:never, b:number}

let c: AorB = {
    a: 2,
    // b: 3, 에러
}


//문제
//문제 1. 작업의 상태를 나타내는 enum을 작성하고, 상태에 따라 다른 메시지를 반환하는 함수를 작성하세요.
// 작업의 상태는 다음과 같습니다:

// Pending: 대기 중
// InProgress: 진행 중
// Completed: 완료됨
// 상태에 따라 다음 메시지를 반환하세요:

// Pending: "작업이 대기 중입니다."
// InProgress: "작업이 진행 중입니다."
// Completed: "작업이 완료되었습니다."

enum TaskStatus {
    Pending = "대기 중",
    InProgress = "진행 중",
    Completed = "완료"
}

function getStatusMessage(status: TaskStatus): string {
    return status === TaskStatus.Completed ? `작업이 ${status}되었습니다.` : `작업이 ${status}입니다.`
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."


// 문제 2. 아래 조건에 따라 함수를 작성하세요.
// 작업 상태를 나타내는 enum:

// Pending: 작업 대기 중
// InProgress: 작업 진행 중
// Completed: 작업 완료
// Failed: 작업 실패

// 함수의 요구사항:

// 함수는 작업 상태(TaskStatus)와 입력값(unknown)을 받습니다.
// input은 문자열이어야 합니다.
// 문자열을 작업 상태에 따라 가공합니다:
// Pending: 문자열을 모두 대문자로 변환.
// InProgress: 문자열을 소문자로 변환.
// Completed: 문자열 앞에 "완료: "를 추가.
// Failed: 에러를 발생시킵니다.
// 작업 상태가 Failed면 에러를 발생시켜야 합니다.
// 최종 결과로 가공된 문자열 배열을 반환합니다.
// 힌트 : typeof를 사용하면 타입을 알 수 있다.

enum TaskStatus2 {
    Pending = "작업 대기 중",
    InProgress = "작업 진행 중",
    Completed = "작업 완료",
    Failed = "작업 실패"
}

function processTask(status:TaskStatus2, input: unknown): string {
    if(typeof input !== "string") {
       throw new Error("입력값은 문자열이어야 합니다.")
    } 
    
    switch (status) {
        case TaskStatus2.Pending:
            return input.toUpperCase();
        case TaskStatus2.InProgress:
            return input.toLowerCase();
        case TaskStatus2.Completed:
            return `완료: ${input}`;
        case TaskStatus2.Failed:
            throw new Error("작업이 실패했습니다.");
        default:
            throw new Error("알 수 없는 작업 상태입니다.");
    }
}

// 테스트 코드
console.log(processTask(TaskStatus2.Pending, "task1")); 
// 기대 출력: "TASK1"

console.log(processTask(TaskStatus2.InProgress, "TaskA")); 
// 기대 출력: "taska"

console.log(processTask(TaskStatus2.Completed, "Report1")); 
// 기대 출력: "완료: Report1"

// console.log(processTask(TaskStatus2.Failed, "TaskX")); 
// // 에러: 작업이 실패했습니다.

// console.log(processTask(TaskStatus2.Pending, 42)); 
// // 에러: 입력값은 문자열이어야 합니다.


// 문제 3. 아래 조건에 따라 코드를 작성하세요.
// 로그 수준을 나타내는 enum을 작성하세요:

// Info
// Error
// Debug

// 로그 함수 타입을 정의하세요. 이 함수는 다음 특징을 가집니다:

// message: 로그 메시지 (문자열)
// level: 로그 수준 (enum 값)
// 반환값이 없습니다. (void 타입)
// 작성한 타입과 enum을 사용해 함수를 구현하세요:

// 로그 수준에 따라 다른 메시지를 출력합니다.
// Info: [INFO] 메시지 앞에 [INFO] 출력
// Error: 메시지 앞에 [ERROR] 출력
// Debug: 메시지 앞에 [DEBUG] 출력

// 로그 수준을 나타내는 enum 작성
enum LogType {
    Info = "Info",
    Error = "Error",
    Debug = "Debug"
}

// 로그 함수 타입을 정의하세요.
type TLogFn = (message: string, level: LogType) => void

// 로그 함수 구현
const logMessage:TLogFn = (message, level) => {
  switch(level) {
    case LogType.Info:
      console.log(`[${LogType.Info.toUpperCase()}] 시스템이 시작되었습니다.`)
      break;
    case LogType.Error:
      console.log(`[${LogType.Error.toUpperCase()}] 네트워크 연결 실패!`)
      break;
    case LogType.Debug:
      console.log(`[${LogType.Debug.toUpperCase()}] 디버깅 모드 활성화`)
      break;
    default:
      console.log("알수없는 타입입니다.")
      break;
  }
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogType.Info);
logMessage("네트워크 연결 실패!", LogType.Error);
logMessage("디버깅 모드 활성화", LogType.Debug);

// 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
// 두 개의 함수(processAny와 processUnknown)를 작성합니다:

// processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관계없이 값을 문자열로 변환하여 반환합니다.
// processUnknown: 매개변수로 unknown 타입을 받습니다. 입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른 타입의 경우 에러를 발생시킵니다.
// 테스트 코드를 작성하여 두 함수의 차이를 확인하세요.

function processAny(input: any): string {
  return input.toString()
}

function processUnknown(input: unknown): string | number {
  if(typeof input === "string") {
    return input.toUpperCase();
  } else if(typeof input === "number") {
    return input * 10;
  } else {
    throw new Error("지원되지 않는 타입입니다.")
  }
}

// 테스트 코드
console.log(processAny("hello")); // "hello"
console.log(processAny(42)); // "42"
console.log(processAny(true)); // "true"

console.log(processUnknown("hello")); // "HELLO"
console.log(processUnknown(42)); // 420
try {
  console.log(processUnknown(true)); // 에러 발생
} catch (error) {
  console.error(error?.toString()); // "지원되지 않는 타입입니다."
}