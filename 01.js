let kal1 = "ibu ratna antar ubi"
let kal2 = "kasur ini rusak"
let kal3 = "A nut for a jar of tuna"
let kal4 = "borrow or rob"
let kal5 = "Was it a car or a cat I saw?"
let kal6 = "Yo, banana boy!"
let kal7 = "UFO tofu?"

const isPaindrome = (inStr) => {
	const re = /[\W_]/g

	inStr = inStr.toLowerCase().replace(re, '')
	for(let i=0; i<inStr.length; i+=1){
		if(inStr[i] !== inStr[inStr.length -1-i]){
			return 'Bukan Palindrome'
		}	
	}
	return 'Palindrome'
}

console.log(isPaindrome(kal1))
console.log(isPaindrome(kal2))
console.log(isPaindrome(kal3))
console.log(isPaindrome(kal4))
console.log(isPaindrome(kal5))
console.log(isPaindrome(kal6))
console.log(isPaindrome(kal7))