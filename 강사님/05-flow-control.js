// 연습 문제

// [연습 1] 2단 ~ 9단까지 구구단을 출력해 봅시다
function gugudan() {
    let dan = 2;
    for (let i = 1; i <= 9; i++) {
        let line = "";
        for (let dan = 1; dan <= 9; dan++) {
            line += dan + " * " + i + " = " + dan * i + "\t";
        }
        console.log(line);
    }
}
gugudan();
console.log("\n")

// [연습 2] 아래와 같이 출력하는 프로그램을 만들어 봅시다 (for문, while문)
/*

*****
****
***
**
*

*/
function star(star, max) {
    for (let i = 1; i <= max; i++) {
        let line = ""
        for (let j = i; j <= max; j++) {
            line += star;
        }
        console.log(line);
    }
}
star("*", 5);