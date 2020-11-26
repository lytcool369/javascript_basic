// 옛날 자바스크립트의 함수
function foo(a, b){
    console.log(a, b);
};

var goo = function(a, b){
    console.log(a, b);
};

foo(10, 20);
foo("hello", "bye");
goo("real", 10)


// ES6 기준 함수 (뚱뚱한 화살표 함수(fat arrow function))
const hoo = (c, d) => {
    console.log(c, d)
};

hoo("hello", 10);