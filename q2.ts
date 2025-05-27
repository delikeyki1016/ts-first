//2강 
//1. user 타입 작성
let user: {name: string; age?: number; isAdmin: boolean} = {
  name: "Alice",
  isAdmin: true,
};

user={
  name: "Bob",
  age:40,
  isAdmin: false,
}

console.log(user);


//2. 읽기전용 배열을 생성 후 직접 값을 추가 또는 변경하려고 하면 에러가 발생해야함 
let numbers: readonly number[] = [1,2,3];

// numbers.push(4); 
// numbers[0] = 42;


//3. 
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

// 1. 상품 이름과 가격만 반환,리턴타입 정의필요 
function getProductNamesAndPrices(products: [string,number,boolean][]): [string, number][] {
  return products.map(([name, price])=> [name, price])
}

// 2. 재고가 있는 상품만 반환,리턴타입 정의필요 
function getAvailableProducts(products: [string, number, boolean][]): [string, number, boolean][] {
  return products.filter(([name, price, yes]) => yes)
}

// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]


//4. 사용자 정보를 출력하는 함수 작성, 나이가 제공되지 않으면 기본값으로 18을 사용 
// 나이가 없을때도 기본값(18)을 출력하기 때문에 age는 항상 리턴값이 있다.
function updateUser(user: {name: string, age?:number}): {name: string, age: number} {
  // 나이가 제공되지 않으면 18로 설정
  //user.age ? user.age : user.age = 18;
  //return user;
  return {...user, age: user.age ?? 18} //??는 null 또는 undefined일 때만 오른쪽 값을 사용
}

// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }

//5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성 
// proudcts 타입정의  필요 
const products2:{name: string; price: number; category?: string}[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
  { name: "Notebook", price: 200, category: "Electronics" }
];

//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category:string): string[] {
  // 여기에 구현
  return products2.filter((product) => product.category === category).map((product) => product.name)
}

// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop", "Notebook"] 
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []