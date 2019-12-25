let endcachorro = require('./axios_callback_teste');



endcachorro.foo(function(retorno_da_api){
   if (retorno_da_api.length === 0) {
        console.log("NOT OK");
      }  
        console.log(retorno_da_api.data.message);
        
});

endcachorro.foo2(function(valorretornado){
   if (valorretornado.length === 0) {
        console.log("NOT OK");
      }  
        console.log(valorretornado.data.data.balance);
        
});

//console.log('Teste'+endcachorro.foo);