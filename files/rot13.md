# Rot 13

One of the simplest and most widely known ciphers is a *Caesar cipher*, also known as a *shift cipher*. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the [ROT13](https://en.wikipedia.org/wiki/ROT13) cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a [ROT13](https://en.wikipedia.org/wiki/ROT13) encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

## Code

	function rot13(str) {
	  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
	  let result = [];
	  for (let element in str) {
	    const rot13 = alphabet.indexOf(str[element]) + 13;
	    !str[element].match(/^[0-9a-zA-Z]+$/)
	      ? result.push(str[element])
	      : rot13 < alphabet.length
	        ? result.push(alphabet[rot13])
	        : result.push(
	          alphabet[alphabet.indexOf(str[element]) + 13 - alphabet.length]
	        );
	  }
	  return result.join("");
	}