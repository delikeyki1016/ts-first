//고급타입 : enum
enum Gender {
    FEMALE = "Female",
    MALE = "Male"
}

const F: Gender = Gender.FEMALE;
const M: Gender = Gender.MALE;

console.log(F,M)

enum SearchType {
    DATE, //0 값을 지정하지 않으면 숫자로 반환됨
    KEYWORD, //1
    ORDER //2
}

console.log(SearchType.DATE)

enum SearchType2 {
    DATE = "Date",
    KEYWORD = "Keyword",
    ORDER = "Order"
}

console.log(SearchType2.DATE)

//트리쉐이킹 : 사용하지 않는 코드들을 삭제해줌
//enum은 트리웨이킹이 안되기 때문에 const enum으로 사용하면 트리쉐이킹이 가능하다.
//단점은 js로는 디버깅이 어렵다. 

const enum SearchType3 {
    DATE = "Date3"
}

console.log(SearchType3.DATE)
