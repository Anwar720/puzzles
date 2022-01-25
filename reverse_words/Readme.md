Question: Write a function that will reverse every word in a given string and return the new string. Every word should be reversed but the string as a whole should not be reversed. And DO NOT use array.reverse() method

solution:

- create a function that takes a string as parameter:
    - define variables start to hold the start of a word
    - define a variable tmp to hold the reversed words
    - loop through the length of the string
    - check for space and end to the sentence
        - if a space occurs or end to the sentence
        - start a second loop and set it to start from index of first loop and decrement until the start of the word
        - concatenate the letters to the tmp variable
        - after adding the word to tmp variable, set the start of the next word to the index of the first loop
        - continue until the entire string is reversed then return string 

