{"filter":false,"title":"Retorna_valor_de_uma_funcao_de_outro_arquivo.js","tooltip":"/Testes/Retorna_valor_de_uma_funcao_de_outro_arquivo.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":39},"action":"insert","lines":["let endcachorro = require('../Testes/axios_callback_teste');","","","","endcachorro.foo(function(retorno_da_api){","   if (retorno_da_api.length === 0) {","        console.log(\"NOT OK\");","      }  ","        console.log(retorno_da_api.data.message);","        ","});","","endcachorro.foo2(function(valorretornado){","   if (valorretornado.length === 0) {","        console.log(\"NOT OK\");","      }  ","        console.log(valorretornado.data.data.balance);","        ","});","","//console.log('Teste'+endcachorro.foo);"],"id":1}],[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"remove","lines":["."],"id":2}],[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"remove","lines":["/"],"id":3},{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"remove","lines":["s"]},{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"remove","lines":["e"]},{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"remove","lines":["t"]},{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"remove","lines":["s"]},{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"remove","lines":["e"]},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"remove","lines":["T"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":13,"column":37},"end":{"row":13,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1576715249067,"hash":"ea29e5f7073d0f430f428a15069bc8edee745fd2"}