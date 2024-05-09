# Desafio Nginx com Node.js Fullcycle
## O que foi pedido
Utilização do nginx como proxy reverso.\
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js.\
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela ```people```.\
O retorno da aplicação ***node.js*** para o nginx deverá ser:
```html
<h1>Full Cycle Rocks!</h1>
- Lista de nomes cadastrada no banco de dados.
```
Crie o docker-compose de uma forma que basta apenas rodarmos: ```docker-compose up -d ```  que tudo deverá estar funcionando e disponível na porta: 8080.

resultado ao acessar ```http://localhost:8080```

![image](https://github.com/wellesjr/nginx_com_nodejs/assets/39225488/77c2b979-76f3-4e55-9fea-397197181a31)
