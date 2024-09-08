const acc_id=4;    //locks value -------cant change later
let acc_name="harsh";
var acc_pass="hello1234";  //not used nowadays-----because in earlier days js dont know about scope

//it was not working on and no control on block scope & functional scope, agr khi same variable name ka change kro to har jgah change

// acc_id=5;        ---------not allowed

acc_owner="Boss"   //writing direct also allocate space/reserve memory to variable and can be used ------------not advised   pls dont use

acc_name="Harsh";
console.log(acc_name);

console.table([acc_id,acc_name,acc_pass,acc_owner]);

let a;  //can later define
console.log(a);  //returns undefined

