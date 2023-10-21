1 + '3'

let 이름: string = 'kim';
let 이름2: string[] = ['kim', 'park'];
let obj: { name: string } = { name: "kim" };

// 문자, 숫자 다 받을수 있게
let 유니온: string | number = 123;
let 유니온2: string[] | number = 123;

// 타입 지정을 변수에 담아서 활용할 수 있다. Type Alias, 주로 영어 대문자로 함. 다른 변수랑 구분하려고
type MyType = string | number;
let 호우: MyType = "123";


// 파라미터 설정 가능
function 함수(x: string) {
    return x;
}
// return parameter 설정
function 함수2(x: number): number {
    return x * 2;
}

//함수(123); //에러
함수2(1233);


//array에 쓸 수 있는 Tuple 타입, 첫번째는 number, 두번째는 boolean이 반드시 들어와야 한다.
type Mumber = [number, boolean];
let john: Mumber = [123, true];

type Mem = {
    [key: string]: string // 문자로 된 모든 object속성의 타입은 string이어야한다.
};

let john2: Mem = { name: 'kim', age: '123' };


class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export { }