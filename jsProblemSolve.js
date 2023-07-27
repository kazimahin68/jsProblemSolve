// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(input) {
    let reversedString = '';

    for (let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }

    return reversedString;
}
const inputString = "hello world";
const reversedString = reverseString(inputString);
//   console.log(reversedString);


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}
const inputArray = [2, -5, 10, -3, 7];
const result = sumOfPositiveNumbers(inputArray);
//   console.log(result);

//   Task 3: Write a JavaScript program to find the most frequent element in an array and return it

function findMostFrequentElement(arr) {
    // Create an object to store the frequency of each element
    let frequency = {};

    // Count the frequency of each element in the array
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
    }

    let mostFrequentElement;
    let maxFrequency = 0;
    // Find the element with the highest frequency
    for (const element in frequency) {
        if (frequency[element] > maxFrequency) {
            mostFrequentElement = Number(element); // Convert back to number since keys in objects are strings
            maxFrequency = frequency[element];
        }
    }

    return mostFrequentElement;
}
const inputData = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = findMostFrequentElement(inputData);
// console.log(mostFrequent);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no such pair is found, return an empty array
    return [];
}
const input = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const output = findTwoNumbersSum(inputArray, targetValue);
// console.log(result);


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// console.log(calculator(5, '+', 3));
// console.log(calculator(10, '-', 4));
// console.log(calculator(2, '*', 5));
// console.log(calculator(10, '/', 2));
// console.log(calculator(6, '/', 0));
// console.log(calculator(8, '%', 3));



// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentNumeralValue = romanNumerals[roman[i]];
        console.log(currentNumeralValue)
        const nextNumeralValue = romanNumerals[roman[i + 1]];
        //   console.log(nextNumeralValue)

        if (nextNumeralValue > currentNumeralValue) {
            result += nextNumeralValue - currentNumeralValue;
            i++; // Skip the next numeral since it's already accounted for
        } else {
            result += currentNumeralValue;
        }
    }

    return result;
}
//   console.log(romanToInteger("III"));
//   console.log(romanToInteger("IXX"));


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two numbers.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    if (secondSmallest === Infinity) {
        return "All elements in the array are the same.";
    }

    return secondSmallest;
}

const inputNumber = [5, 2, 9, 1, 7, 3];
const secondSmallest = findSecondSmallest(inputNumber);
// console.log(secondSmallest);





