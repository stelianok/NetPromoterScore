# NetPromoterScore

>**Rest api desenvolvida durante a next level week 4, criada com typescript em node.js.**


## Sumário

- [Tecnologias Utilizadas](##Tecnologiasutilizadas)
- [Sobre o projeto](##Sobreoprojeto)
- [Estrutura do banco de dados](##estruturadobancodedados)
- [Rotas](##rotas)
- [Contato](##Contato)
- [Licença](licenca)

---

## Tecnologias utilizadas

- Node.js
- Typescript
- Express
- nodemailer
- typeorm
- yup
- handlebars

---

## Sobre o projeto 

NPS ou Net Promoter Score é uma métrica criada por Fred Reichheld para medir a satisfação dos clientes, perguntando “de 0 a 10, o quanto você indicaria nossa empresa aos amigos?” A fórmula para calcular o NPS é: % clientes promotores (notas 9 e 10) – % clientes detratores (notas de 0 a 6) = NPS

O projeto consiste em uma rest api, que permite o cadastro de usuários, coleta de feedback pelo email, e cálculo do NPS, explicado acima. 
 
-- 
## Estrutura do Banco de dados

### Tabelas



|   Users   | Type
|---- | ---  | 
|id   | varchar |
|name | varchar |
|email | varchar |
|created_at | timestamp |



|   Survey   | Type
|---- | ---  | 
|id   | varchar |
|title | varchar |
|description | varchar |
|created_at | timestamp |



|   SurveyUser   | Type
|---- | ---  | 
|id   | varchar |
|user_id (FK) | varchar |
|survey_id (FK) | varchar |
|value | number |
|created_at | timestamp |

---

## Rotas


<br/>

**Users**

```HTTP
POST /users
```
*cria um novo usuário*

**Surveys**

```HTTP
GET /surveys
```
*exibe todas as pesquisas*

```HTTP
POST /surveys
```
*cria uma nova pesquisa*

**SendMail**

```HTTP
POST /sendMail
```
*envia uma pesquisa no email do usuário*

**Answers**

```HTTP
GET /answers/:value
```

*usado no email para coletar nota do usuário*

**NPS**

```HTTP
GET /nps/:survey_id
```

*retorna o cálculo completo do nps de determinada pesquisa*


---

## Contato 💼


| <a href="https://github.com/stelianok" target="_blank">**Kauã Steliano**</a> 
| :---: 
| [![Kauã Steliano](https://avatars2.githubusercontent.com/u/39469125?s=460&u=97e778a861a7a42bee1b16f6be1c80467c50c1d1&v=4)](https://github.com/stelianok)    

### Kauã Steliano

Twitter:
[@Steli4nok](https://twitter.com/Steli4nok)
LinkedIn:
[Kauã Alexandro Steliano](https://www.linkedin.com/in/kauã-steliano-107620181/)
E-mail:
stelianok@gmail.com
Github: 
[Stelianok](https://github.com/stelianok)


---

## Licença 👨‍⚖️

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

