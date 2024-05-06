# Part 1

## VSCode setup

Plugin list:

- ESLint
- Prettier - Code formatter
- One Monokai (colour scheme)
- Material Icon Theme
- Auto Rename Tag

Settings:

- auto save
- default formatter -> prettier
- eslint run -> on save

### VS Code Snippets

Some interesting ones in the [file](./00-setup/snippets.json)
Most inetersting one is the `rfc` one creating the default component function using the file name.

## Webbrowser setup

React Developer Tools

## Links

Here are some resources that you might find helpful while studying this Part 1.

- [React](https://react.dev/?ref=jonas.io) (Documentation that you should keep open at all times)
- [Create React App](https://create-react-app.dev/?ref=jonas.io) (This is how we'll setup our first app)
- [Vite](https://vitejs.dev/guide/?ref=jonas.io): Getting Started (For real-world React apps)
- [Adding React URL to an HTML Document](https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html) (For the "Pure React" lecture)

## Practical guidelines

- use state vars for any data that the component should keep track of ("remember") over time. This is the data that will change at some point.
- whener you want something in the component to be dynamic, create a piece of state related to that thing. Update the state when the thing should change
- if you want to change the way a component looks, or the data it displays, update its state. This usually happens in an event handller function.
- when building a component, imagine its view as a reflection of state changing over time
- for data that should not trigger component re-renders, don't use states. Use a regular variable instead or use refs. This is a common beginner mistake.

![Refs vs States](./images/RefsVsStates.png)

# Part 2

## Links

- [Writing Resilient Components](https://overreacted.io/writing-resilient-components/?ref=jonas.io) (By Dan Abramov from the React team)
- [Things I think about when I write React code](https://github.com/mithi/react-philosophies?ref=jonas.io) (GitHub repository)
- [A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/?ref=jonas.io) (By Mark Erikson from the redux team)
- [A Visual Guide to React Rendering](https://alexsidorenko.com/blog/react-render-always-rerenders/?ref=jonas.io) (A multi-part series, check out the other ones)
- [Inside Fiber: in-depth overview of the new reconciliation algorithm in React](https://indepth.dev/posts/1008/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react?ref=jonas.io)
- [A Cartoon Intro to Fiber](https://www.youtube.com/watch?v=ZCuYPiUIONs?ref=jonas.io) (YouTube video)
- [What Is React Fiber? React.js Deep Dive](https://www.youtube.com/watch?v=0ympFIwQFJw?ref=jonas.io) (YouTube video)
- [The React and React Native Event System Explained](https://levelup.gitconnected.com/how-exactly-does-react-handles-events-71e8b5e359f2?ref=jonas.io)
- [Under the hood of event listeners in React](https://gist.github.com/romain-trotard/76313af8170809970daa7ff9d87b0dd5?ref=jonas.io)
- [A DIY guide to build your own React](https://github.com/pomber/didact?ref=jonas.io)
- [useSyncExternalStore First Look](https://julesblom.com/writing/usesyncexternalstore?ref=jonas.io)
- [Under the hood of React's hooks system](https://the-guild.dev/blog/react-hooks-system?ref=jonas.io)
- [Why Do React Hooks Rely on Call Order?](https://overreacted.io/why-do-hooks-rely-on-call-order/?ref=jonas.io) (By Dan Abramov)
- [So you think you know everything about React refs](https://blog.thoughtspile.tech/2021/05/17/everything-about-react-refs/?ref=jonas.io)
- [react-use: Reusable React Hook Library](https://github.com/streamich/react-use?ref=jonas.io) (GitHub repository)
- [react-hookz: React hooks done right](https://github.com/react-hookz/web?ref=jonas.io) (GitHub repository)

## Notes

When in doubt, start with a big component, then split into smaller

1. logical speration of content/layout
2. reusabilty
3. responsibilities/complexity
4. personal coding style

About rendering and commiting:
![Render and commit](./images/RenderCommit.png)

`useEffect` to handle side effects in the render logic. Important not to foget the dependency array in the method.

side effect e.g:

- data fetching
- setting up subscriptions
- setting up timeers
- manually accessing the DOM

effect can run at different moments. Used to keep a component synchornized with some external system.

List of hooks a bit used:

- useState
- useEffect
- useReducer
- useContext
- useRef
- useCallback
- useMemo
- useTransition
- useDeferredValue

Rules of hooks:

1. only be called at the top level (not in conditionals, loops, nested function, or after an early return, ensure that hooks always called in the same order)
1. only call hooks from React function (only called in function component or in custom hook).

But React ESLint enforces these rules.

useState summary:
![useState](./images/UseState.png)

# Part 3

## Links

- [Tao of React - Software design, Archjitecture and Best Practices](https://alexkondov.com/tao-of-react/?ref=jonas.io)
- [The new wave of React state management](https://frontendmastery.com/posts/the-new-wave-of-react-state-management/?ref=jonas.io)
- [A Visual Guide to React Rendering - useMemo](https://alexsidorenko.com/blog/react-render-usememo?ref=jonas.io)
- [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/?ref=jonas.io) (By Dan Abramov from the React team)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect?ref=jonas.io) (Official React docs)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/?ref=jonas.io)
- [useEffect sometimes fires before paint](https://blog.thoughtspile.tech/2021/11/15/unintentional-layout-effect/?ref=jonas.io)
- [Making setInterval Declarative with React Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/?ref=jonas.io)
- [Redux - Not Dead Yet!](https://blog.isquaredsoftware.com/2018/03/redux-not-dead-yet/?ref=jonas.io)
- [Why React Context is Not a "State Management" Tool](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/)

### Library documentation

- [Vite](https://vitejs.dev/guide/why.html)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React Router](https://reactrouter.com/en/main?ref=jonas.io)
- [React Leaflet: Installation](https://react-leaflet.js.org/docs/start-installation/?ref=jonas.io)
- [Redux: Style Guide](https://redux.js.org/style-guide/?ref=jonas.io) (A must-read for Redux users!)
- [Redux Toolkit](https://redux-toolkit.js.org/tutorials/overview?ref=jonas.io)
- [React Redux](https://react-redux.js.org/api/hooks?ref=jonas.io)

## Why reducer?

1. when components have a lot of state variables
1. when multiple state updates need to happen at the same time
1. when updating one piece of state depends on one or multiple other piece of state

## When to use a reducer

![WhenToUseAReducer](./images/WhenToUseReducer.png)

## Routers

Most used third party library: react-router
Single page applicatiob, never a hard reload.

## Styles in React

![styles](./images/StylingOptions.png)

## State in URLs

Great for UI state instead of useState.

1. Easy way to store state in aglobal place, accessible to all components in the app
1. Good way to "pass" data from one page to another
1. Makes it possible to bookmark and share the page with the exact UI state it had at that time

## Context API

- System to pass data throughout the app without manually assing pros downthe triee
- Allows us to "broadcast" global state to the entire app

1. Provider: gives all child components access to the value
1. value: data that we want to make available (usually state and functions)
1. Consumers: all components that read the provided context `value`

When a value is updated, all consumers are re-rendered.
