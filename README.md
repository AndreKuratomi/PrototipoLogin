# PrototipoLogin

- [Translations](#translations)
- [About](#about)
- [Links](#links)
- [Instalation](#instalation)
- [How to use it](#how-to-use-it)
- [References](#references)

<br>

## Translations

- [Português brasileiro](./.multilingual_readmes/README_pt-br.md)
- [English / Inglês](https://github.com/AndreKuratomi/PrototipoLogin)

<br>

## About

The fullstack application <b>PrototipoLogin</b> is a prototype that logs a company suppliers to their own <strong>PowerBI</strong> dashboard visualization and also a company CEO as superuser to view all the company dashboards. Mobile responsive.

This application uses the language <strong>Javascript</strong> extention's <strong>[Typescript](https://www.typescriptlang.org/)</strong>, its library <strong>[React](https://pt-br.legacy.reactjs.org/)</strong>, React's states manager <strong>[ContextAPI](https://legacy.reactjs.org/docs/context.html)</strong>, the open-source React component library <strong>[Material UI](https://mui.com/material-ui/)</strong> and <strong>[Chakra-UI (Toast)](https://chakra-ui.com/docs/components/toast/usage)</strong> for its toasts. This frontend part is deployed in <strong>[AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html)</strong> service.

## Links

[AWS S3 link](http://dev-bi-abkura.com.br.s3-website-us-east-1.amazonaws.com/)

[PrototipoLogin's API repository](https://github.com/AndreKuratomi/prototipo_login_api)

<br>


## Instalation

<h3>0. It is first necessary to have instaled the following devices:</h3>

- The code versioning <b>[Git](https://git-scm.com/downloads)</b>.

- The virtual environment <b>[Node](https://nodejs.org/pt)</b> (use version >=14.0.0).

- Its version manager <b>[NVM](https://github.com/nvm-sh/nvm)</b>.

- The package manager <b>[Yarn](https://yarnpkg.com/)</b>.

- A <b>code editor</b>, also known as <b>IDE</b>. For instance, <strong>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</strong> that is going to be used here.

- <p>And versioning your directory to receive the aplication clone:</p>


```
git init
```

<br>
<h3>1. Clone the repository <b>PrototipoLogin</b> by your machine terminal or by the IDE's:</h3>

```
git clone https://github.com/AndreKuratomi/PrototipoLogin.git
```

WINDOWS:

Obs: In case of any mistake similar to this one: 

```
unable to access 'https://github.com/AndreKuratomi/PrototipoLogin.git/': SSL certificate problem: self-signed certificate in certificate chain
```

Configure git to disable SSL certification:

```
git config --global http.sslVerify "false"
```

<h3>2. After cloning the repository:</h3>


<p>Enter the directory:</p>

```
cd PrototipoLogin
```
<p>Install the project's dependencies:</p>

```
yarn
```

<p>Open the aplication with your IDE:</p>

```
code .
```

<p>And by the IDE's terminal run <b>yarn</b> to exibit the frontend:</p>

```
yarn start
```

For the functionalities of this project work locally the <b>backend</b> needs to be already running. Check it out how [here](https://github.com/AndreKuratomi/prototipo_login_api).

<br>

# How to use it

<h3>1. Login and signatures:</h3>

<p>When the supplier tries to log the application's API check if he is up to date with his subscription to the platform.</p> 

<p>If the supplier is up to date his access is done and it is displayed the following <b>chackra-ui</b> toast:</p>

```
Login feito com sucesso! Seja bem-vindo(a), fornecedor(a)!
```

Translation:

```
Login made sucessfully! Welcome, supplier!
```
<br>

<p> Up to <b>15 days</b> before the expiration date the supplier's access is authorized but with a warning toast:</p>

```
Atenção! "Sua assinatura está próxima ao vencimento. Contatar suporte."
```

Translation:

```
Warning! "Your signature is close to expire. Contact suport."
```
<br>

<p> If the signature is expired the access is blocked and this toast is displayed:</p>

```
Acesso bloqueado! "Assinatura vencida! Contate suporte."
```

Translation:

```
Access blocked! "Your signature is expired. Contact support."
```

<br>

<h3>2. Users for testing (available in src/utils/index.json):</h3>

```
USER: Supplier1
TYPE: supplier
EMAIL: supplier1@mail.com.br
PASSWORD: 1234
SIGNATURE SITUATION: Up to date (untill 05/10/2023)

USER: Supplier2
TYPE: supplier
EMAIL: supplier2@mail.com.br
PASSWORD: 1234
SIGNATURE SITUATION: Close to expire (untill 20/10/2022)

USER: Supplier4
TYPE: supplier
EMAIL: supplier4@mail.com.br
PASSWORD: 1234
SIGNATURE SITUATION: Expired (Expired in 05/10/2022)

USER: SuperUser
TYPE: administrador
EMAIL: superusuario@mail.com.br
PASSWORD: 1234
SIGNATURE SITUATION: -----
```

<h3>3. Keyboard commands block:</h3>

At the time this application was developed it was asked to block some keyboard commands such as "Ctrl+C", "F12" for security reasons. This blocks are available in React's html file.


<h3>4. Forgot password:</h3>

<p>When the user asks for password change the toast bellow is displayed and an email is sent to him notifying:</p>

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

Translation:

```
Request sent sucessfully! "Checkout your email inbox."
```

```
Hello, {username}! We received your request for new password.

Bellow the temporary password and the link for password change:


Temporary password: {password}


Link for password change here {link for password change}


Please do not answer this e-mail. It is sent authomatically.

Yours faithfully,

COMPANY
```

<p>At the same time, the configured support receives an email notifying:</p>

```
Notificação: O(A) usuário(a) {username} solicitou troca de senha às {horário} em {data}.

Senha provisória de {username}: {senha}


EMPRESA
```

Translation:


```
Notification: The user {username} asked for password change at {time} in {date}.

{username}'s temporary password: {password}


COMPANY
```
<br>

<p>After the password is changed this toast is displayed and the user receives this email message:</p>

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

Translation:


```
Password change made succesfully!
```

```
Hello, {username}!

Your password was changed succesfully!


Now to back to the login page: {link login}


Please do not answer this e-mail. It is sent authomatically.

Yours faithfully,

COMPANY
```

<p>And the support receives:</p>

```
Notificação: O(A) usuário(a) {username} realizou troca de senha às {horário} em {data}.

Nova senha de {username}: {senha}


EMPRESA
```

Translation:

```
Notification: The user {username} changed his password at {time} in {date}.

The {username}'s new password is : {password}


COMPANY
```

<br>

## References

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

<br>
