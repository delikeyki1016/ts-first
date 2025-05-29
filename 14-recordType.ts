// Record type : 필드명이 정확하지 않을때 사용할 수 있다.
type StringNumberMap = Record<string, number>
//type StringNumberMap = Record<"apple" | "orange" | "mango", number>

const example:StringNumberMap = {
    apple: 3,
    orange: 5,
    mango: 4
}


type UserRole = "admin" | "user" | "guest";
// 추후에 UserRole이 추가되어도 아래에서 업데이트가 되기 때문에 편리하다. 
type RolePermission = Record<UserRole, string> 
