# API - Loja de Bonés 

### Instrução de uso e teste da API

Primeiramente, execulte o comando abaixo na raiz da pasta **node-lucas0019**
```bash
    yarn
```

Em seguida no mesmo lugar após baixar as dependencias, execulte o comando a seguir para iniciar o servidor local e testar a API da Loja

```bash
    yarn dev
```

Para realizar os teste na API, recomendo utilizar alguns dos seviços/ programas abaixo

- [Insomnia](https://insomnia.rest/download);
- [Postman](https://www.postman.com/home);
- [Thunder Client](https://www.thunderclient.io/);

---


### Notas de Aprendizado

**Metodos HTTP**
 
- **GET** - Buscar Informações Backend
- **POST** - Criar uma informação no Backend
- **PUT/PATCH** - Alterar/ Atualizar uma informação no Backend
- **DELETE** - Deletar uma informação do Backend
 
**Tipos de Parâmetros**

Parâmetros - Forma do cliente que está requisitando a informação lidar com a mesma

- **Query Params** -  Filtos e Paginação
  - http://localhost:3333/projects?title=React&&owner=Lucas

- **Route Params** -  Identificar recusos (Atualizar/ Deletar)
    - Forma de filtrar um atributo na rota, usados no metodo PUT/DELETE (:id)

- **Request Body** - Conteudo na hora de criar/editar um recurso (JSON)

**Middleware**

- Interceptador de Requisições, ele pode:
    - Imterromper a requisição;
    - Alterar dados da requisição;
    - Ele é uma função (formato)
 