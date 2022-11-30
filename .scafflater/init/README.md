<!-- @scf-option  { "appendStrategy": "replace" } -->

# {{case "capitalCase" parameters.component}}

### 📚 Description

{{parameters.description}}

### 🔗 URLs

| Environment | URL                                          |
| ----------- | -------------------------------------------- |
| Development | https://d{{parameters.certificates.dnsName}} |
| Testing     | https://h{{parameters.certificates.dnsName}} |
| Production  | https://{{parameters.certificates.dnsName}}  |
| Sonar       | xxx                                          |
| Figma       | xxx                                          |

### Yarn

We use o **`yarn`** as package manager. DO NOT use **`npm`**.

<img src="https://i.redd.it/2ck8ualb6lt21.jpg" width="180" height="140" />

### 🛠️ Installation

- 1: Clone this repo and execute `yarn`;
- 2: Configure your local environment to access our private npm repository [guia de configuração do Flora](https://github.com/grupoboticario/flora/wiki/NPM-Registry#github-registry);
- 2: Create the `.env` file (use `.env.example` as example), with your local config;
- 3: Execute `yarn start`;

### 🏃 Running the app

```bash
# development
$ npm run dev

# build
$ npm run build

```

### ✅ Test

```bash
$ yarn test:watch # watch mode


```
