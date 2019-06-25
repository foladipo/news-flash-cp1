[![Build Status](https://travis-ci.org/foladipo/news-flash-cp1.svg?branch=develop)](https://travis-ci.org/foladipo/news-flash-cp1)
[![Coverage Status](https://coveralls.io/repos/github/foladipo/news-flash-cp1/badge.svg?branch=develop)](https://coveralls.io/github/foladipo/news-flash-cp1?branch=develop)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()


# Welcome

Welcome to News Flash! This project gives you access to high quality, cutting edge news from 
sources worldwide. It is also designed to be intuitive and easy to use, all with a 
great, responsive UI. To see a live version of this project, please visit [this link](https://news-flash-cp1-staging.herokuapp.com/).


## Table of Contents

  1. [Tech stack](#tech-stack)
  1. [Installation and setup](#installation-and-setup)
  1. [Limitations](#limitations)
  1. [How to Contribute](#how-to-contribute)
  1. [FAQ](#faq)
  1. [License](#license)


## Tech stack

This project uses a host of modern technologies. The core ones are:
- ECMAScript 6: Also known as ES2015, this is a modern version of JavaScript with 
next-generation features like arrow functions, generators, enhanced object literals, 
spread operators and more. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.

- [Node.js](https://nodejs.org): Node.js is a server-side JavaScript runtime engine built 
on Chrome's V8 JavaScript engine. It is lightweight, efficient and greatly used in building 
web apps. Please visit [this link](https://nodejs.org) for more details.

- [React](https://facebook.github.io/react/) and [ReactDOM](https://facebook.github.io/react/docs/react-dom.html): 
These were developed by [Facebook](https://facebook.com/) and are used for building web pages that are structured as a collection of 
components. These components are kept as independent as possible. See [this link](https://facebook.github.io/react/).

- [The Flux architecture](https://facebook.github.io/flux/): This is a design architecture for building stable 
web apps with, among other things, a unidirectional flow of data. See [this link](https://facebook.github.io/flux/) 
for details.

- [Firebase](https://firebase.google.com/): This project makes use of various components of 
[the Firebase suite](https://firebase.google.com/), especially Firebase Authentication.


## Installation and setup

Here are the steps you need to follow to run this project on your computer:
- **Install Node.js version 10.x**: You may visit [this link](https://nodejs.org/en/download/) for complete 
instructions on installing Node.js version 10.x on your computer.

- **Open a terminal/command prompt** on your computer and `cd` into your preferred path/location.

- **Clone this repo**: Enter this command in the terminal:

```bash
git clone https://github.com/foladipo/news-flash-cp1.git
```

- **Install dependencies**: Do so by running the following command:

```bash
npm install
```
Note: `npm` is a component of Node.js that serves as its package manager. So it comes along with installing Node.js. Note that since the project requires Node.js version 10.x, you also need npm version 6.x to run this project.


- **Create a Firebase project**: This project uses the [Firebase JavaScript SDK](https://firebase.google.com/docs/web/setup/)
 for user authentication, so you need to create a Firebase project before you can run this
 project locally. Please visit [this link](https://firebase.google.com/docs/web/setup#create-project)
 for instructions on creating a Firebase project.

- **Register a Firebase app**: After creating a Firebase project, you need to register a
 Firebase web app in/within that project. Visit [this link](https://firebase.google.com/docs/web/setup#register-app)
 for instructions on registering such an app.

- **Configure this project with your Firebase keys**: [This page](https://firebase.google.com/docs/web/setup#config-object)
 shows what an object for configuring Firebase looks like. So, follow the instructions
 under "Get config object for your web app" on [this page](https://support.google.com/firebase/answer/7015592)
 to get your own Firebase config object. Make a copy of the `env.sample` file in the
 root of this project, rename that copy to `.env`, remove the comments (i.e "#") at
 the beginning of each line that starts with "#FIREBASE_" and supply the value
 that that line needs. For example, `FIREBASE_API_KEY` should be the apiKey in your
 Firebase app's config.

- **Obtain an API key for News API**: The news articles displayed by this app are
 retrieved from [News API](https://newsapi.org/). Please head over to their website,
 obtain an API key and enter it into your `.env` as the value for `NEWS_API_KEY`.

- **(Optional) Specify a port for the app**: You can tell this app to run on your
 desired port by entering that port number in `.env`. If you don't do so, this app
 will run on port `5000`.

- **Run the project**: In the terminal/command prompt, enter the following command:

```bash
npm start
```

- **Open a web browser of your choice and visit `http://localhost:5000` (or `http://localhost:PORT`). Voila! It's alive!**

- **Note that this app uses hot reload**: So, after starting the app, you can make changes to the source code and they will be automatically compiled and reloaded into your browser page! Sweet, init?


## Limitations

This project has some limitations. The most notable ones are:
- You cannot share multiple articles at once. So, if you see a couple of news articles that 
you would love to share to your followers on Twitter, you have to do that one article 
at a time.
- You can only read ten (10) articles at a time i.e pagination is not possible. This 
limitation comes from our central news source, [NewsAPI](https://newsapi.org).


## How to Contribute

Do you want to contribute to this project? We would love for you to do so! The steps involved are:
- fork this repo.
- create a branch using [this format](https://github.com/foladipo/news-flash-cp1/wiki/Branch-naming-convention).
- make the changes you want and commit them with concise, descriptive commit messages.
- submit a pull request that follows [the format described here](https://github.com/foladipo/news-flash-cp1/wiki/Pull-request-naming-and-description).

That's all and thanks a lot for helping out!


## FAQ

- **What if I want to use another port?**

That's easy. Edit your existing `.env` file (or create a new one) and add the following line to it:

```bash
PORT=<YOUR_DESIRED_PORT>
```

where <YOUR\_DESIRED\_PORT> is the port you want to use. So if you want to use port `8080` you should write:

```bash
PORT=8080
```


## License

This project is authored by [Folusho Oladipo](https://google.com/search?q=Folusho+Oladipo) and is licensed 
for your use, modification and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License). 
Feel free to hack, extend and share it!
