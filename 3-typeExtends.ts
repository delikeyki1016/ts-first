//3강
//1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하시오. 

// 인터페이스 작성 
interface IUser {
  id: number;
  name: string;
}

// 타입 작성 
type TUserWithEmail = IUser & {
  email?: string
}

const user3:IUser = { id: 1, name: "Alice", }; 
const userWithEmail:TUserWithEmail = { id: 2, name: "Bob", email: "bob@example.com", };


//2. 타입을 정의하고, 객체를 작성하시오.
// User 타입을 작성하세요. 
type TUser = {
  id: number,
  name: string,
  address: {
    city: string,
    zipCode: number,
  },
}

// User 타입을 사용하여 아래 객체를 작성하세요. 
const user4:TUser = { 
  id: 1, 
  name: "Alice", 
  address: { 
    city: "Seoul", 
    zipCode: 12345, 
  }, 
};

console.log(user4)


//3. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요. (id, name, email?) 
// 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. (role: 문자열)
// 작성한 뒤, 사용자와 관리자를 나타내는 객체를 만드세요.  

// User 인터페이스 작성 
interface IUser2 {
  id: number,
  name: string,
  email?: string
} 

// Admin 인터페이스 작성 (User 확장) 
interface IAdmin extends IUser2 {
    role: string
}

const normalUser:IUser2 = { id: 1, name: "Alice", email: "alice@example.com", }; 
const adminUser:IAdmin = { id: 2, name: "Bob", role: "Administrator", };
console.log(normalUser)
console.log(adminUser)


//4. 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요. (id, name, price)
// 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다. (discount: 숫자, 퍼센트 값)
// 작성한 뒤, 일반 상품과 할인 상품 객체를 만드세요.

// Product 타입 작성 
type TProduct = {
  id: number,
  name: string,
  price: number
}

// DiscountedProduct 타입 작성 (Product 확장) 
type TDiscountedProduct = TProduct & {
  discount: number
}

const normalProduct:TProduct = { id: 1, name: "Laptop", price: 1000, }; 
const discountedProduct:TDiscountedProduct  = { id: 2, name: "Smartphone", price: 800, discount: 10, };

console.log(normalProduct)
console.log(discountedProduct)


//5. 아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface IOrder {
  orderId: number;
  products: IProduct[];
  totalPrice: number;
}

// Order 타입을 사용하여 아래 객체를 작성하세요. 
const order:IOrder = { 
  orderId: 101, 
  products: [ 
    { id: 1, name: "Laptop", price: 1000 }, 
    { id: 2, name: "Mouse", price: 50 }, 
  ], 
  totalPrice: 1050, 
};

console.log(order)


//6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// BaseUser라는 인터페이스를 작성하세요:
// * id: 숫자
// * name: 문자열
// AdminUser라는 타입을 작성하세요:
// * BaseUser를 확장합니다.
// * 추가로 role: 문자열을 포함합니다.
// GuestUser라는 타입을 작성하세요:
// * BaseUser를 확장합니다.
// * 추가로 visitCount: 숫자를 포함합니다.


// BaseUser 인터페이스 작성
interface IBaseUser {
    id: number;
    name: string;
}

// AdminUser 타입 작성
type TAdminUser = IBaseUser & {
    role: string
}

// GuestUser 타입 작성
type TGuestUser = IBaseUser & {
    visitCount: number;
}

// 아래 객체를 작성하세요.
const admin: TAdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: TGuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};