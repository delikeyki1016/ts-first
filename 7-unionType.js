//유니온타입의 타입좁히기
//1. typeof : 원시타입만 잡아낼 수 있다. 객체타입은 못잡아낸다.
function searchByKeyword(keyword) {
    //넘버로 들어오는 타입은 스트링으로 바꿔주기
    if (typeof keyword === "number")
        return keyword.toString();
    return keyword;
}
console.log(searchByKeyword(3), typeof searchByKeyword(3));
function getDate(day) {
    if (day instanceof Date)
        return day;
    var startDay = new Date(day.start);
    return startDay;
}
console.log(getDate({ start: "2024-01-01", end: "" }));
function getName(result) {
    if ("title" in result)
        return result.title;
    return result.name;
}
console.log(getName({ name: "이소라", relase: "2024-01-01" }));
console.log(getName({ title: "바람이분다", relase: "2025-01-01" }));
//4. is : 타입가드를 만듦 
// function 타입가드(변수: any): 변수 is 특정타입 {
//     return 특정타입이 true인 조건식;
// }
// Track 타입여부 확인하는 함수 
function isTrack(result) {
    return result.title !== undefined;
}
// Artist 타입여부 확인하는 함수
function isArtist(result) {
    return result.name !== undefined;
}
function printInfo(result) {
    if (isTrack(result)) {
        return result.title;
    }
    else if (isArtist(result)) {
        return result.name;
    }
}
console.log(printInfo({ name: "이적", relase: "2024-01-01" }));
//타입체크 함수
function getType(song) {
    if (song.type === "song")
        return "쏭";
    else if (song.type === "singer")
        return "씽어";
    // radio 타입체크를 넣어주면 된다. 
    else if (song.type === "radio")
        return "라디오";
    else {
        exhaustiveCheck(song);
        return "체크";
    }
}
function exhaustiveCheck(song) {
    throw new Error("에러");
}
