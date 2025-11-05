function firstNonRepeatedChar(str) {
 // Write your code here

	for (let i=0;i<str. length;i++) {
		if(str. includes(str[i]) && str[i+1]!= str[i]){
			return i;
		}else{
			return null;
		}
	}
	
}

const input = prompt("aabbcdd");
alert(firstNonRepeatedChar(input)); 
console. log(firstNonRepeatedChar(input));