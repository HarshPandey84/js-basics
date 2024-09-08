let score="33"
console.log(typeof score);
console.log(typeof(score));   //used as method------------both are same

let val_in_num=Number(score)
console.log(typeof val_in_num);

// --------------------------case
let val="24ab"
let con=Number(val);   //it will convert sucessfully in js
console.log(typeof con)// it will give number
console.log(con);   //NaN

let a=null
let c=Number(a)
console.log(c)  //type-number    value-0

let aa=undefined
let cc=Number(aa)
console.log(cc)  //type-number    value-NaN

let aaa=true
let ccc=Number(aaa)
console.log(ccc)  //type-number    value-true-1 false-0

let aaaa="harsh"
let cccc=Number(aaaa)
console.log(cccc)  //type-number    value-NaN

// -------------------------------------------------

let islogin="hello"
let q=Boolean(islogin)
console.log(q);
// when convertring to boolean
// "1"=>true    "0"=>false
// ""=>false     "xyz"=>true
// -------------------keep these in mind
