# Mariana-Inoue-De-olho-na-sua-vacina

Link da URL: 
https://de-olho-na-sua-vacina.herokuapp.com/vaccine
  
De olho na sua vacinação!

|Ferramenta |	Descrição |
|-|-|
| javascript |Linguagem de programação utilizada
|nodejs	| Ambiente de execução do javascript
|express	|Framework NodeJS
|sequelize|	ORM(Object-Relational Mapper) para NodeJs baseado em promise, utilizado para os bancos de dados
|nodemon	|Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente
|dotenv | Variavéis de ambiente
|validator | biblioteca perfeita para validação, filtragem e tratamento de dados
|postgreSQL	|Banco de dado não relacional orietado a documentos
|DBeaver	|Ferramenta de administração de banco de dados
|Postman	|Interface gráfica para realizar os testes
|Heroku |Deploy da API
________________________________________________________________________________

Regras de negócio:

Sua API deve ser capaz de cadastrar uma nova vacina, 
visualizar as vacinas cadastradas e
marcar se a vacinação foi realizada.
____________________________________________________________________
Rotas: 
- GET	/vaccine	Retornar todas as vacinas cadastradas
- GET	/vaccine/:id	Retornar apenas uma vacina específica
- POST	/vaccine	Cadastrar uma nova vacina
- PATCH	/vaccine/:id/vaccinated	Marcar se tomou a vacina
______________________________________________________________________

Chave	Descrição	Tipo	
- id	Código da vacina	BigInt	1
- name	Nome da vacina	String	"Covid19 - Dose 1"
- expected_date	Data prevista para a vacinação	String	"10/10/2021"
- vaccinated	Determina se o paciente foi vacinado	Boolean	true
Sua API deve ser capaz de cadastrar uma nova vacina, visualizar as vacinas cadastradas e marcar se a vacinação foi realizada.

       {
        "id": "1",
        "name": "Maria José",
        "expected_date": " 10/10/22",
        "vaccinated": false,
        "createdAt": "2021-11-30T23:17:17.644Z",
        "updatedAt": "2021-12-02T18:44:26.804Z"
       }

__________________________________________________________________________________

        Arquitertura:
                de-olho-na-vacina
              ├── src
              │   ├── controllers
              │     ├── vaccineController.js
              │     ├── error.responde.js
              │   
              │   ├── config
              │     ├── db.js
              │   
              │   ├── models
              |       ├── Vaccine.js
              │   
              │   ├── routes
              │       ├── index.js
              │       ├── vaccineRoutes.js.js
              │   
              |   ├── app.js
              | 
              ├── .env
              ├── .gitignore
              ├── package.json
              ├── README
              
____________________________________________________________________

## Endpoint

- Endepoint Index	
- https://de-olho-na-sua-vacina.herokuapp.com
![index](https://user-images.githubusercontent.com/82849390/144749257-95ff5e65-8987-4b80-9fae-2d5367ca043e.jpg)

- Endepoint GET	/vaccine	Retornar todas as vacinas cadastradas
- https://de-olho-na-sua-vacina.herokuapp.com/vaccine/
![get](https://user-images.githubusercontent.com/82849390/144748738-3ef48ca7-b9bb-4efb-872c-53f74e40e964.jpg)
 
 - Endpoint GET	/vaccine/:id	Retornar apenas uma vacina específica
 - https://de-olho-na-sua-vacina.herokuapp.com/vaccine/:id
 ![get-id](https://user-images.githubusercontent.com/82849390/144748788-a9792246-2a92-429e-a2d7-792c84ecfd8c.jpg)
 
- Endpoint POST	/vaccine	Cadastrar uma nova vacina
- https://de-olho-na-sua-vacina.herokuapp.com/vaccine
![post](https://user-images.githubusercontent.com/82849390/144748792-8530bfb1-de7f-40d2-92d7-741366e27f35.jpg)

- Tratamento de erro - npm validator
- Bad request para name con string vazia e expexted-date com input errado
![validator-post](https://user-images.githubusercontent.com/82849390/144748789-b71d0974-5ac1-4784-9fbf-661e19efd988.jpg)

- Endpoint PATCH	/vaccine/:id/vaccinated	Marcar se tomou a vacina
- https://de-olho-na-sua-vacina.herokuapp.com/vaccine/:id
![patch](https://user-images.githubusercontent.com/82849390/144748796-8bd2becd-dd7d-490f-98b1-6e175fdd12d5.jpg)
      
   
Desenvolvida por: Mariana Inoue 
Contato: https://www.linkedin.com/in/mariana-inoue-89279450/
  
      
