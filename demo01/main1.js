var fs = require('fs');
fs.readFile('input.tx',function(a,b){
    if( a ){
        console.error(a.stack);
        return 
    }
    console.log(b.toString());
})
console.log('程序执行完毕')