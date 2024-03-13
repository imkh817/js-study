/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적 변환
 * 2) 암묵적 변환
 */

// 명시적 변환
let age = 27;
let ageString = age.toString();
console.log(typeof ageString); // string

// 암묵적
let test = age + '';
console.log(typeof test); // string

console.log('99'+1); // 991 -> 1이 문자열로 변환되서 문자열이 합쳐짐
console.log('98' * 2); //196 -> 문자열에는 *는 개념이 없기 때문에 98문자열이 숫자로 변환되서 연산됨

/**
 * Boolean 타입으로의 변환
 *
 * Boolean으로 변환했을 때 문자열 어떤 값이 있어도 true로 반환된다.
 */
console.log(!'x'); // false
console.log(!!'x'); // true
console.log(!!'어떤 값'); // true
console.log(!!''); // false -> 아무런 값을 넣지 않으면 false로 나온다.
console.log(!!0) // false -> 0이라는 숫자도 false로 나온다.
console.log(!!'0') //true -> 문자열 0은 true로 나온다.
console.log(!!false); // false;
console.log(!!undefined) // false;
console.log(!!null) // false;

console.log('----------------------------')

console.log(!!{}); // true -> object는 true로 나온다.
console.log(!![])// true -> array도 true로 나온다.

/**
 * 1) 아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 숫자 0일 때
 *
 * 모두 false를 반환한다.
 */
