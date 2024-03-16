/**
 * Function
 */



/**
 * 함수에서 입력받는 값에 대한 정의를 parameter라고 한다.
 * 실제 입력하는 값은 argument라고 한다.
 */
function calculate(number){
    console.log(number * 5);
}

calculate(10);

/**
 * Arrow 함수
 */


const result = ()=>{

    return 5;
}
console.log(result());
console.log('---------------------');

const result2 = (x,y) => {
    return x * y;
}
console.log(result2(2,5));
console.log('---------------------');

const result3 = (x,y) => x*y;
console.log(result3(10,3));
console.log('---------------------');

const result4 = x => x/2;
console.log(result4(100));
console.log('---------------------');

const result5 = x => y => z=> `x: ${x}, y:${y}, z:${z}`;
console.log(result5(3)(4)(5));
console.log('---------------------');

const variable = function (x,y){
    return x*y;
}
console.log(variable(3,4));
console.log('---------------------');

const variable2 = function (x,y,z){
    console.log(arguments); // -> argument들은 출력해준다. [Arguments] { '0': 1, '1': 2, '2': 3 }
    return x*y*z;
}
console.log(variable2(1,2,3));
console.log('---------------------');

const variable3 = function (...arguments){ // -> 무한으로 parameter를 받을 수 있다.
    console.log(arguments);
    return Object.values(arguments).reduce((a,b) => a*b);
}
console.log(variable3(1,2,3,4,5));

/**
 * 정의와 동시에 바로 사용가능한 함수
 */

(function (x,y){
    console.log(x*y);
})(3,4);



