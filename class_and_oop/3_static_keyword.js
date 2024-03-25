/**
 * Static Keyword
 */
class IdolModel{
    name;
    year;
    static groupName = '아이브'; // -> 클래스 자체에 귀속

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    static getGroupName(){
        return '아이브';
    }
}
const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);

console.log(IdolModel.groupName);
console.log(IdolModel.getGroupName());

/**
 * Factory Constructor
 */
class IdolModel2{
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year
        )
    }

    static fromList(list){
       list.forEach(person => {
            console.log(new IdolModel2(person.name,person.year)) ;
        })
    }

    static fromList2(list){
        list.map(x =>{
            console.log(new IdolModel2(x.name,x.year));
        })
    }

    static fromList3(list){
        return new IdolModel2(list[0],list[1]);
    }
}

const yuJin2 = IdolModel2.fromObject({name : '장원영',year : 2002});
console.log(yuJin2);
let list = [{name:'이서',year:2002},{name : '김만득',year: 1999}];
IdolModel2.fromList(list);
console.log('---------------------------------');
IdolModel2.fromList2(list);
console.log('---------------------------------');
const wonYoung = IdolModel2.fromList3(['장원영',2003]);
console.log(wonYoung);
