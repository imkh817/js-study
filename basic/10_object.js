/**
 *  Object / 객체
 */

// Key : value pair
let yuJin = {
    name : '안유진',
    group : '아이브',
    dance : function (name){
        return `${name}이 춤을 춥니다`;
    }
};
console.log(yuJin); // { name: '안유진', group: '아이브', dance: [Function: dance] }
console.log(yuJin.name); // 안유진
console.log(yuJin['name']); // 안유진

const key = 'name';
console.log(yuJin[key]); // 안유진
console.log('-------------------');

console.log(yuJin.dance('장원영'));
console.log('-------------------');

const nameKey = 'name';
const nameValue = '이서';

const groupKey = 'group';
const groupValue = '아이브';

const functionKey = 'dance';

const member = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    [functionKey] : function () {
        console.log(`${this[nameKey]}가 춤을 춥니다.`);
        console.log(`${this.nameKey}가 춤을 춥니다.`); // -> undefined
        // this.nameKey를 참조하는 것은 객체 내에 해당 프로퍼티가 존재하지 않기 때문에 undefined가 반환된다.
        // 내가 참조하려는 것은 객체의 프로퍼티이기 때문에, 함수 내에서 직접 프로퍼티를 참조해야 한다.
    }
}
console.log(member.name); // 이서
console.log(member[groupKey]); // 아이브
console.log(member[functionKey]()); // 이서가 춤을 춥니다, undefined가 춤을 춥니다.
console.log('-------------------');

// 값 변경
member[groupKey] = '에스파';
console.log(member[groupKey]); // 에스파
console.log(member.group); // 에스파
console.log('-------------------');

// 존재하지 않는 키 값 넣기, 해당하는 key 와 value가 새로 생성된다.
member['age'] = 20;
console.log(member); // { name: '이서', group: '에스파', dance: [Function: dance], age: 20 }
console.log('-------------------');

// 값 삭제
delete member.age;
console.log(member); // { name: '이서', group: '에스파', dance: [Function: dance] }

/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경 할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const winter ={
    name : '윈터',
    group : '에스파'
}
console.log(winter);
console.log('-------------------');
// 객체 자체는 변경 불가
// winter = {}; -> 에러가 난다.

// 프로퍼티나 메서드는 변경 가능
winter['name'] = '김윈터';
console.log(winter);
console.log('-------------------');

/**
 * 모든 Key 값 다 가져오기
 */
console.log(Object.keys(winter)); //[ 'name', 'group' ]
console.log('-------------------');

/**
 * 모든 Value 값 다 가져오기
 */
console.log(Object.values(winter)); //[ 'name', 'group' ]
console.log('-------------------');

const name = '뷔';
const age = 30;

// 변수와 키 값의 이름이 같을 때는 하나만 선언해도 된다.
const bts = {
    name,
    age
}
console.log(bts);
