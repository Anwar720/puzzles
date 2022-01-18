Given two stings ransomNote and magazine, 
return true if ransomNote can be constructed from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote. 

solution:

    - Create function that takes 2 parameters;
    - loop through ransomeNote and check if each letter is present within the magazine
        - create a tmp variable to hold letters taken from magazine
    - if the letter from ransomeNote exists in magazine then add the letter to the tmp variable holding the letters and remove the letter from magazine
    - if all the letters are present and added to tmp variable then compare ransomeNote to tmp and return true if they are the same else return false.