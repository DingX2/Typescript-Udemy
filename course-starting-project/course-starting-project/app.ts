function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // 자바스크립트에서 예외처리 하는 방법
  // if (typeof n2 !== 'number' || typeof n2 !== 'number'){
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if(showResult){
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

let number1: number = 5; //X
let number2: number; //O
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
