import { navbarInit } from './Navbar/navbar'

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

`

const navbarContainer: HTMLDivElement = document.createElement('div');
navbarContainer.setAttribute('class', 'nav-container');
body.appendChild(navbarContainer);

navbarInit(navbarContainer);






