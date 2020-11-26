// callback 함수 (비동기식 함수)

// foo라는 함수가 setTimeout의 콜백 함수가 된다.
const foo = () => {
    console.log("Hello");
};

setTimeout(foo, 3000);

console.log("hihi");