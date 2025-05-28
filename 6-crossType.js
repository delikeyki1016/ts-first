// 문제1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하세요.
// Product 타입:
// id: 숫자
// name: 문자열
// price: 숫자
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function calculateDiscountedPrice(item) {
    return item.price * (1 - item.discountPercentage / 100);
}
// 테스트 코드
var discountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct)); // 800
function printOrderSummary(order) {
    return "Order ".concat(order.orderId, " (Phone: ").concat(order.phone, ")");
}
// 테스트 코드
var orderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"],
};
console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"
// 사용자 데이터를 병합하는 함수
function mergeUserData(profile, activity) {
    return __assign(__assign({}, profile), activity);
}
// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user) {
    return "\uC0AC\uC6A9\uC790 ".concat(user.id, " - ").concat(user.name, " (").concat(user.email, ") - \uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778 : ").concat(user.lastLogin);
}
// 테스트 코드
var profile = { id: 1, name: "Alice", email: "alice@example.com" };
var activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};
var mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"
