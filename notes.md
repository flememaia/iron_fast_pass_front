git clone react-ironplate 
npm install (instalar dependencias)
npm start

api.js => incluir a porta de development (e depois do deploy, a de production => backend no heroku)
    "http://localhost:3000"

```js
    const apis = {
        development: "http://localhost:3000/api",
        production: "A URL DO SEU SERVIDOR DEPLOYADO NO HEROKU AQUI",
        };

```

rodar nosso backend (abrir novo VsCode => npm start)

Components => components reutilizáveis que representam mais de 1 página
routeComponents => components de rota que representam 1 única página

Criar componentes ChoiceInput e TestInput => PENDENTE

Completar formulário de cadastro com as informações pro Back. O que renderizar inicialmente e o que deixar pro Usuário completar depois. 