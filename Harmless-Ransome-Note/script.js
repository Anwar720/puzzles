// Functions checks if ransomeNote can be constructed from magazine
function ransome(note,magazine){

    //tmp stores letters taken from magazine
    let tmp = '';

    // loops through the letters in note
    for(let i = 0; i < note.length ;){
        //loops through the letters in magazine
        for(let j = 0; j < magazine.length; j++){

            //compares the letter from note to letters from magazine 
            if(note[i] === magazine[j]){

                //if the letter is found in magazine then append it to tmp
                tmp += magazine[j];

                //remove the letter from magazine 
                magazine[j] = ' ';

                //move on to next letter in note
                i++;
            
        }
       
    }

}

    //checks if tmp is equal to ransomeNote
    if(note === tmp){
        //returns true if they are the equal
        // console.log(tmp);
        return true;
    }else {
        console.log(tmp);
        return false;
    } 

}

console.log(ransome('hello','the lemon also called lime'));

