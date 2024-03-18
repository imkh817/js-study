/**
 * Array Functions
 */

/**
 *  원본 배열을 직접적으로 변경하는 함수
 */

let iveMembers =[
    '안유진',
    '레이',
    '리즈',
    '가을',
    '이서',
    '장원영'
]
console.log(iveMembers); // [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ]


// push ((맨 마지막에 추가)
// iveMembers 배열을 직접적으로 변경
iveMembers.push('유나'); // ['안유진', '레이', '리즈','가을','이서','장원영', '유나']
console.log(iveMembers);
console.log('-----------------------------------');
// pop (맨 마지막 인덱스 값 삭제)

// iveMembers 배열을 직접적으로 변경
iveMembers.pop('유나');
console.log(iveMembers); // console.log(iveMembers); // [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ]
console.log('-----------------------------------');

// shift()
// 배열의 첫번쨰 부터 제거
// pop은 뒤에서 부터 제거하고 shift는 앞에서 부터 제거한다.
// iveMembers 배열을 직접적으로 변경
console.log(iveMembers.shift()); // 안유진
console.log(iveMembers.shift()); // 레이
console.log(iveMembers); // [ '리즈', '가을', '이서', '장원영' ]
console.log('-----------------------------------');

// unshift()
// 배열의 첫번째 인덱스부터 값을 넣음
// push는 마지막 인덱스부터 값을 추가하고, unshift는 첫번째 인덱스부터 추가
// iveMembers 배열을 직접적으로 변경
console.log(iveMembers.unshift('레이')); // 5
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers); // [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ]
console.log('-----------------------------------');
// splice(삭제 시작할 인덱스, 삭제할 데이터 갯수)

// iveMembers 배열을 직접적으로 변경
console.log(iveMembers.splice(0,3)); // [ '안유진', '레이', '리즈' ]
console.log(iveMembers); // [ '가을', '이서', '장원영' ]
console.log('-----------------------------------');

/**
 *  원본 배열을 직접적으로 변경하지 않고 새로운 배열을 반환하는 함수
 */
iveMembers =[
    '안유진',
    '레이',
    '리즈',
    '가을',
    '이서',
    '장원영'
]
console.log(iveMembers);
console.log('-----------------------------------');

// concat() -> 기능은 push()와 같다.
// 마지막 인덱스의 값 추가
// iveMembers 배열을 직접적으로 변경 X
let arr = iveMembers.concat('개발바닥');
console.log(arr); // ['안유진', '레이', '리즈','가을','이서','장원영', '개발바닥']
console.log(iveMembers); // ['안유진', '레이', '리즈','가을','이서','장원영']
console.log('-----------------------------------');
// slice(삭제를 시작할 인덱스, 삭제할 데이터 갯수) -> 기능은 splice(삭제를 시작할 인덱스, 삭제할 데이터 갯수)와 같다.

// iveMembers 배열을 직접적으로 변경 X
arr = iveMembers.slice(0,3);
console.log(arr); // [ '안유진', '레이', '리즈' ]
console.log(iveMembers); // [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ]
console.log('-----------------------------------');

// spread operator
// ...배열이름 을 하면되고, 그렇게 되면 그 해당 배열에 있던 값들이 펼쳐져서 들어간다.
// 만약 ...배열이름을 하지 않고 그냥 배열을 넣게되면 배열 그 자체가 들어간다.
// spread operatpr 사용
let iveMembers2 = [
    ...iveMembers
];
console.log(iveMembers2); // [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ]

// spread operatpr 미사용
let iveMembers3 = [
    iveMembers
];
console.log(iveMembers3); // [ [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ] ] -> 보면 배열 자체가 들어가게 된다.
console.log('-----------------------------------');

// spread operater도 새로운 배열을 생성하게 된다. 아래의 결과를 확인해보자!
iveMembers2 = iveMembers;
console.log(iveMembers2 === iveMembers); // true
console.log(iveMembers2 = {
    ...iveMembers
}===iveMembers); // false
console.log('-----------------------------------');

// join()
console.log(typeof iveMembers.join()); // string
console.log(iveMembers.join()); // 그냥 join을 하게되면 ,를 기준으로 모든 값들을 문자열로 반환해준다. -> 안유진,레이,리즈,가을,이서,장원영
console.log(iveMembers.join('/')); // 안유진/레이/리즈/가을/이서/장원영 -> '/'를 기준으로 문자열을 합해서 준다.

// sort()
// 오름차순으로 정렬된다.
console.log(iveMembers.sort()); // [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]

// reverse()
// 내림차순으로 정렬된다.
console.log(iveMembers.reverse()); // [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers =[
  1,
  3,
  5,
  7,
  9
];
console.log(numbers); // [ 1, 3, 5, 7, 9 ]
console.log('------------------------');
// 사용자가 임의로 정렬 기준 만들기


// a,b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려 0을 반환

// 오름차순
numbers.sort((a,b) =>{
    return a>b ? 1 : -1; // a가 b보다 크면 1을 반환, 작으면 -1을 반환 [ 1, 3, 5, 7, 9 ]
})
console.log(numbers);
console.log('------------------------');

// 내림차순
numbers.sort((a,b) => a>b?-1:1);
console.log(numbers);
console.log('------------------------');

// 원래 순서를 그대로 두기
// 위에서 순서를 [ 9, 7, 5, 3, 1 ]으로 바꿨기 때문에 결과가 [ 9, 7, 5, 3, 1 ] 나온다.
numbers.sort((a,b) =>   {0});
console.log(numbers);
console.log('------------------------');

// map()
// iveMembers 배열을 직접적으로 변경 X
// x라는 파라미터에 [ '안유진', '레이', '리즈', '가을', '이서', '장원영' ] 값 하나하나 씩 들어옴, 모든 값을 순회한다.
// 화살표는 어떻게 변형할건지를 의미, 아래에서는 그대로 x값 반환
console.log(iveMembers.map(x=>x));
console.log(iveMembers.sort().map(x=> `아이브 : ${x}`));
console.log(iveMembers.map(x => {
    if(x === '이서') return `아이브 : ${x}`;
    else return x
}))
console.log('------------------------');

// filter()
// numbers 배열을 직접적으로 변경 X
// 해당하는 모든 값을 반환
numbers = [1,8,7,6,3];
console.log(numbers.filter(x=>x%2 === 0)); // [ 8, 6 ]
console.log('------------------------');

// find()
// numbers 배열을 직접적으로 변경 X
// 해당하는 모든 값 중 첫 번째 값을 반환
console.log(numbers.find(x => x % 2===0)); // 8
console.log(numbers.find(x => {
    if(x === 6) return x;
}))
console.log('------------------------');

// findIndex()
// find와 같은데 Index를 반환해준다.
console.log(numbers.findIndex(x => x % 2===0)); // 8
console.log('------------------------');

// reduce()
// reduce(콜백함수(누산기 (acc), 현재 값 (cur), 현재 인덱스 (idx), 원본 배열 (src)),  시작값);
let result;
console.log(numbers.reduce((a, b, index) => {
    if (index === 3) {
        result = a;
        return;
    }
    return a * b;
}));
console.log(result);
console.log('------------------------');

// 자바스크립트 공식문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce