# Mini Project: Memories Application - Client

### Tech-Stack

- redux@4.0.5
- redux-thunk@2.3.0
- axios@0.21.0
- react-file-base64@1.0.3
- moment@2.29.1
- @material-ui/core
- @material-ui/icons
- jwt-decode@3.1.2
- react-google-login@5.2.2

### Directory Structure

```
.
├── .gitignore
├── package.json
├── README.md
├── deploy-firebase
├── build
├── public
└── src
    ├── images
    ├── api
    ├── constants
        └── actionTypes.js
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
    ├── index.css
    └── index.js
```

### How to deploy to firebase

- create new project in your firebase account
- firebase login in your local machine

```
firebase login
```

- firebase init -> Choose hosting.

```
firebase init
```

- cd `./deploy-firebase`, in line 11, update `memories-application` with your project name

```
firebase use [your-project]
```

### How to fetch data from server

- go to `./src/api/index.js`
  - update `url` with your domain
- update your Credentials for Google Authentication in `./src/components/Auth/Auth.js` `const googleId`

### How to get googleId in Credentials of Google Authentication

- go to [console.developers.google.com](https://console.developers.google.com/)
- create new project
- In the left sidebar, Choose **OAuth consent screen**

  - User Type: External > Next
  - App name: you app you want
  - User support email: choose your account
  - Developer contact information: Email addresses: Type your account
  - Save and Continue 2 times
  - Back to Dashboard

- Choose **Credentials**:

  - create Credentials > OAuth client ID
  - Application type: Web application
  - Authorized JavaScript origins
    - URIs: `https://localhost:3000` and `http://localhost:3000`
  - Authorized redirect URIs
    - URIs: `http://localhost:3000` and `http://localhost:3000/auth`
  - Save
  - An popup will show, and copy `Client ID` with long string

- cd to `./src/components/Auth/Auth.js` update your `googleId` in line 20 with `Client ID` that you already copied to clipboard

### How to setup Redux, Redux Thunk

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
