{"changed":true,"filter":false,"title":"mostrar_pdf.js","tooltip":"/Teste_mostrar_PDF/mostrar_pdf.js","value":"const express = require('express'); // import express js library\nconst app = express(); //create express js instance \nconst path = require('path');\nconst router = express.Router();\nconst fs = require('fs');\n\napp.get('/mostrarpdf/:file(*)', function(request, response){\n  var file = request.params.file;\n  var fileLocation = path.join('..','/arquivos/',file);\n  console.log(fileLocation);\n  fs.readFile(fileLocation, function (err,data){\n      if (err) {\n        return console.log(err);\n    }\n     response.contentType(\"application/pdf\");\n     response.send(data);\n  });\n});\n\napp.listen('8080');","undoManager":{"mark":95,"position":100,"stack":[[{"start":{"row":0,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["app.post('/asset', function(request, response){","  var tempFile=\"/home/applmgr/Desktop/123456.pdf\";","  fs.readFile(tempFile, function (err,data){","     response.contentType(\"application/pdf\");","     response.send(data);","  });","});",""],"id":146}],[{"start":{"row":1,"column":50},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":147},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":1,"column":2},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":148},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":149},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":32},"action":"insert","lines":["const express = require('express'); // import express js library","const app = express(); //create express js instance ","const path = require('path');","const router = express.Router();"],"id":150}],[{"start":{"row":3,"column":32},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":151},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["c"]},{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["o"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["s"]},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":[" "],"id":152}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"remove","lines":[" "],"id":153},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"remove","lines":["t"]},{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"remove","lines":["s"]}],[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["n"],"id":154},{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":["s"]},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":[" "],"id":155},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["f"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["o"]}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"remove","lines":["o"],"id":156}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["s"],"id":157}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"remove","lines":["s"],"id":158}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["s"],"id":159}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":[" "],"id":160},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":[" "],"id":161},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["r"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["q"],"id":162}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":14},"action":"remove","lines":["req"],"id":163},{"start":{"row":4,"column":11},"end":{"row":4,"column":22},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"remove","lines":["\""],"id":164}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"remove","lines":["\""],"id":165}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":21},"action":"insert","lines":["''"],"id":166}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["f"],"id":167},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":[";"],"id":168}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":25},"action":"remove","lines":["const fs = require('fs');"],"id":169},{"start":{"row":4,"column":0},"end":{"row":4,"column":25},"action":"insert","lines":["const fs = require('fs');"]}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":48},"action":"remove","lines":["home/applmgr/Desktop/123456.pdf"],"id":170},{"start":{"row":8,"column":17},"end":{"row":8,"column":50},"action":"insert","lines":["1577385714862-Quitacao FUSION.pdf"]}],[{"start":{"row":8,"column":16},"end":{"row":8,"column":42},"action":"insert","lines":["/home/ec2-user/environment"],"id":171}],[{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["/"],"id":172},{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["a"]},{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["r"]},{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["q"]},{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["u"]},{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["i"]},{"start":{"row":8,"column":48},"end":{"row":8,"column":49},"action":"insert","lines":["v"]},{"start":{"row":8,"column":49},"end":{"row":8,"column":50},"action":"insert","lines":["o"]},{"start":{"row":8,"column":50},"end":{"row":8,"column":51},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":16},"action":"remove","lines":["asset"],"id":173},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["m"]},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["o"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["t"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["r"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["a"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["r"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["p"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["d"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["f"]}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":174},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":19},"action":"insert","lines":["app.listen('8080');"],"id":175}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["s"],"id":176}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"remove","lines":["post"],"id":177},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["g"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["e"]},{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":37},"action":"remove","lines":["err"],"id":178},{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"remove","lines":[","]}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":179}],[{"start":{"row":16,"column":0},"end":{"row":22,"column":3},"action":"insert","lines":["","router.get('/pdf/:file(*)',(req, res) => {","  var file = req.params.file;","  var fileLocation = path.join('./arquivos',file);","  console.log(fileLocation);","  res.download(fileLocation, file); ","});"],"id":180}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":[":"],"id":181}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["f"],"id":182},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["i"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["l"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["e"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["("]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["*"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":[")"]}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":["/"],"id":183},{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":29},"action":"insert","lines":["var file = req.params.file;"],"id":184}],[{"start":{"row":9,"column":29},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":185},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":22},"action":"remove","lines":["tempFile"],"id":186},{"start":{"row":11,"column":14},"end":{"row":11,"column":18},"action":"insert","lines":["file"]}],[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["u"],"id":187},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["e"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["s"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":10,"column":2},"end":{"row":10,"column":50},"action":"insert","lines":["var fileLocation = path.join('./arquivos',file);"],"id":188}],[{"start":{"row":10,"column":50},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":189},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":18},"action":"remove","lines":["file"],"id":190},{"start":{"row":12,"column":14},"end":{"row":12,"column":26},"action":"insert","lines":["fileLocation"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["app"],"id":191},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["r"]},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["o"]},{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["u"]},{"start":{"row":6,"column":3},"end":{"row":6,"column":4},"action":"insert","lines":["t"]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["e"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["r"]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":6},"action":"remove","lines":["router"],"id":192},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["a"]},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["p"]},{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["p"]}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["/"],"id":193}],[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["."],"id":194}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"insert","lines":["c"],"id":195},{"start":{"row":11,"column":3},"end":{"row":11,"column":4},"action":"insert","lines":["o"]},{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["n"]}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":5},"action":"remove","lines":["con"],"id":196},{"start":{"row":11,"column":2},"end":{"row":11,"column":9},"action":"insert","lines":["console"]}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["."],"id":197},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["l"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["o"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":13},"action":"remove","lines":["log"],"id":198},{"start":{"row":11,"column":10},"end":{"row":11,"column":15},"action":"insert","lines":["log()"]}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":26},"action":"insert","lines":["fileLocation"],"id":199}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":[";"],"id":200}],[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"remove","lines":["."],"id":201},{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"remove","lines":["."]}],[{"start":{"row":10,"column":31},"end":{"row":10,"column":33},"action":"insert","lines":["''"],"id":202}],[{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"insert","lines":["."],"id":203},{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"insert","lines":["."]}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":[","],"id":204}],[{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["/"],"id":205}],[{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"remove","lines":[")"],"id":206},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"remove","lines":["*"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"remove","lines":["("]}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["("],"id":207},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["*"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":[")"]}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":26},"action":"remove","lines":["fileLocation"],"id":208},{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["f"]},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["i"]},{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["l"]},{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":55},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":209},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":18},"action":"insert","lines":["var fileLocation"],"id":210}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["2"],"id":211}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":[" "],"id":212},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["="]}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":[" "],"id":213}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":24},"action":"insert","lines":["''"],"id":214}],[{"start":{"row":11,"column":23},"end":{"row":11,"column":93},"action":"insert","lines":["/home/ec2-user/environment/arquivos/1577385714862-Quitacao FUSION.pdf\""],"id":215}],[{"start":{"row":11,"column":92},"end":{"row":11,"column":93},"action":"remove","lines":["\""],"id":216}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":26},"action":"remove","lines":["fileLocation"],"id":219},{"start":{"row":13,"column":14},"end":{"row":13,"column":27},"action":"insert","lines":["fileLocation2"]}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":29},"action":"remove","lines":[":file(*)"],"id":220}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"remove","lines":["'"],"id":221}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["\""],"id":222}],[{"start":{"row":11,"column":92},"end":{"row":11,"column":93},"action":"remove","lines":["'"],"id":223}],[{"start":{"row":11,"column":92},"end":{"row":11,"column":93},"action":"insert","lines":["\""],"id":224}],[{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["/"],"id":225},{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["/"],"id":226},{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["/"]}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":18},"action":"remove","lines":["file"],"id":227},{"start":{"row":12,"column":14},"end":{"row":12,"column":27},"action":"insert","lines":["fileLocation2"]}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"remove","lines":[" "],"id":228}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"remove","lines":[" "],"id":229}],[{"start":{"row":11,"column":57},"end":{"row":11,"column":90},"action":"remove","lines":["1577385714862-Quitacao FUSION.pdf"],"id":230},{"start":{"row":11,"column":57},"end":{"row":11,"column":82},"action":"insert","lines":["1577455972707-N1R7DBY.pdf"]}],[{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["e"],"id":231},{"start":{"row":13,"column":40},"end":{"row":13,"column":41},"action":"insert","lines":["r"]},{"start":{"row":13,"column":41},"end":{"row":13,"column":42},"action":"insert","lines":["r"]},{"start":{"row":13,"column":42},"end":{"row":13,"column":43},"action":"insert","lines":[","]}],[{"start":{"row":13,"column":49},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":232},{"start":{"row":14,"column":0},"end":{"row":14,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":10,"column":3},"end":{"row":10,"column":4},"action":"remove","lines":["/"],"id":233},{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"remove","lines":["/"]}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"remove","lines":["2"],"id":234}],[{"start":{"row":11,"column":2},"end":{"row":11,"column":82},"action":"remove","lines":["var fileLocation=\"/home/ec2-user/environment/arquivos/1577455972707-N1R7DBY.pdf\""],"id":235}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["2"],"id":236}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["2"],"id":237}],[{"start":{"row":11,"column":2},"end":{"row":12,"column":0},"action":"remove","lines":["",""],"id":238},{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"remove","lines":[" "]},{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"remove","lines":[" "]}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":[":"],"id":239},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["f"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["i"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["l"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["("],"id":240},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["*"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":[")"]}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"remove","lines":["/"],"id":241},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"remove","lines":["/"]}],[{"start":{"row":19,"column":0},"end":{"row":25,"column":3},"action":"remove","lines":["","router.get('/pdf/:file(*)',(req, res) => {","  var file = req.params.file;","  var fileLocation = path.join('./arquivos',file);","  console.log(fileLocation);","  res.download(fileLocation, file); ","});"],"id":242},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":20,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":13,"column":6},"end":{"row":15,"column":5},"action":"insert","lines":["if (err) {","        return console.log(err);","    }"],"id":243}],[{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"remove","lines":[" "],"id":244}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":[" "],"id":245}],[{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"remove","lines":["",""],"id":246}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":89},"action":"remove","lines":["  //var tempFile=\"/home/ec2-user/environment/arquivos/1577385714862-Quitacao FUSION.pdf\";"],"id":247}],[{"start":{"row":6,"column":60},"end":{"row":7,"column":0},"action":"remove","lines":["",""],"id":248}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":0},"end":{"row":17,"column":3},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1577468787812}