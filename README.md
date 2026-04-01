# MeuApp_api

O objetivo desse projeto é demonstrar as habilidades em desenvolvimento de aplicativos mobile e realizar operações CRUD (Create, Read, Update, Delete) com um servidor json_server de teste.
Nele, o usuário poderá registrar, editar, deletar e pesquisar pessoas. Ao executar o app, ele irá carregar as pessoas do banco de dados para interagir com elas.
# Tecnologias

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50"/> JavaScript <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50"/> React Native <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50" height="50"/> NodeJS <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original.svg" width="50" height="50"/> NPM <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg" width="50" height="50"/> Expo <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="50" height="50"/> Visual Studio Code <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="50" height="50"/> Git <br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="50" height="50"/> GitHub <br>

# Requisitos
<ul>
  <li>NodeJS instalado na máquina;</li>
  <li>Aplicativo ExpoGo instalado em sua última versão no dispositivo móvel à executar o app.</li>
</ul>

# Instalação

Clone o repositório e entre no projeto:
```bash
git clone https://github.com/Vitin-19/MeuApp_api.git
cd MeuApp_api
```

Entre no diretório do app e baixe as dependências:
```bash
cd meuApp_api
npm i
```

# Execução:

Em um terminal separado, no diretório do app, execute o banco de dados:
```bash
npm run db
```

Em um outro terminal separado, no diretório do app, execute o pinggy para conseguir acessar a api através do seu dispositivo móvel:
```bash
npm run host
```

Copie a URL gerada, crie um arquivo .env e crie a seguinte variável global:
```env
EXPO_PUBLIC_API_URL=<URL do pinggy>
```

Execute o app e leia o QrCode gerado com o app ExpoGo:
```bash
npx expo start --tunnel
```

# Informações importantes

Esse projeto possui fins acadêmicos. Seu uso e modificação é permitido apenas com a autorização do autor.<br>
Link do vídeo de demonstração do aplicativo para o professor: <a href="https://youtube.com/shorts/QiY8i6ME6Dk?feature=share">https://youtube.com/shorts/QiY8i6ME6Dk?feature=share</a> 

