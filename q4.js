// Female, Male
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
})(Gender || (Gender = {}));
var F = Gender.FEMALE;
var M = Gender.MALE;
console.log(F, M);
var SearchType;
(function (SearchType) {
    SearchType[SearchType["DATE"] = 0] = "DATE";
    SearchType[SearchType["KEYWORD"] = 1] = "KEYWORD";
    SearchType[SearchType["ORDER"] = 2] = "ORDER"; //2
})(SearchType || (SearchType = {}));
console.log(SearchType.DATE);
var SearchType2;
(function (SearchType2) {
    SearchType2["DATE"] = "Date";
    SearchType2["KEYWORD"] = "Keyword";
    SearchType2["ORDER"] = "Order";
})(SearchType2 || (SearchType2 = {}));
console.log(SearchType2.DATE);
console.log("Date3" /* SearchType3.DATE */);
