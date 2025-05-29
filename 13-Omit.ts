interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
}

// 1. Omit : 필드 빼기 
// User타입에서 password, age 빼기
type PublicUser = Omit<User, "password" | "age"> 


// 2. Pick : id만 가져오기 
type BasicUser = Pick<User, "id">


// 3. Partial : 모든 필드를 선택적으로 사용하겠다. 즉 street?: string;
interface Address {
    street: string;
    city: string;
    country: string;
}

const updateAddress = (address: Partial<Address>)=>{
    console.log(address)
}

updateAddress({street: "main street", country: "KR"})
