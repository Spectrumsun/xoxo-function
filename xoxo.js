// *Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.*

// _Examples input/output:_

// ```XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false```

module.exports =  xoxo = (letter, check1, check2) => {
    const arg = letter.toLowerCase()
    const countx = [];
    const counto = [];
    for(let i in arg){
      if(arg[i] === check1){
        countx.push(arg[i])
      }
       if(arg[i] === check2){
        counto.push(arg[i])
      }
      
    }
    return countx.length === counto.length ? true : false
  }

console.log(xoxo('ooxx' ,'x', "o"))
console.log(xoxo('xooxx' ,'x', "o"))
console.log(xoxo('ooxXm' ,'x', "o"))
console.log(xoxo('zpzpzpp' ,'x', "o"))
console.log(xoxo('zzoo' ,'x', "o"))
console.log(xoxo('baba' ,'x', "o"))