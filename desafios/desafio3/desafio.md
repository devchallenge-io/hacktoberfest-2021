<br />
<p align="center">

  <img width="10%" align="center" src="../../recursos/icon.svg"/>
  
  <h3 align="center">Desafio 3</h3>

  <p align="center">
   DevChallenge Hacktoberfest
  </p>

## Índice

- [Índice](#índice)
- [Desafio](#desafio)
- [Extras](#extras)
- [Dicas](#dicas)
- [Exemplos](#exemplos)
- [Comunidade](#comunidade)

## Desafio 

### Aplicação
O desafio consiste em criar uma API REST que será servida para uma loja de venda de Bonés.

### Objetivo: 
Desenvolver uma API que será consumida para a montagem das prateleiras da loja.

### Requisitos:
- Sua API deverá conter informações pertinentes para monstagem das prateleiras dos produtos
- Deverá usar os metodos GET e POST.
- Recomendados usar o Node.js para esse desafio, mas sinta-se a vontade para usar outra stack de suas preferência

**POST** ```/bonestore/product``` 
- Esse método deve receber um produto novo e inseri-lo em um banco de dados para ser consumido pela própria API.

```JSON
{
   "name":"Boné Preto",
   "price":7990,
   "skuId":"78993000",
   "seller":"Lucas Xavier",
   "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
   "inStock" : true
}
```

**GET** ```/bonestore/product```
-  Esse método da API deve retornar um JSON dos produtos cadastrados, segue o exemplo abaixo

```JSON
[
  {
   "name":"Boné Preto",
   "price":7990,
   "skuId":"78993000",
   "seller":"Lucas Xavier",
   "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
   "inStock" : true
  },
  {
   "name":"Boné Marrom",
   "price":7990,
   "skuId":"78993001",
   "seller":"Marcos Bonés",
   "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
   "inStock" : false
  },
  {
   "name":"Boné Vermelho",
   "price":7990,
   "skuId":"78993002",
   "seller":"Lorena",
   "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
   "inStock" : true
  }
]

```

### Extras

- Utilizar Cache
- Autenticação nas requisições
- Implementar formas de usar os mestodos PUT e DELETE

### Dicas
Nesse desafio você poderá criar o design da API da forma que preferir, então pode deixar a criatividade agir o/

## Exemplos
- [Repositório com APIs Publicas](https://github.com/public-apis/public-apis)


## Recursos
- [Padrão API REST](https://www.brunobrito.net.br/padrao-rest/)
- [Criando API RESTFull com Node.js](https://medium.com/xp-inc/https-medium-com-tiago-jlima-developer-criando-uma-api-restful-com-nodejs-e-express-9cc1a2c9d4d8)
- [Gerador de imgs para teste](https://dummyimage.com/)


## Comunidade
Caso tenha alguma dúvida sobre os desafios, fique à vontade para pedir ajuda na comunidade! https://discord.gg/yvYXhGj <br>
<br>
Site: https://www.devchallenge.com.br/ <br>

<table style="border-color:transparent">
    <th>
        <td><a href="https://discord.gg/yvYXhGj"><img src="https://cdn3.iconfinder.com/data/icons/discord/64/discord_20-512.png" width="30px" height="30px" alt="Discord">      </a></td>
    <td><a href="https://www.linkedin.com/company/devchallenge/"><img src="https://image.flaticon.com/icons/svg/1384/1384014.svg" width="30px" height="30px"                alt="Linkedin"></a></td>
    <td><a href="https://twitter.com/dev_challenge"><img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" width="30px" height="30px"        alt="Twitter"></a</td>
    <td><a href="https://www.instagram.com/devchallenge/"><img src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" width="30px"            height="30px" alt="Instagram"></a></td>
    </th>
</table>

