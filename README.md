## PrototipoLogin

- [Descrição](#descrição)
- [Instalação](#instalação)
- [Utilização](#utilização)
- [Termos de uso](#termos-de-uso)
- [Referências](#referências)

# Descrição

<p><b>PrototipoLogin</b> é uma aplicação que faz login para o usuário acessar seus próprios relatórios. Esta aplicação utiliza a linguagem <b>Typescript</b>, a biblioteca javascript <b>React</b>, a biblioteca de interface <b>Material-UI</b> e o gerenciador de states <b>ContextAPI</b>.</p>
<br>
Link AWS:

http://dev-bi-abkura.com.br.s3-website-us-east-1.amazonaws.com/

# Instalação

<h5>0. Primeiramente, é necessário já ter instalado na própria máquina:</h5>

- Um <b>editor de código</b>, conhecido também como <b>IDE</b>. Por exemplo, o <b>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</b>.

- Um <b>versionador de código</b> como o <b>[Git](https://github.com/git-guides/install-git)</b>.

- <p> E versionar o diretório para receber o clone da aplicação:</p>

```
git init
```

<h5>1. Fazer o clone do repositório <b>PrototipoLogin</b> na sua máquina pelo terminal do computador ou pelo do IDE:</h5>

```
git clone https://github.com/AndreKuratomi/PrototipoLogin.git
```

<p>Entrar na pasta criada:</p>

```
cd PrototipoLogin
```

<p>Instalar as dependências:</p>

```
yarn
```

<p><b>Obs:</b> caso não tenha o gerenciador de pacotes <b>yarn</b> instalar desta maneira:</p>

```
npm install --global yarn
```

<p>E rodar a aplicação:</p>

```
code .
```

# Inicialização

<p>Para exibir o frontend para o usuário utlizando o VSCode utilizamos no terminal o seguinte comando:</p>

```
yarn start
```

<p>Ou podemos utilizar o link AWS a seguir:</p>

http://dev-bi-abkura.com.br.s3-website-us-east-1.amazonaws.com/


# Utilização

<h5>1. Login e assinaturas:</h5>

<p>Ao ser efetuado o login a API faz uma busca no banco de dados para verificar se o fornecedor está ou não em dia com sua assinatura.</p> 

<p>Se estiver em dia o acesso é autorizado e é exibida a seguinte mensagem:</p>

```
Login feito com sucesso! Seja bem-vindo(a), fornecedor(a)!
```


<p> Faltando até 15 dias para o vencimento o acesso é autorizado mas com a seguinte notificação:</p>

```
Atenção! "Sua assinatura está próxima ao vencimento. Contatar suporte."
```


<p> E se vencida o acesso é bloqueado e é exibida a seguinte mensagem:</p>

```
Acesso bloqueado! "Assinatura vencida! Contate suporte."
```


<h5>2. Troca de senha:</h5>

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

<p></p>

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

# Termos de uso

<p>Esta aplicação atende a fins exclusivamente didáticos e não possui qualquer intuito comercial.</p>

# Referências

- [AWS S3 (GetStartedWithS3)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)
- [AWS S3 (Website Hosting)](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS S3 (Medium)](https://medium.com/dailyjs/a-guide-to-deploying-your-react-app-with-aws-s3-including-https-a-custom-domain-a-cdn-and-58245251f081)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Bloqueio comandos teclado (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode)
- [Bloqueio comandos teclado (ClueMediator)](https://www.cluemediator.com/disable-right-click-and-f12-key-using-javascript)
- [Chakra-UI (Toast)](https://chakra-ui.com/docs/components/toast/usage)
- [Current screen size](https://www.w3schools.com/howto/howto_js_get_current_window.asp)
- [Figma](https://www.figma.com/)
- [Figma (Exporting images)](https://www.captain-design.com/blog/3-simple-ways-to-export-your-images-in-figma/)
- [Formatação README](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Material-UI](https://v4.mui.com/pt/)
- [PowerBI](https://powerbi.microsoft.com/pt-br/)
- [PowerBI (Iframe)](https://www.youtube.com/watch?v=stHD0FVsdJk&ab_channel=Lu%C3%ADsGustavoSerra-Excel%C3%AAnciaemPowerBI)
- [React](https://pt-br.reactjs.org/)
- [React (ContextAPI)](https://reactjs.org/docs/context.html)
- [Tua-Body-Scroll-Lock](https://www.npmjs.com/package/tua-body-scroll-lock)
- [Typescript](https://www.typescriptlang.org/)
