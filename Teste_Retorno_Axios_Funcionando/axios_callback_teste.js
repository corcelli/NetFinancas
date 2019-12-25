var axios = require('axios');
const qs = require('querystring');


module.exports = {
  foo: 
function PegaImagemCachorro(retorna) {

  axios.get(`https://dog.ceo/api/breeds/image/random`, {
  params: {
    api_key: '72f444fa3d547f8ab38bcc6d9b00ffd6',
    sort_by: 'popularity.desc',
    include_adult: false,
    include_video: false,
    with_genres: 28,
    with_original_language: 'en',
  },
  }).then(retorno_da_api => {
      retorna(retorno_da_api);
  });
},
  
  
  
    foo2: function (valorretornado) {

const config = {
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
 };
    const url = 'https://sandbox.boletobancario.com/boletofacil/integration/api/v1/fetch-balance';
    const requestBody = ({
    token: '66EFD10AD6ADA08CAC8BDCFEBA9ABF2CAAED5015536CC44D42B536831E3FA584',
   //responseType: 'JSON'
});
   axios.post(url, qs.stringify(requestBody), config)
  .then((response) => {
    valorretornado(response);
            });
             }
  
  
  
}



//module.exports = PegaImagemCachorro();
//console.log(message);

//module.exports = PegaImagemCachorro();