/**
 * if and switch
 */

let num = 10;
if (num % 2 == 0) console.log('짝수');
else console.log('홀수');

const englishDay = 'monday';

let koreanDay;

switch (englishDay){
    case 'monday' :
        koreanDay = '월요일'
        break;
    case 'tuesday' :
        koreanDay = '화요일';
        break;
    default :
        koreanDay = '주말';
        break;
}

console.log(koreanDay);