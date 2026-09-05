# Study Jam 4 Live Coding Demo

React + Vite live coding demo for GDG PUP Study Jam 4. Includes React Router so the session can demonstrate multi-page navigation in a single-page app.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Quick start](#quick-start)
- [React Compiler](#react-compiler)
- [ESLint](#eslint)
- [Documentation](#documentation)
- [Contributors](#contributors)

## About

This repository is the live coding demo for Study Jam 4. Facilitators use it to walk through React + Vite setup and React Router navigation during the session. It is a teaching demo, not a production product launch.

## Features

- Minimal React setup with Vite HMR
- React Router for client-side navigation demos
- ESLint rules for React Hooks and refresh
- Official Vite React plugin options (`@vitejs/plugin-react` via Babel, or SWC via `@vitejs/plugin-react-swc`)

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev and build performance. To add it, see the [React Compiler installation docs](https://react.dev/learn/react-compiler/installation).

## ESLint

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Documentation

| Doc | Purpose |
| --- | --- |
| [State](docs/state.md) | Operate position / teaching handover |
| [Index](docs/index.md) | Document manifest |
| [FLAGS](FLAGS.md) | Improvement register |
| [AGENTS](AGENTS.md) | Agent read order |

## Contributors

This project is made possible by the GDG PUP community:

| Role | Name |
| --- | --- |
| Development | [Erwin Daguinotas](https://www.linkedin.com/in/erwin-daguinotas/) - Web Development Lead |
