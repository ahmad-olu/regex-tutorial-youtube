import re

#* re.match(pattern, string): Attempts to match the pattern at the beginning 
#                             of the string.
#* re.search(pattern, string): Searches the string for a match to the 
#                             pattern anywhere in the string.
#* re.findall(pattern, string): Returns all non-overlapping matches of 
#                             the pattern in the string as a list.
#* re.finditer(pattern, string): Returns an iterator yielding match objects for 
#                              all non-overlapping matches of the pattern in the string.
#* re.sub(pattern, replacement, string): Returns a new string where occurrences of 
#                     the pattern in the string are replaced with the replacement string.

contact = "Please contact me at john.doe@example.com or jane@example.com"

pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

matches = re.findall(pattern, contact)
print(matches)


string = "The quick brown fox jumps over the lazy dog."

#! 1
pattern = r'([a-zA-Z]|\\d)+ quick'
match = re.match(pattern, string)
#print('match()', match)


#! 2
pattern = r'brown'
match = re.search(pattern, string)
#print('search', match)


#!3

pattern = r'[a-zA-z]+'
match = re.findall(pattern, string)
#print('findall', match)

#! 4
pattern = r'\b\w{3}\b'
matches = re.finditer(pattern, string)
# print('finditer')
# for match in matches:
#     print(match.group())

#! 5
print(string)
pattern = r'lazy'
match = re.sub(pattern,"active", string)
print('sub', match)

