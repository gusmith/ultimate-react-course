# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Deploy to Netlify

Run

```shell
npm run build
```

Add the `netlify.toml` file in the `dist` folder, and then in Netlify, just updload the `dist` folder.

You can also link the project top a github repo.

## Deploy on Vercel

Vercel connect to Github too. It is a CI for npm applications (they handle the build, install and deployment).
