/**
 * Operator
 *
 * 숫자 타입이 아닌 경우에 +,-를 하면 어떻게 될까?
 */
let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number
console.log(typeof sample); // string

/**
 * +를 붙인다고 원래의 sample 변수의 타입이 변경되는 것은 아니다.
 * console.log(typeof +sample); --> +를 붙인 해당 줄에서만 타입이 변경된다.
 */

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
// 값의 비교
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true

// 값과 타입의 비교
console.log(5 === '5'); // false
console.log(0 === ''); // false

/**
 * 논리 연산자
 *
 * 1) &&
 * 2) ||
 */
// && 조건은 모두 true 여야 true를 반환한다.
console.log(true && true); // true
console.log(true && false); // false

// ||은 하나만 true여도 true를 반환한다.
console.log(true || true); // true
console.log(true || false); // true

/**
 * 단축 평가 (short circuit evalution)
 *
 * &&를 사용했을 때 좌측값이 true면 우측값 반환
 * &&를 사용했을때 좌측값이 false면 좌측값 반환
 *
 * ||를 사용했을 때 좌측값이 true면 좌측값 반환
 * ||를 사용했을 때 좌측값이 false면 우측값 반환
 */

console.log(true && '에스파'); // 에스파
console.log(false && '트와이스'); // false

console.log(true || '아이브'); // true
console.log(false || '뉴진스'); // 뉴진스

console.log(true && true && '르세라핌'); // 르세라핌

/**
 * null 연산자
 *
 */
let name;
console.log(name); // undifined

name = name ?? '꽃'; // --> ??는 좌측값이 null이거나 undifined일때 오른쪽 값을 반환한다.
console.log(name); // 꽃

name = name ?? '자전거'; // --> 위에서 꽃을 할당해줬기 때문에 자전거가 할당되지 않는다.
console.log(name); // 꽃

let name2;
name2 ??= '탕후루';
console.log(name2); // 탕후루


