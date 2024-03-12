/**
 * Data types
 *
 * 여섯개의 Primitive 타입과 한개의 오브젝트 타입이 있다.
 *
 * 1) Number
 * 2) String
 * 3) Boolean
 * 4) undefined
 * 5) null
 * 6) Symbol
 *
 * 7) Object
 *    Function
 *    Array
 *    etc...
 */

const age = 27;
console.log(typeof age); // number

const infinity = Infinity; // 무한대
const nInfinity = -Infinity; // 음수 무한대

console.log(typeof infinity); // number
console.log(typeof nInfinity); // number

const name = '김마수';
console.log(typeof name); // string

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const introduce = '나는\n개발자';
console.log(introduce);

const introduce2 = '나는\t개발자';
console.log(introduce2);

const introduce3 = '나는\\개발자';
console.log(introduce3);

const introduce4 = `나는 //\\ 개발자 $`; // --> 내가 입력한대로 나온다.
console.log(introduce4);

const job = '개발자';
console.log(`${job}입니다.`); // --> `${}`를 쓰면 안에 넣은 것을 변수로 인식한다.

/**
 * null 타입과 undifined 타입의 차이점
 *
 * null 타입은 undifined와 마찬가지로 값이 없다는 뜻이나
 * Js에서는 개발자가 명시적으로 없는 값으로 초기화 할때 사용한다.
 */
const variable = null;
console.log(variable);

/**
 * symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '1';
console.log(test1 === test2); // true

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
// Symbol안에 값은 유지되는데 유일무이한 값으로 인식된다.
// 자바의 class 를 비교할때랑 비슷하다.
console.log(symbol1 === symbol2); // false

/**
 * Object 타입
 *
 * 자바의 Map과 비슷하다.
 * 키 : 밸류의 쌍으로 이루어져 있다.
 *
 */
const color = {
    red : '빨간색',
    orange : '주황색',
    blue : '하늘색'
    }
console.log(color); // { red: '빨간색', orange: '주황색', blue: '하늘색' }
console.log(color['red']); // 빨간색
// ---> 자바에서 배열처럼 해당 값을 찾을 수 있다. 다른점은 인덱스를 쓰는게 아니라 해당 찾을 키 값을 넣어준다.

/**
 * Array 타입
 *
 * 값을 리스트로 나열할 수 있는 타입이다.
 */
const iveMembersArray = [
    '안유진','가을','레이'
];
console.log(iveMembersArray); // [ '안유진', '가을', '레이' ]
console.log(iveMembersArray[0]); // 안유진

/**
 * static typing -> 변수를 선언할 때 명시적으로 타입을 선언해준다.
 *                  ex) java, C
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론한다.
 *                  ex) javascript
 */


