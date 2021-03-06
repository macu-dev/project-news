# Project News - The Hound News

This project is an example of how to use vanilla javascript to build an application that consumes a service, in this case i am using the [News Api](https://newsapi.org/) and i am also using this [Boilerplate](https://github.com/shaminmeerankutty/webpack-sass-bootstrap-boilerplate) where i am a contributor.

In this project i play arround a lot with:

- Vanilla Javascript ES6+
- Classes
- Promises

> **Update 2020:** The **NewsApi.org** changed its policies and now the free account can only consume the news api from localhost. To test this project do it locally
[Live Preview](https://dist.franmeriles.now.sh/)

## Design

The UI/UX is made by [Sofía Colque](https://www.linkedin.com/in/sofiacolquesaavedra/), thanks a lot.

### Requirements

- Please make sure you have NodeJS installed, as this contains `npm`, which is necessary
  for installing dependencies, starting the appropriate scripts, and building your web project.

- Create an account in [News Api](https://newsapi.org/) site and generate a key (is free).

- Create a `.env` file and place the following.

```
  NEWS_API_KEY = "YOUR NEWS API KEY"
  LOCATION_URL_API = "https://extreme-ip-lookup.com/json/"
```

### Do you wana try it ?

Clone this repo and install all packages and dependencies required for this project:

    npm install

Start the development environment (then, navigate to http://localhost:8080):

    npm start

Building files can be done as follows:

    npm run build

### Pull Request

Feel free to make a fork and send me a pull request with improvements, i am always willing to improve my way of writing code and thanks.

### License (MIT)

Code released under the [MIT License](LICENSE.md).
