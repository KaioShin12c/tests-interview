function minMaxSum(data: number[]): void {
  const arrSorted = data.sort((a, b) => a - b);

  const minSum = arrSorted.reduce((acc, current, idx) => {
    if (idx === 4) return acc;
    return acc + current;
  }, 0);
  const maxSum = arrSorted.reduce((acc, current, idx) => {
    if (idx === 0) return acc;
    return acc + current;
  }, 0);
  console.log(`${minSum} ${maxSum}`);
}

function totalOfArray(arr: number[]): void {
  const total = arr.reduce((acc, current) => acc + current, 0);
  console.log("Total of array:", total);
}

function findMinMaxCase1(arr: number[]): void {
  const arrSorted = data.sort((a, b) => a - b);
  const minNumber = arrSorted[0];
  const maxNumber = arrSorted[4];

  console.log("Min number case 1 is ", minNumber);
  console.log("Max number case 1 is ", maxNumber);
}
function findMinMaxCase2(arr: number[]): void {
  let minNumber = arr[0];
  let maxNumber = arr[0];

  for (let num of arr) {
    if (num > maxNumber) {
      maxNumber = num;
    }
    if (num < minNumber) {
      minNumber = num;
    }
  }

  console.log("Min number case 2 is ", minNumber);
  console.log("Max number case 2 is ", maxNumber);
}

function findEvenAndOddElement(arr: number[]): void {
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
    if (num % 2 !== 0) {
      oddNumbers.push(num);
    }
  }

  console.log("Even numbers is ", evenNumbers);
  console.log("Odd number is ", oddNumbers);
}

const data = [1, 2, 3, 4, 5];
minMaxSum(data);
totalOfArray(data);
findMinMaxCase1(data);
findMinMaxCase2(data);
findEvenAndOddElement(data);
