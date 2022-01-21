Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y, and z would map to z, a, b and c. Code the Caesar Cipher in Javascript and submit it here.

Solution:

    - create a function that takes a string and number of shifts
    - within the function create an array of letters
    - create a variable to hold the shifted letters
    - create a loop that iterates through the input string
    - find the index of each of the input letters in the letters array and add 3 to the index to shift it by 3 and use mod 25 to keep the index within 25
    - append the shifted letter to the variable holding shifted letters