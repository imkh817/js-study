class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private 한 값을 반환할 때
     */
    get nameAndYear() {
        return `${this.name} -> ${this.age}`;
    }

    set setName(name){
        this.name = name;
    }

    set setAge(age){
        this.age = age;
    }
}
const hong = new Person('홍길동',100);
console.log(hong.nameAndYear); // -> 함수처럼 선언했지만 get은 변수처럼 사용할 수 있다.
hong.setName = '전우치';
console.log(hong);  // -> 전우치로 변경됨

class Person2{
    #name; // ->private란 의미
    age = 20;

    constructor(name,age) {
        this.#name = name;
        this.age = age;
    }

    set setName(name){
        this.#name = name;
    }

    get getName(){
        return this.#name;
    }

    introduce(){
        return `나는 ${this.#name}이고, 나이는 ${this.age}입니다.`
    }

}
const son = new Person2('손흥민',33);
console.log(son); // Person2 { age: 33 }
console.log(son.getName);
