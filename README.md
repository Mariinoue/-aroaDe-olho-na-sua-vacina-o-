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
      
   
Desenvolvida por: Mariana Inoue 
Contato: https://www.linkedin.com/in/mariana-inoue-89279450/
  
      
