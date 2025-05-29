//12강 리터럴 타입 
//문제 1
function getButtonClass(style: "primary" | "secondary" | "danger"): string {
  switch(style) {
    case "primary":
     return "btn-primary";
    case "secondary":
     return "btn-secondary";
    case "danger":
     return "btn-danger";
    default:
     throw new Error("error...")
  }
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown")); // 오류 발생

//문제 2
type RequestStatus = "loading" | "success" | "error";

function handleRequestState(state: RequestStatus): string {
  switch(state) {
    case "loading": 
      return "Loading, please wait..."
    case "success":
      return "Request successful!"
    case "error":
      return "There was an error processing your request."
    default:
      throw new Error("error...")
  }
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
console.log(handleRequestState("unknown")); // 오류 발생
