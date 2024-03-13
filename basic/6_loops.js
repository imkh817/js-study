/**
 * 반복문
 *
 * 1) for
 * 2) while
 */
for(let i=0; i<10; i++){
    console.log(i+1);
}
console.log('--------------------')
let number = 3;
while(number > 0){
    console.log(number--);
}

/**
 * 문제) *을 이용해서 6x6의 정사각형을 출력해라.
 */
let size = 6;
let square ='';
for(let i=0; i<size; i++){
    for(let j=0; j<size; j++){
        square+='*';
    }
    square+='\n';
}
console.log(square);

/**
 * for ... in
 *
 * 오브젝트
 * -> 키 값을 받을 수 있다.
 *
 * 배열
 * -> 인덱스를 받을 수 있다.
 */
const yuJin ={
    name :'안유진',
    age : 2023
}
for(let key in yuJin)
    console.log(key); // name, age

const food = ['피자','햄버거','치킨'];

for(let value in food){
    console.log(`${value} : ${food[value]}`);
}

/**
 *  for..of
 *
 *  이터러블한 값들에만 사용할 수 있다.
 *  ex) Array
 */

for(let a of food){
    console.log(a);
}


/**
 * 즉, 인덱스 or 키를 뽑고 싶으면 for...in
 *     값을 뽑고 싶다면 for..of
 */
