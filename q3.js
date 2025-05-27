//3강
//1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하시오. 
var user3 = { id: 1, name: "Alice", };
var userWithEmail = { id: 2, name: "Bob", email: "bob@example.com", };
// User 타입을 사용하여 아래 객체를 작성하세요. 
var user4 = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};
console.log(user4);
var normalUser = { id: 1, name: "Alice", email: "alice@example.com", };
var adminUser = { id: 2, name: "Bob", role: "Administrator", };
console.log(normalUser);
console.log(adminUser);
var normalProduct = { id: 1, name: "Laptop", price: 1000, };
var discountedProduct = { id: 2, name: "Smartphone", price: 800, discount: 10, };
console.log(normalProduct);
console.log(discountedProduct);
// Order 타입을 사용하여 아래 객체를 작성하세요. 
var order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};
console.log(order);
// 아래 객체를 작성하세요.
var admin = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};
var guest = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
