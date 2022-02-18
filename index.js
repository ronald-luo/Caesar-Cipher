// create char=index hash data structure
let hashmap = {};
(() => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    for (let i = 0; i < alphabet.length; i++) {
        hashmap[alphabet[i]] = i
        hashmap[ALPHABET[i]] = i
    }
})();


// create alphabet arr data structure
let arr = [];
let ARR = [];
(() => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

    for (let char of alphabet) {
        arr.push(char)
    }

    for (let char of ALPHABET) {
        ARR.push(char)
    }
})()

// rotate a string k steps to the right and return the result
const rotateString = function (chars, k) {
    let result = ''
    let temp = chars.split('')

    for (let i = 0; i < temp.length; i++) {
        const pos = hashmap[temp[i]]
        if (/^[^a-z]*$/.test(temp[i])) {
            if (pos == undefined) {
                result += temp[i]
            } else {
                result += ARR[(pos + k) % ARR.length]
            }

        } else {
            if (pos == undefined) {
                result += temp[i]
            } else {
                result += arr[(pos + k) % arr.length]
            }
        }

    }

    displayOutput(result)
}

// get chars and k from user form
const getFormData = function (e) {
    e.preventDefault()
    let inputChars = document.getElementById('cypher-input').value
    let inputVal = document.getElementById('k').value

    rotateString(inputChars, Number(inputVal))
}

// display output to DOM
const displayOutput = function (rotatedString) {
    const output = document.getElementById('cypher-result')
    output.value = rotatedString
}

// add event listener to form
document.addEventListener('submit', getFormData)