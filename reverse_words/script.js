//Function takes a string and reverses all words 
function reverse(string){
    //start keep track of the start of the word
    let start = 0;
    // tmp stores the reversed words
    let tmp = '';
    
    // loops through the length of the string
    for(let i=0;i<string.length; i++){

        //checks for space or end of the string
        if(string[i] == ' ' || i === string.length - 1){

            //loop strts from end of the word and decrements until the start of the word
            for(let j = i; j >= start; j--){
                // concatenates the letters into tmp
                tmp += string[j]
            }
            // adds space between words
            tmp+=' ';
            //sets start to the start of the next word
            start = i;
        }
    }
    return tmp;
}

console.log(reverse('Hello there'))
console.log(reverse('How are you doing on this fine evening ?'))