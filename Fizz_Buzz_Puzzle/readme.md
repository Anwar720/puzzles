Create a function that takes a number as a parameter. This function will print out (console.log()) every number from 1 to the number passed as the parameter, now:
- if the number is divisible by 3 then the function will print out the word 'Fizz' instead of the number.
- if the number is divisible by 3 and 5 then the function will print out the word 'Fizz Buzz' instead of the number.

solution:

- create a function that takes a number as parameter 
- inside the function create a for loop iterating from 1 to number in argument:
- if (num % 3) == 0 && (num % 5) == 0 meaning the value of iterator is divisible by both 3 and 5:
    - then console.log('Fizz Buzz')
- else if (num % 3) == 0 meaning that the value in iterator is only divisible by 3:
    - then console.log('Fizz')
- else print the number to the console