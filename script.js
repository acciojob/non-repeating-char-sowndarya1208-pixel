function firstNonRepeatedChar(str) {
 // Write your code here
const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    for (const char of str) {
        if (freq[char] === 1) {
            return char;
        }
    }
    return null;
}

	

			
		
	


const input = prompt("Name of string");
alert(firstNonRepeatedChar(input)); 
console. log(firstNonRepeatedChar('aabbcdd'));
