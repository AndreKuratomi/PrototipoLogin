# PrototipoLogin

- [Traduções](#traduções)
- [Sobre](#sobre)
- [Links](#links)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Referências](#referências)

<br>

## Traduções

- [English / Inglês](./.multilingual_readmes/README_en-uk.md)
- [Português brasileiro](https://github.com/AndreKuratomi/PrototipoLogin/tree/pt_br)

<br>


## Sobre

A aplicação fullstack <b>PrototipoLogin</b> é um protótipo que faz o login tanto dos fornecedores de uma empresa às suas dashboards em <strong>PowerBI</strong> quando do próprio CEO da empresa como superuser para visualizar todas as dashboards da empresa. Possui responsividade Mobile. 
  
Esta aplicação utiliza a extensão <strong>[Typescript](https://www.typescriptlang.org/)</strong> da linguagem <strong>Javascript</strong>, sua biblioteca <strong>[React](https://pt-br.legacy.reactjs.org/)</strong>, seu gerenciador de states <strong>[ContextAPI](https://legacy.reactjs.org/docs/context.html)</strong>, a biblioteca open-source de componentes React <strong>[Material UI](https://mui.com/material-ui/)</strong> e a biblioteca <strong>[Chakra-UI (Toast)](https://chakra-ui.com/docs/components/toast/usage)</strong> para os toasts da aplicação. E este repositório frontend tem deploy no serviço <strong>[AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)</strong>.

<br>

## Links

AWS S3 [link](http://dev-bi-abkura.com.br.s3-website-us-east-1.amazonaws.com/)

Repositório backend [PrototipoLogin API](https://github.com/AndreKuratomi/prototipo_login_api/tree/pt_br)

<br>

## Instalação

<h3>0. Primeiramente, é necessário já ter instalado na própria máquina:</h3>

- O versionador de codigo <b>[Git](https://git-scm.com/downloads)</b>.

- O ambiente de desenvolvimento <b>[Node](https://nodejs.org/pt)</b>.

- Seu gerenciador de versões <b>[NVM](https://github.com/nvm-sh/nvm)</b> (usar versão >= 14.0.0).

- O gerenciador de pacotes <b>[Yarn](https://yarnpkg.com/)</b>.

- Um <b>editor de código</b>, conhecido também como <b>IDE</b>. Por exemplo, o <b>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</b> que será usado aqui.

- <p> E versionar o diretório para receber o clone da aplicação:</p>

```
git init
```

<h3>1. Fazer o clone do repositório <b>PrototipoLogin</b> na sua máquina pelo terminal do computador ou pelo do IDE:</h3>

```
https://github.com/AndreKuratomi/PrototipoLogin.git
```

WINDOWS:

Obs: Caso apareca algum erro semelhante a este: 

```
unable to access 'https://github.com/AndreKuratomi/PrototipoLogin.git': SSL certificate problem: self-signed certificate in certificate chain
```

Configure o git para desabilitar a certificação SSL:

```
git config --global http.sslVerify "false"
```

<p>Entrar na pasta criada:</p>

```
cd PrototipoLogin
```

<p>Instalar as dependências:</p>

```
yarn
```

<p>Abrir a aplicação no seu IDE:</p>

```
code .
```

<p>E para exibir o frontend para o usuário utlizando o VSCode utilizamos no terminal o seguinte comando:</p>

```
yarn start
```
<br>

## Inicialização

<p>Para exibir o frontend para o usuário utlizando o VSCode utilizamos no terminal o seguinte comando:</p>

```
yarn start
```

Para todas as funcionalidades desta aplicação funcionarem localmente o <b>backend</b> precisa já operar. Conferir como [aqui](https://github.com/AndreKuratomi/prototipo_login_api).


## Utilização

<h3>1. Login e assinaturas:</h3>

<p>Ao ser efetuado o login a API faz uma busca no banco de dados para verificar se o fornecedor está ou não em dia com sua assinatura.</p> 

<p>Se estiver em dia o acesso é autorizado e é exibida a seguinte mensagem:</p>

```
Login feito com sucesso! Seja bem-vindo(a), fornecedor(a)!
```


<p> Faltando até <b>15 dias</b> para o vencimento o acesso é autorizado mas com a seguinte notificação:</p>

```
Atenção! "Sua assinatura está próxima ao vencimento. Contatar suporte."
```


<p> E se vencida o acesso é bloqueado e é exibida a seguinte mensagem:</p>

```
Acesso bloqueado! "Assinatura vencida! Contate suporte."
```

<h3>2. Usuários para testar (disponíveis em src/utils/index.json):</h3>

```
USUÁRIO: Fornecedor1
TIPO: fornecedor
EMAIL: fornecedor1@mail.com.br
SENHA: 1234
ASSINATURA: Em dia (até 05/10/2023)

USUÁRIO: Fornecedor2
TIPO: fornecedor
EMAIL: fornecedor2@mail.com.br
SENHA: 1234
ASSINATURA: A vencer (até 20/10/2022)

USUÁRIO: Fornecedor4
TIPO: fornecedor
EMAIL: fornecedor4@mail.com.br
SENHA: 1234
ASSINATURA: Vencida (vencida em 05/10/2022)

USUÁRIO: SuperUsuario
TIPO: administrador
EMAIL: superusuario@mail.com.br
SENHA: 1234
ASSINATURA: -----
```

<br>

<h3>3. Bloqueio de certos comandos de teclado:</h3>

Quando esta aplicação foi desenvolvida pediu-se o bloqueio de alguns comandos de teclado como "Ctrl+C", "F12" por razões de segurança. Esses bloqueios estão configurados no arquivo html do repositório.

<br>

<h3>4. Troca de senha:</h3>

<p>Quando o usuário faz pedido de alteração de senha ele recebe a seguinte mensagem e recebe um email notificando:</p>

```
Solicitação enviada com sucesso! "Confira sua caixa de emails."
```

```
Olá, {username}! Recebemos seu pedido por nova senha.

Segue abaixo a senha provisória mais o link para alteração de senha:


Senha provisória: {senha}


Link para alteração de senha aqui {link alteração de senha}


Por favor, não responda este e-mail. Ele é enviado de forma automática.

Atenciosamente,

EMPRESA
```

<p>Ao mesmo tempo, o suporte configurado recebe um email notificando:</p>

```
Notificação: O(A) usuário(a) {username} solicitou troca de senha às {horário} em {data}.

Senha provisória de {username}: {senha}


EMPRESA
```

<p>Após alteração de senha o usuário recebe a seguinte mensagem e email:</p>

```
Alteração feita com sucesso! Senha alterada com sucesso!
```

```
Olá, {username}!

Sua senha foi atualizada com sucesso!


Siga agora para o login. {link login}


Por favor, não responda este e-mail. Ele é enviado de forma automática.

Atenciosamente,

EMPRESA
```

<p>E o suporte recebe:</p>

```
Notificação: O(A) usuário(a) {username} solicitou troca de senha às {horário} em {data}.

Senha provisória de {username}: {senha}


EMPRESA
```

<br>

## Referências

- [AWS S3 (GetStartedWithS3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)
- [AWS S3 (Website Hosting)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS S3 (Medium)](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Chakra-UI (Toast)](https://chakra-ui.com/docs/components/toast/usage)
- [Current screen size](https://www.w3schools.com/howto/howto_js_get_current_window.asp)
- [Figma](https://www.figma.com/)
- [Figma (Exporting images)](https://www.captain-design.com/blog/3-simple-ways-to-export-your-images-in-figma/)
- [Format README](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Git](https://git-scm.com/downloads)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Keyboard commands block (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
- [Keyboard commands block (ClueMediator)](https://www.cluemediator.com/disable-right-click-and-f12-key-using-javascript)
- [Material UI](https://mui.com/material-ui/)
- [Node](https://nodejs.org/pt)
- [NVM](https://github.com/nvm-sh/nvm)
- [PowerBI](https://powerbi.microsoft.com/pt-br/)
- [PowerBI (Iframe)](https://www.youtube.com/watch?v=stHD0FVsdJk&ab_channel=Lu%C3%ADsGustavoSerra-Excel%C3%AAnciaemPowerBI)
- [React](https://pt-br.legacy.reactjs.org/)
- [React (ContextAPI)](https://reactjs.org/docs/context.html)
- [Tua-Body-Scroll-Lock](https://www.npmjs.com/package/tua-body-scroll-lock)
- [Typescript](https://www.typescriptlang.org/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)
- [Yarn](https://yarnpkg.com/)
