## Desafioflex

### Objetivo

O desafio é criar API para gerenciamento de certificados e uma
interface para consumir essas apis. O front e back devem ser contruidos separadamente utilizando conceito de RESTAPI.
Deve-se poder cadastrar, listar, editar e deletar.

### Requisitos frontend

* A interface deve ser responsiva (desktop e mobile)
* Utilizar Material Design
* Utilizar algum framework SPA (Single Page Application) mas desenvolver em nossa stack é VueJS é um diferencial
* Utilizar padrão FLUX (VUEX/REDUX) é um diferencial
* Componentização do código também é um diferencial

### Requisitos backend

* Pode ser desenvolvido em qualquer linguagem ou frameworks, mas desenvolver em nossa stack Python 3 é um diferencial
* API deve seguir os princípios REST (Utilizar FLASK é um diferencial)
* Salvar as informações necessárias em um dos bancos de dados relacionais abaixo:
  * Sqlite
  * PostgreSQL
  * MySQL

### Requisito geral

* Ter cobertura de teste
* Criar um repositório no github com o código da aplicação
* Documentar com README como executar o projeto
* Subir a aplicação em alguma plataforma (Exemplo Heroku)

### Diferencial
* Implementar utilizando `Clean Architecture`
* Utiliza SQLAlchemy na camada de banco
* Utiliza sql-migrate para construir banco
* Adicionar validações nos campos da interface e na API
* Utilizar JavaScript es6+
* Utilizar LINTER
* Criar um pequeno CI/CD para o TDD e Linter
* Na listagem permitir ordenar pelos campos `username` e `name` (API e Interface)
* Na listagem permitir filtrar pelos campos `username` e `name` (API e Interface)

### Plus
* `groups` o objetivo deste campo é organiza os certificados em grupos.
  O certificado pode pertencer a mais de um grupo.
  Este campo recebe uma lista de interios, pre-definidos:
    - `01`: Adm
    - `15`: Comercial
    - `30`: RH

### Campos

```
{
  "id": 1,
  "username": "joaos", //obrigatório e único, permitindo caracteres `a-z` e `0-9` e máximo de caracteres deve ser 30
  "name": "João da Silva", //obrigatório e máximo de caracteres deve ser 255
  "description": "",
  "groups": [15],
  "expiration" 10, //representa o número de dias que o certificado é valido, o número deve estar entre 10 e 3650.
  "expirated_at": "2020-10-21T13:45:11-03:00", //preenche com a data calculda com base no valor informado no campo expiration, não é cadastrado e nem editado
  "created_at": "2020-10-21T13:45:11-03:00", //preenche com a data atual quando esta criando o certificado
  "updated_at": "2020-10-21T13:45:11-03:00" //preenche com a data atual quando esta modificando o certificado
}
```

