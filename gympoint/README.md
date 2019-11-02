<h1 align="center">
    <img alt="GymPoint" src=".github/gympoint-logo.png" width="200px" />
</h1>

<h4 align="center">
  Gympoint 🏋
  Situação: Em andamento.
</h4>

## Do que se trata :page_facing_up:
Consiste num app gerenciador de academia, onde administradores podem cadastrar estudantes e guardar suas informações de nome, email, peso e altura no banco de dados. O sistema vai ser implementado aos poucos durante todo o bootcamp. Pode sofrer atualizações.

## Ferramentas utilizadas :hammer:
- [Express](https://expressjs.com/): é um framework para app da web do NodeJS mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel;
- [Sucrase](https://github.com/alangpierce/sucrase): é um compilador mais rápido que o Babel. Nesse projeto específico utilizo apenas a ferramenta de import e export default;
- [Nodemon](https://nodemon.io/): um utilitário que monitora qualquer alteração no código e reinicia automaticamente o servidor;
- [ESLint](https://eslint.org/) + [Prettier](https://github.com/prettier/prettier-vscode) + EditorConfig: formatação e padronização de código;
- [Autenticação com JWT](https://github.com/auth0/node-jsonwebtoken): resumidamente, é uma string de caracteres codificados que, caso cliente e servidor estejam sob HTTPS, permite que somente o servidor que conhece o "secret" possa ler o conteúdo do token, e assim confirmar a autenticidade do cliente. Além disso, esse token possui data de experição gerada pelo servidor;
- [BcryptJS](https://www.npmjs.com/package/bcryptjs): é um método de criptografia do tipo hash para senhas;
- [Sequelize](https://sequelize.org/)(PostgreSQL): ORM do NodeJS para banco de dados;
- [Docker](https://www.docker.com/): é uma plataforma Open Source desenvolvida pela Google que facilita a criação e administração de ambientes isolados (containers);
- [Yup](https://github.com/jquense/yup): basicamente é um "schema validation", cria-se um objeto formatado que se parece com o esquema pretendido para um objeto e em seguida, usa-se as funções do utilitário Yup para verificar se os objetos de dados correspondem a esse esquema, validando-os em seguida;
- [Postbird](https://electronjs.org/apps/postbird): app para acessar o banco de dados de forma visual;
- [Insomnia](https://insomnia.rest/): app para verificação de requisições HTTP.

## Funcionalidades :hammer:
- Autenticação com JWT: permite que um usuário se autentique na aplicação utilizando e-mail e uma senha;
- Cadastro de alunos: permite que alunos sejam mantidos (cadastrados/atualizados) na aplicação utilizando nome, email, idade, peso e altura, apenas através de administradores autenticados no sistema;

> em andamento

---

<p align="center">
  <a href="https://www.linkedin.com/in/icaroov/">
    <img alt="GitHub" src="https://img.icons8.com/color/32/000000/linkedin-circled.png" />
  </a>
  &nbsp&nbsp&nbsp&nbsp
  <a href="https://github.com/icaroov">
    <img alt="LikedIn" src="https://img.icons8.com/ios-glyphs/48/000000/github.png" />
  </a>
</p>
