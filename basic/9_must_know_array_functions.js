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
console.log(iveMembers.join()); // 그냥 join을 하게되면 ,를 기준으로 모든 값들을 문자열로 반환해준다.
