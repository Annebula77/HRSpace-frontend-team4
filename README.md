# HRSpace team 4

### Prerequisites

What things you need to install the software and how to install them:

node
npm or yarn

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
   git clone <repository-url>
2. Install dependencies:
   npm install
   or
   yarn install
3. Start the development server:
   npm run dev
   or
   yarn dev

## Docker usage

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) and check updates

2. Build development image: `docker compose -f docker-compose.dev.yml up --build`
   Once you build development image, and no change is made to docker related files, you can just use the following: `docker compose -f docker-compose.dev.yml up`

3. Now you should be able to access the development server `localhost:3000`

4. Build production image: `docker-compose up --build`

5. Now you should be able to request the site from `localhost:80`

## Code Organization

### HTML Tag Attributes Order

When defining HTML tag attributes in your TSX, follow this order:

1. `key`
2. `ref`
3. Event handlers (`onClick`, `onChange`, etc.)
4. Reactive values (`value`, `defaultValue`, etc.)
5. Non-reactive attributes (`id`, `type`, etc.)
6. `style`
7. `className` (Computed class names are written after constant ones.)

### Component Props

- If you declare props as a separate interface, write it next to its component.
- Prefer default values for optional props.
- Add screen reader elements (e.g., `<span className="sr-only">`) to buttons and other unlabelled controls.

### Naming Conventions

- Use positive variable/property names (e.g., `isShown` instead of `isHidden`).
- Name event handlers after their actions (e.g., `handleRemove`).
- Name branches after task code (e.g., `NN-111`).
- Follow this format for commit messages: `<task code>: [add|change|fix|refactor|implement] <short description>` (e.g., `NN-111: add inputs`).

### Common Declarations

- Import types using the `type` keyword: `import { type Model } from ...`
- Handle backend requests and schema checking in `request-hooks`.
- Use `NOTE`, `WARNING` and `TODO` annotations in comments for clarity.
- Before publishing a branch, verify the project build locally with `npm run build`.

## Before Submitting for Review

Before submitting your code for review, ensure it adheres to our coding standards and guidelines by running the linting process. Follow these steps:

1. Execute the lint command:
   npm run lint
   or
   yarn lint

2) Examine the lint output and fix any reported issues. These could be related to code style, best practices, or potential bugs identified by the linter.

3) After correcting all issues, run the lint command again to ensure all problems have been addressed.

Adhering to these guidelines ensures code quality and consistency across our project and streamlines the code review process.

## Technologies Used

- React: `^18.2.0`
- TypeScript: `^5.2.2`
- Vite: `^5.1.4`

## Authors
👤 **Гоар Варданян** => -GitHub: [@Annebula77](https://github.com/Annebula77)
👤 **Максим Набиулин** => -GitHub: [@MaximNabiulin](https://github.com/MaximNabiulin)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
