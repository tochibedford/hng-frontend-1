# HNG Frontend Task 1 - Tochi Bedford

## Bootstrapping

I have bootstrapped this project with Vite rather than CRA, for its speed.

## Testing

All tests I wrote for the project can be found in the "./src/\_\_test\_\_" directory.

Testing for the project was done using Vitest, Testing-Library and JestDom.

The tests are based on the [design requirements](https://hng9.notion.site/Front-End-Stage-1-Task-cdaf503a796b4a5a85c5883a0a6163db) given for the task and cover all of the task requirements + some additional ones.

All my tests can be run using:

``` bash
npm test
```

## Accessibility

I have followed as many semantic Html rules as possible for the task. as well as making sure different sections were Tab-Accessible

## Conventions

Class names should be snake__case with double under scores
There is a Component for each logical "page" in the `./src/components/Pages` folder
Every other page will be styled with css modules besides the `Home` Page

## Deployment

I have deployed the live site to [https://hng-frontend-1.vercel.app/](https://hng-frontend-1.vercel.app/)