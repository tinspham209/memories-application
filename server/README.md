# Mini Project: Memories Application - Server

## Date:

Phrase 1: 02 - Nov - 2020
Phrase 2: 26 - Mar - 2021

### Tech-Stack

- Dependencies:
  - body-parser@1.19.0
  - express@4.17.1
  - mongoose@5.10.11
  - cors@2.8.5
  - nodemon
  - morgan
  - jsonwebtoken@8.5.1
  - bcryptjs@2.4.3

### Directory Structure

```
.
├── .gitignore
├── package.json
├── README.md
├── .env //Setup
├── Procfile //Deploy to heroku
├── index.js
├── routes
    ├── user.js
    └── posts.js
├── middleware
    └── auth.js
├── models
    ├── user.js
    └── postMessage.js
└── controllers
    ├── user.js
    └── posts.js
```

### How to connect to cloud MongoDB Atlas

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### How to setup process.env

- create `.env` file similar with my `.env.example` file
- update `CONNECTION_URL` with your url MongoDB Atlas

### How to deploy to Heroku

- update `.env` file
- Create new repo in [heroku](http://heroku.com/)
- Heroku login

```
heroku login
```

- Create file Procfile `./Procfile`
- Deploy your app

```
git add .
git commit -am "make it better"
git push heroku master
```

- If your deploy is failure: Run this line and continue fix bug 😁

```
heroku logs --tail
```
