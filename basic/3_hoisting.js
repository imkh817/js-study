/**
 * Hoisting
 *
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동하는 것처럼 느껴지는 현상
 */
var name;
console.log(name); // undifined

var name = '김사랑';
console.log(name); // 김사랑

console.log(yuJin);
let yuJin = '아이브'; //error

console.log(ray);
const ray = '아이브'; //error

/**
 * 자바스크립트의 모든 선언에는 호이스팅이 일어난다.
 * 그런데 var 키워드로 선언된 변수와는 달리 let 키워드로 선언된 변수는
 * 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
 * 이는 let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 *일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다.
 *
 * var 는 undifined이 나오고 let과 const는 에러가 나는 이유 :
 * 오류가 나는가 하면 var 키워드는 선언과 함께 undefined로 초기화되어 메모리에 저장되는데
 * let과 const는 초기화되지 않은 상태로 선언만 메모리에 저장되기 때문이다.
 *
 * 여기서 중요한 지점은 이 호이스팅이라는 용어가 ‘선언이 먼저 메모리에 저장되었다.’는 것을 의미하기 때문에
 * 즉, ‘선언이 끌어올려진다’는 의미이기 때문에 모든 선언은 호이스팅이 일어난다는 말은 참이된다.
 * 즉, 호이스팅이 파일의 맨 위로 끌어올려진 것 같은 현상을 의미할 때 선언문 이전에 참조해서 에러를 발생시킨다고
 * 호이스팅이 일어나지 않은 것은 아니라는 의미이다.
 */


