{"filter":false,"title":"get_teste.js","tooltip":"/get_teste.js","undoManager":{"mark":26,"position":26,"stack":[[{"start":{"row":0,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["const request = require('request');","","request.get('https://reqres.in/api/users', { json: true }, (err, res, body) => {","    if (err) {","        return console.log(err);","    }","","    // print the users","    body.data.map(user => {","        console.log(`${user.first_name} ${user.last_name}`);","    });","});",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["const request = require('request');","const dados = require('./models/DadosGetParaBanco');","const express = require(\"express\");","const app = express();",""],"id":3}],[{"start":{"row":4,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["","const request = require('request');",""],"id":4}],[{"start":{"row":5,"column":13},"end":{"row":5,"column":40},"action":"remove","lines":["https://reqres.in/api/users"],"id":5},{"start":{"row":5,"column":13},"end":{"row":5,"column":91},"action":"insert","lines":["https://sandbox.boletobancario.com/boletofacil/integration/api/v1/list-charges"]}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":22},"action":"remove","lines":["user"],"id":6},{"start":{"row":11,"column":18},"end":{"row":11,"column":25},"action":"insert","lines":["charges"]}],[{"start":{"row":12,"column":23},"end":{"row":12,"column":27},"action":"remove","lines":["user"],"id":7},{"start":{"row":12,"column":23},"end":{"row":12,"column":30},"action":"insert","lines":["charges"]}],[{"start":{"row":12,"column":45},"end":{"row":12,"column":49},"action":"remove","lines":["user"],"id":8},{"start":{"row":12,"column":45},"end":{"row":12,"column":52},"action":"insert","lines":["charges"]}],[{"start":{"row":12,"column":31},"end":{"row":12,"column":41},"action":"remove","lines":["first_name"],"id":9},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"remove","lines":["."]}],[{"start":{"row":12,"column":42},"end":{"row":12,"column":51},"action":"remove","lines":["last_name"],"id":10},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"remove","lines":["."]}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":17},"action":"remove","lines":["map"],"id":11},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"remove","lines":["."]}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["/"],"id":12},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":12,"column":42},"end":{"row":12,"column":43},"action":"remove","lines":["`"],"id":13},{"start":{"row":12,"column":41},"end":{"row":12,"column":42},"action":"remove","lines":["}"]},{"start":{"row":12,"column":40},"end":{"row":12,"column":41},"action":"remove","lines":["s"]},{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"remove","lines":["e"]},{"start":{"row":12,"column":38},"end":{"row":12,"column":39},"action":"remove","lines":["g"]},{"start":{"row":12,"column":37},"end":{"row":12,"column":38},"action":"remove","lines":["r"]},{"start":{"row":12,"column":36},"end":{"row":12,"column":37},"action":"remove","lines":["a"]},{"start":{"row":12,"column":35},"end":{"row":12,"column":36},"action":"remove","lines":["h"]},{"start":{"row":12,"column":34},"end":{"row":12,"column":35},"action":"remove","lines":["c"]},{"start":{"row":12,"column":33},"end":{"row":12,"column":34},"action":"remove","lines":["{"]},{"start":{"row":12,"column":32},"end":{"row":12,"column":33},"action":"remove","lines":["$"]},{"start":{"row":12,"column":31},"end":{"row":12,"column":32},"action":"remove","lines":[" "]},{"start":{"row":12,"column":30},"end":{"row":12,"column":31},"action":"remove","lines":["}"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"remove","lines":["s"]},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"remove","lines":["e"]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"remove","lines":["g"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["r"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"remove","lines":["a"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"remove","lines":["h"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"remove","lines":["c"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"remove","lines":["{"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":["$"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"remove","lines":["`"]}],[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["b"],"id":14},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["p"]}],[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":["p"],"id":15}],[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["o"],"id":16},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["d"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["y"]}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"remove","lines":["}"],"id":17}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["}"],"id":18}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":["}"],"id":19}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":[")"],"id":20},{"start":{"row":14,"column":0},"end":{"row":14,"column":1},"action":"remove","lines":[";"]}],[{"start":{"row":5,"column":91},"end":{"row":5,"column":92},"action":"insert","lines":["?"],"id":21}],[{"start":{"row":5,"column":92},"end":{"row":5,"column":93},"action":"insert","lines":["t"],"id":22},{"start":{"row":5,"column":93},"end":{"row":5,"column":94},"action":"insert","lines":["o"]},{"start":{"row":5,"column":94},"end":{"row":5,"column":95},"action":"insert","lines":["k"]},{"start":{"row":5,"column":95},"end":{"row":5,"column":96},"action":"insert","lines":["e"]},{"start":{"row":5,"column":96},"end":{"row":5,"column":97},"action":"insert","lines":["n"]},{"start":{"row":5,"column":97},"end":{"row":5,"column":98},"action":"insert","lines":["="]}],[{"start":{"row":5,"column":99},"end":{"row":5,"column":100},"action":"insert","lines":["'"],"id":23}],[{"start":{"row":5,"column":100},"end":{"row":5,"column":101},"action":"insert","lines":["'"],"id":24}],[{"start":{"row":5,"column":99},"end":{"row":5,"column":163},"action":"insert","lines":["66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584"],"id":25}],[{"start":{"row":5,"column":164},"end":{"row":5,"column":165},"action":"remove","lines":["'"],"id":26}],[{"start":{"row":5,"column":98},"end":{"row":5,"column":99},"action":"remove","lines":["'"],"id":27}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":13,"column":7},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":59,"mode":"ace/mode/javascript"}},"timestamp":1576119708665,"hash":"3bfc2c85a2646156ebe0b2af5c64e3e0313ed494"}