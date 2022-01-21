// Function takes in plainstext and encrypts it using Caesar cipher
function CaesarCipher(plainText){
    
    // Ciphertext will contain the shifted letters
    let cipherText = '';

    // letters contain A-Z
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l'
,'m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    //Loops through the letters in plainText
    for(let i = 0; i < plainText.length; i++){

        //loops through the letters array to find index of plaintText letter in the letters array
        for(let j = 0; j<letters.length; j++){
            //checks to see if letter is found in the letters array
            if(plainText[i] === letters[j]){

                // Adds 3 to the index to shift the letter by 3 and
                //uses modulus 25 to make sure that all the indexes are with in 25 
                // hence creating a cycle from a to z and z to a 
                cipherText += letters[( j + 3) % 25];
            }
        }
    }
    return cipherText;
}

console.log(CaesarCipher('hello'));


