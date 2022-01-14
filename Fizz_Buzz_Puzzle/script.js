
function check_divisibility(number){

    // for loop iterates from 1 to number in parameter
    for(let i = 1; i < number; i++)
    
    // checks to see if value in i is divisible by 3 and 5
    if(i % 3 == 0 && i % 5 == 0){
        // prints Fizz Buzz to console
        console.log('Fizz Buzz');
    }

    // checks if value in i is divisible by 3
    else if(i % 3 == 0 ){
        //prints Fizz to console
        console.log('Fizz');
    }
    
    else{
        // if the value in i  is not divisible by 3 or (3 and 5)
        //then log number to console
        console.log(i);
    }
}

//calls the function with parameter
check_divisibility(35);