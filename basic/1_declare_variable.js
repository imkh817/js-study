/*
* 변수 선언하기
*
* 1) var
* 2) let
* 3) const
*
* */

var name = '김가을';
console.log(name);

let ive = '아이브';
console.log(ive);

/*
* let 과 var 로 선언하게 되면
* 추후에 값을 변경할 수 있다.
* */

name = '르라꼬';
ive = '김정원';
console.log(name);
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);
/*
* newJeans = '개발자'; --> 에러
*
* const는 추후 값을 변경하지 못한다.
* */

var item;
console.log(item);

let item2;
console.log(item2);

/*
* const item; --> const는 선언할 때 초기화를 해주어야 한다.
*
* var 과 let은 변수 선언만 하고, 할당은 하지 않아도 된다.
* 초기값으로 undifined가 할당되어있다.
* */