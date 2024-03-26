/**
 * Super and Override
 */
class IdolModel{
    name;
    age;

    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 or 춤
    part;

    constructor(name,year,part) {
        super(name,year);
        this.part = part;
    }

    sayHello() {
        //return `안녕하세요 ${this.name}입니다. ${this.part}을 맡고 있습니다.`
        return `${super.sayHello()} ${this.part}을 맡고있습니다.` // -> super 키워드를 쓸때 함수는 실행할 수 있다.
    }
}
const esoe = new FemaleIdolModel('이서',2007,'보컬');
console.log(esoe);

const hani = new IdolModel('하니',2000);
console.log(hani);
console.log(esoe.sayHello());