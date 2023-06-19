//* test(string): Tests whether the pattern matches the provided string and
//                             returns a boolean value.
//* exec(string): Searches the string for a match to the pattern and returns
//                              a match object or null.
//* match(pattern): Extracts matches from the string using the pattern and
//                              returns an array or null.
//* replace(pattern, replacement): Replaces matches of the pattern in the 
//                          string with the replacement string and returns a new string.
//* search(pattern): Searches the string for the first occurrence
//                             of the pattern and returns the index or -1 if not found.
//* split(pattern): Splits the string into an array of 
//                               substrings based on the pattern.

const string0 = "Please contact me at john.doe@example.com or jane@example.com";

const pattern0 = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

const matches0 = string0.match(pattern0);
//console.log(matches0);


const string = "The quick brown fox jumps over the lazy dog.";

//! 1

const pattern = /^quick/;
const isMatch = pattern.test(string);
//console.log('test ():', isMatch);


//! 2
const searchPattern = /brown/;
const match = searchPattern.exec(string);
//console.log('exec ():', match);

//! 3
const findAllPattern = /[a-zA-Z]+/g;
const matches = string.match(findAllPattern);
//console.log('match ():', matches);

//! 4
const replacePattern = /lazy/;
const newString = string.replace(replacePattern, "active");
//console.log('replace ():', newString);

//! 5
const searchIndexPattern = /jumps/;
const index = string.search(searchIndexPattern);
//console.log('search ():', index);

//! 6
const splitPattern = /\s/;
const words = string.split(splitPattern);
console.log('split ():', words);
