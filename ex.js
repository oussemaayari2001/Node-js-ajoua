const { env } = require('process');
const process=require('process');
const op1=(process.argv[2]||env.op1||null);
const op2=(process.argv[3]||env.op2||null);
console.log(env.op1);
if (!op1||!op2) {
    console.log(env.NUMBER_OF_PROCESSORS);
    console.log('no aps to add');
    
} else {
    try {
 
        nb1=parseInt(op1);
        nb2=parseInt(op2);
        res=nb1+nb2;
        console.log('la somme est egale à =',res);
        
    } catch (error) {
        console.log(error+"is the Error");
        
    }
    
}