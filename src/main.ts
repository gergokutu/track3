import { navbarInit } from './Navbar/navbar';

const body: HTMLBodyElement = document.getElementsByTagName('body')[0];
const style: HTMLStyleElement = document.createElement('style');
const head: HTMLHeadElement = document.head;
body.setAttribute('class', 'container');
head.appendChild(style);

style.innerHTML = `
  *{
    margin: 0;
    padding: 0;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem;
  }

`;

const navbarContainer: HTMLDivElement = document.createElement('div');
navbarContainer.setAttribute('class', 'nav-container');
body.appendChild(navbarContainer);

navbarInit(navbarContainer);

const sum = (...a: number[]): number => a.reduce((acc, val) => acc + val, 0);
const justOneNumber: number = sum(1, 2, 3, 4);
const testTitle: HTMLHeadingElement = document.createElement('h1');
testTitle.innerHTML = `Just a calculated value for testing >>> ${justOneNumber.toString()} :)`;
document.body.appendChild(testTitle);

export { sum };
