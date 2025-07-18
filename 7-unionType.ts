//유니온타입의 타입좁히기
//1. typeof : 원시타입만 잡아낼 수 있다. 객체타입은 못잡아낸다.

type SearchType = number | string;

function searchByKeyword(keyword:SearchType):string{
    //넘버로 들어오는 타입은 스트링으로 바꿔주기
    if (typeof keyword === "number") return keyword.toString();
    return keyword;
}

console.log(searchByKeyword(3), typeof searchByKeyword(3))

//2. instanceof : 자바스크립트의 내장객체만 확인 가능함 (Date...)

type Period = {
    start: string,
    end: string
}

type SearchType2 = Period | Date;

function getDate(day: SearchType2): Date {
    if (day instanceof Date) return day;
    const startDay = new Date(day.start);
    return startDay
}

console.log(getDate({start: "2024-01-01", end: ""}))

// "key" in Object ==> 객체에 해당 키가 존재하는지 확인
//3. in : 타입의 필드 여부를 확인할 수 있다. (타입좁히기 활용)
type Track = {
    //type: "track", 식별자를 넣어줄 수 있다.
    title: string,
    relase: string,
} 

type Artist = {
    //type: "artist",
    name: string,
    relase: string,
}

function getName(result: Track | Artist): string {
    if("title" in result) return result.title
    return result.name
}

console.log(getName({name: "이소라", relase: "2024-01-01"}))
console.log(getName({title: "바람이분다", relase: "2025-01-01"}))

//4. is : 타입가드함수를 만들어서 사용하면 타입을 좁혀줌(타입 내로잉)

// function 타입가드(변수: any): 변수 is 특정타입 {
//     return 특정타입이 true인 조건식;
// }

// Track 타입여부 확인하는 함수(타입가드함수)
function isTrack(result: Track | Artist): result is Track {
    return (result as Track).title !== undefined
}

// Artist 타입여부 확인하는 함수(타입가드함수)
function isArtist(result: Track | Artist): result is Artist {
    return (result as Artist).name !== undefined
}

function printInfo(result: Track | Artist): string {
    if(isTrack(result)) {
        return result.title
    } else if(isArtist(result)) {
        return result.name
    }
}

console.log(printInfo({name: "이적", relase: "2024-01-01"}))

// type에 식별자 type을 넣어서 타입 체크를 지나칠 경우 에러를 발생하게 하여 개발자로 하여금 인식하게 한다.
type song = {
    type: "song",
    title: string,
    relase: string,
}

type singer = {
    type: "singer",
    name: string,
    relase: string,
}

type radio = {
    type: "radio",
    channel: number,
}

type SearchSong = song | singer | radio; // 타입이 추가될때 타입체크 함수에 해당 타입이 없으면 else구문에서 에러를 일으킴(개발자 인지!)
//타입체크 함수
function getType(song: SearchSong): string {
    if(song.type === "song") return "쏭";
    else if(song.type === "singer") return "씽어";
    // radio 타입체크를 넣어주면 된다. 
    else if(song.type === "radio") return "라디오";
    else {
        exhaustiveCheck(song);
        return "체크"
    }
}

function exhaustiveCheck(song: never) {
    throw new Error("에러")
}
