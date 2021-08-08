# Monorepo with React, TypeScript and Commitizen
Monorepo with React, TypeScript and Commitizen

## Getting Started

### Directory structure:

```
.
└── 📂 monorepo-lerna-commitizen/
    ├── 📂 packages/
    │   ├── 📦 app/                        → main package
    │   │   ├── 📂 src/
    │   │   └── 📄 package.json
    │   └── 📦 shared/                     → shared component library
    │       └── 📂 src/
    │       └── 📄 package.json
    ├── 📄 package.json
    └── 📄 yarn.lock
```

### Dependencies:
Tools needed to run this app:
- [`node and npm`](https://nodejs.org/en/)
- [`lerna`](https://lerna.js.org/)
- [`commitizen`](https://github.com/commitizen/cz-cli#installing-the-command-line-tool)
- [`verdaccio`](https://verdaccio.org/docs/installation/)

### Installing:
* Run `yarn` to install dependencies

### Running the App:
After you have installed all dependencies, you can run the app:

- `yarn start`
- Go to `http://localhost:3000`

### Want to know more?

Check the [blog post that explains the details](https://blog.codecentric.de/en/2021/02/automating-package-publishing-in-javascript-projects)
