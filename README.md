# React Hexle

This is a variation on Wordle where you guess the RGB values of an unknown color. Built upon the popular [react-wordle](https://github.com/cwackerfuss/react-wordle). Made using React, Typescript, and Tailwind.


[**Try out the demo!**](https://timothymakkison.github.io/Hexle/) at [https://timothymakkison.github.io/Hexle/](https://timothymakkison.github.io/Hexle/)

![screenshot](./screenshot.PNG)

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```

Open [http://localhost](http://localhost) in browser.
