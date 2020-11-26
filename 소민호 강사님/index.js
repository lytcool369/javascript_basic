// 1. node.js 설치
// 2. 터미널: npm init
// 3. 터미널: npm install nodemon
// 4. package.json -> "scripts" -> "start": "nodemon index.js" 추가
// 5. npm start



// 자바스크립트에는 총 3종류의 변수
// 옛날 방식
var test1 = 10
// console.log(test1);
// console.log(test1 == 10);    // TRUE
// console.log(test1 == "10");  // TRUE
// console.log(test1 === 10);   // TRUE
// console.log(test1 === "10"); // FALSE

if (test1 === 10){
    console.log("10");
    var test2 = 20;
}
console.log(test1 + test2)  // 호이스팅 현상 : if문 안에 있는 test2변수를 사용하고 있다.


// ES6 방식
const test3 = 10;   // const로 선언된 것은 불변이다.
let test4 = 20;

// test3 = 20; // error
test4 = 50;

if (test3 === 10){
    const temp = 10;
}

// console.log(test3 + temp);   // error : 더이상 호이스팅 현상이 일어나지 않는다.

