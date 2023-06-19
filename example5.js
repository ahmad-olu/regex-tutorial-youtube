// by Daniel Roe

//? npm install magic-regexp
//? yarn add magic-regexp
//? pnpm install magic-regexp

// don't forget to add "type": "module"
//assertions test the assumption of the program...

import { char, createRegExp, digit, exactly, letter, oneOrMore, wordChar } from 'magic-regexp'

const emailStr = 'example123@example.com'

const emailReg = createRegExp(
    oneOrMore(wordChar.or(digit))
    .and('@')
    .and(oneOrMore(wordChar.or(digit)))
    .and(
        exactly('.')
        .and(oneOrMore(letter.or(digit))
        .times.atLeast(1))
    )
)
//console.log(emailStr.match(emailReg))
//console.log(emailReg.test(emailStr))


const phoneStr = '001-555-123-4567'
const phoneReg = createRegExp(
    oneOrMore(digit).and('-')
    .and(oneOrMore(digit).and('-'))
    .and(oneOrMore(digit).and('-'))
    .and(oneOrMore(digit))
)
//console.log(phoneStr.match(phoneReg))


const userNameStr = 'Lilo_234_'
const userNameReg = createRegExp(
    exactly('Li')
    .and(oneOrMore(letter.or(digit)))
    .and('_')
    .and(char.times.between(2,7))
)
//console.log(userNameStr.match(userNameReg))

const randomStrs = [
    'My name is Lagos',
    'I come from Lagos',
    'Lagos is beautiful',
    'The capital of Lagos is ...',
    'I wont show'
]

const randomRegs = createRegExp(exactly('Lagos'))
console.table(randomStrs.map((s)=>{
    return [s,s.match(randomRegs)?.[0]]
}))
