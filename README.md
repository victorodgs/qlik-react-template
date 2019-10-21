# Qlik React Mashup Template

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This template allows you to use React 16.8+ to build Qlik Sense Mashups

# Packages

This project uses Yarn as package manager.

To get all depenencies:

```sh
$ yarn install
```

# Running

Copy this template to Qlik Exxtensions Folder and visit http://localhost:4848/extensions/omnicanal/index.html to access the page. Then run:

```sh
$ yarn dev
```

# Components

This project uses all new features from React 16.8+, incl. hooks like `useEffect`, `useState` and `context` to manage states.
The main logic behind the scenes are located in `src/context/QlikContext.jsx'`. This file uses the `qlikLoader` to get the Qlik API from window and make it available to whole the application.

In `src/components/Card` you can find an example using `getObject` to get an object from a Qlik App.

# Static Files

The build will output two files

- `app.js`
- `app.css`

You can find static files in `public` folder. If you're running the dev server, you need to refer to http://localhost:8080/filename in `index.html` to get the files from dev build.

If you want a production build, just refer to `public/filename` to get the files.

Happy Hacking!
