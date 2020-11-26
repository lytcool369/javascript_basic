// 배열의 용도: 여러 개의 데이터를 하나의 변수에 담아 놓기 위해 사용한다.
const arr = [10, 20, 30];
console.log(arr);
console.log(arr[0]);    // 인덱스를 활용하여 배열에 있는 원소 꺼내기
console.log("----------------");

// 배열 순회
// for, forEach, map(중요)

// 1. for문을 이용한 배열 순회
for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
};
console.log("-------------------------------");

// 2. forEach문을 이용한 배열 순회
arr.forEach((data, idx) => {
    console.log(data, idx);
});

// 3. map을 활용한 배열 순회 (리엑트에서 제일 많이 사용되는 방식)
// 원소를 하나씩 꺼내서 리턴
const mappedArr = arr.map((x) => x * 2);
console.log("mappedArr", mappedArr);
console.log("-------------------------------");

// 배열에 데이터 추가하기 (push)
arr.push(40);
arr.push(50);
console.log(arr);
console.log("-------------------------------");

// 배열에서 원소 제거하기 - pop() -> 배열의 제일 뒤에 있는 원소를 제거
const removedElement = arr.pop();
console.log(removedElement);
console.log(arr);
console.log("-------------------------------");

// 배열에서 데이터 추가하기 unshift(데이터) -> 배열의 제일 앞에 원소를 추가
arr.unshift(0);
console.log("unshift(데이터)\t", arr);
console.log("-------------------------------");

// 배열에서 원소 제거하기 - shift() -> 배열의 제일 앞에 있는 원소를 제거
arr.shift();
console.log("shift()\t\t", arr);
console.log("-------------------------------");
