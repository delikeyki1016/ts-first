// 9강
// 문제1 : 타입이 숫자배열이면 합계를 리턴, 문자배열이면 문자를 연결, 객체면 message 값을 대문자로 리턴
function processInput(input: number[] | string[] | {message: string}): string | number {
    if(Array.isArray(input)) {
        if(typeof input[0] === "number") {
            return (input as number[]).reduce((sum, num) => sum + num, 0)
        } else if(typeof input[0] === "string") {
            return (input as string[]).join("")
        } 
    } else if("message" in input) {
        return input.message.toUpperCase()
    }
    throw new Error("에러")
}

console.log(processInput([1,2,3]))
console.log(processInput(["hello","world"]))
console.log(processInput({message: "TypeScript"}))


//문제2 : 타입이 Car이면 대문자 리컨, Bike면 `Bike: ${Bike.type}`을 출력
class Car {
    brand: string; // default는 public
    constructor(brand: string) {
        this.brand = brand
    }
}

class Bike {
  public type: string;
  constructor(type: string) {
    this.type = type
  }
}

function processVehicle(vehicle: Car | Bike): string {
    if(vehicle instanceof Car) return vehicle.brand.toUpperCase();
    else if (vehicle instanceof Bike) return `Bike: ${vehicle.type}`
    else {
        throw new Error("에러")
    }
}

const myCar = new Car("Tesla")
const myBike = new Bike("Mountain")
console.log(processVehicle(myCar))
console.log(processVehicle(myBike))




//문제3 : 타입이 Admin이면 permissions 항목을 연결하고, user면 email을 리턴
type Admin = {
    type: "admin",
    permissions: string[],
}

type User = {
    type: "user",
    email: string,
}

function processUser(user: Admin | User): string {
  if("permissions" in user) {
    return user.permissions.join(",")
  } else if ("email" in user) {
    return user.email
  } else {
    throw new Error("error...")
  }
}

console.log(processUser({type: "admin", permissions: ["read", "write"]}))
console.log(processUser({type:"user", email:"user@email.com"}))


//문제 4 : 타입이 Rectangle이면 width * height, Circle이면 원 면적을 리턴
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
    return (shape as Rectangle).width !== undefined
}

function calculateArea(shape: Rectangle | Circle): number {
  if(isRectangle(shape)) {
     return shape.width * shape.height 
  } else {
    return Math.PI * shape.radius * shape.radius;
  }
}

console.log(calculateArea({width: 10, height: 5}))
console.log(calculateArea({radius: 7}))


// 문제 5 : type을 사용하여 타입을 안전하게 좁히기 
type Square2 = { 
    type: "square",
    side: number,
} 
type Circle2 = { 
    type: "circle"
    radius: number 
};

function calculateArea2(shape: Square2 | Circle2): number | void {
    if (shape.type === "square") {
        return shape.side * shape.side
    } else if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius
    } else {
        return exhaustiveCheck(shape);
    } 
}

function exhaustiveCheck(shape: never) {
    throw new Error("에러")
}

console.log(calculateArea2({type: "square", side: 5}))
console.log(calculateArea2({type: "circle", radius: 7}))
