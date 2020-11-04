# Mini Project: Memories Application - Client

### Tech-Stack

- redux@4.0.5
- redux-thunk@2.3.0
- axios@0.21.0
- react-file-base64@1.0.3
- moment@2.29.1
- @material-ui/core

### Directory Structure

```
.
├── .gitignore
├── package.json
├── README.md
├── public
└── src
    ├── images
    ├── api
    ├── actions
        ├── posts.js
    ├── reducers
        ├── posts.js
        ├── index.js
    ├── components
        ├── Form
        └── Posts
            └── Post
    ├── App.js
    ├── styles.js
    └── index.js
```

## Installation Guide

### Production

- Clone this project

```
git clone https://github.com/tinspham209/memories-application
```

- Install dependencies

```
npm install
```

- Start the server

```
npm start
```

### Development

- Clone this project
- Install dependencies

```
npm install
```

- Start packager

```
npm start
```

### How to name a folder and a file

- Folder name: - Ex: `InfoSection`
- Component file name: should be -- Ex: `InfoSection.js`
- Style component file name: should be -- Ex: `styles.js`

### How to import and export module?

- Import:

```js
//import every thing
import * as React from "react";
import * as ReactDOM from "react-dom";

//for default export
import InfoSection from "./InfoSection";

//for named export
import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to style for each component?

- Create a styled-component file. Ex: `styles.js`
- Import to `js` file

```js
// InfoSection.js

import { InfoSec, InfoRow } from "./styles.js";
```

### How to connect to cloud MongoDB Atlas

### How to setup Redux, Redux Thunk
