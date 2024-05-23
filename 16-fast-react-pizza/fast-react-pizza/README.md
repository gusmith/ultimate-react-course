# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project requirements from the business

- Very simple application, where users can order **one or more pizzas from a menu**
- Requires **no user accounts** and no login: users just input their names before using the app
- The pizza menu can change, so it should be **loaded from an API** (API already built)
- Users can add multiple pizzas to a **cart** before ordering
- Ordering requires just the **user's name, phone number, and address**
- If possible, **GPS localtion** should also be provided to make delivery easier
- User's can **mark their order as "priority"** for an additional 20% of the cart price
- Orders are made by **sending a POST request** with the order data (user dat + selected pizzas) to the API
- Payements are made on delivery, so **no payment processing** is necessary in the app
- Each order will get a **unique ID** that should be displayed, so the **user can later look up their order** based on the ID
- Users should be able to mark their order as "priority" order **even after it has been placed**

## Features + pages

Feature categories:

1. User
1. Menu
1. Cart
1. Order

Necessary pages:

1. Homepage -> `/`
1. Pizza menu -> `menu`
1. Cart -> `/cart`
1. Placing a new order -> `/order/new`
1. Looking up an order -> `order/:orderID`

## State management

State "domains" / "slices" usually map quite nicely to the app features

1. User -> global UI state (no accounts, so stays in app)
1. Menu -> Global remote state (menu is fetched from API)
1. Cart -> Global UI state (no need for API, just stored in app)
1. Order -> Global remote state (fetched and submitted to API)

## Technologoy

Just one possible stack. The author prefers React Query than react router for remote state management, but we are learning so trying new things too.

- routing -> react router
- styling -> tailwindcss
- remote state management -> react router (new way of fteching data right inside React router (v6.4+)). Note really state management as it does not persist state
- UI state manegement -> Redux as state is fairly complex, and also to practice

## Code structure

- `features` folder for everyting related to the features
- `ui` for all UI generic and re-usable components
- `services` for re-usable code interacting with the API
- `utils` for all re-usable stateless helper functions, without side effects

We could also have a `contexts` folder, `pages`...
