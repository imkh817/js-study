class IdolModel{
//    name;  --> 자바스크립트는 속성을 정의하지않아도 된다.
//    year;  --> 하지만 미리 정의해놓자 다른사람이 보기 편하게

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    sayName(){ // 클래스 안에서는 function을 붙여주지 않아도된다.
        return `안녕하세요 ${this.name}입니다.`
    }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
const gaeul = new IdolModel('가을',2002);
console.log(gaeul);
const ray = new IdolModel('레이',2004);
console.log(ray);
const wonYoung = new IdolModel('장원영',2004);
console.log(wonYoung);
const liz = new IdolModel('리즈',2004);
console.log(liz);
const eseo = new IdolModel('이서',2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(eseo.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel); // function --> 클래스는 함수타입이다!
console.log(typeof yuJin); // Object --> 클래스를 구현한건 Object타입이다!