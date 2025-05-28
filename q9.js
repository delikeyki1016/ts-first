// 9강
// 문제1 : 타입이 숫자배열이면 합계를 리턴, 문자배열이면 문자를 연결, 객체면 message 값을 대문자로 리턴
function processInput(input) {
    if (Array.isArray(input)) {
        if (typeof input[0] === "number") {
            return input.reduce(function (sum, num) { return sum + num; }, 0);
        }
        else if (typeof input[0] === "string") {
            return input.join("");
        }
    }
    else if ("message" in input) {
        return input.message.toUpperCase();
    }
    throw new Error("에러");
}
//문제2 : 타입이 Car이면 대문자 리컨, Bike면 `Bike: ${Bike.type}`을 출력
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    if (vehicle instanceof Car)
        return vehicle.brand.toUpperCase();
    else if (vehicle instanceof Bike)
        return "Bike: ".concat(vehicle.type);
    else {
        throw new Error("에러");
    }
}
function processUser(user) {
    if ("permissions" in user) {
        return user.permissions.join(",");
    }
    else if ("email" in user) {
        return user.email;
    }
    else {
        throw new Error("error...");
    }
}
// 사용자 정의 타입 가드
function isRectangle(shape) {
    return shape.width !== undefined;
}
function calculateArea(shape) {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    else {
        return Math.PI * shape.radius * shape.radius;
    }
}
function calculateArea2(shape) {
    if (shape.type === "square") {
        return shape.side * shape.side;
    }
    else if (shape.type === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        exhaustiveCheck(shape);
    }
}
function exhaustiveCheck(shape) {
    throw new Error("에러");
}
console.log(calculateArea2({ type: "square", side: 5 })); // 25
console.log(calculateArea2({ type: "circle", radius: 7 }));
