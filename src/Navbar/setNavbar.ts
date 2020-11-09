const style: HTMLStyleElement = document.createElement('style');
const head: HTMLHeadElement = document.head;
head.appendChild(style);

style.innerHTML = `
  .logo-container, .menu-container {
    cursor: pointer;
    z-index: 2;
  }
  .burger-bar {
    background: black;
    height: 0.4rem;
    width: 3rem;
    margin: 0.4rem;
    transition: all 0.5s ease-in-out;
  }
  .links-container ul {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
    background: linear-gradient(45deg, rgba(150, 133, 197, 0.5),  rgba(94, 67, 67, 0.5), rgb(65, 109, 105, 0.5));
    transform: translateY(-100%);
    transition : all 0.5s ease-in-out;
  }
  .links-container ul li {
    margin: 2rem;
  }

  .show-menu {
   transform: translateY(0);
  }

  .target-link {
    text-decoration: none;
    color: white;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    transition: all 0.4s ease-in-out;
  }

  .target-link:hover{
    color: green;
  }
`

// Setting Up Interface For Class Type.
interface NavbarProps {
  container: HTMLDivElement,
  setLogo: () => void,
  setBurgerMenu: () => void,
  setNavLinks: (links: string[]) => void
}

// Using Implements To Use Interface.
// Set Private Which Is Not Necessary For Build And Shouldn't Be Called Outside The Class.
export default class Navbar implements NavbarProps {
  public container: HTMLDivElement;
  private menuState: boolean;

  public constructor(navBarContainer: HTMLDivElement) {
    this.container = navBarContainer;
    this.menuState = false;
  }

  // Method To Set Logo.
  public setLogo(): void {
    const logoContainer: HTMLDivElement = document.createElement('div');
    const logoImage: HTMLImageElement = document.createElement('img');
    logoContainer.setAttribute('class', 'logo-container');
    this.container.appendChild(logoContainer);
    logoContainer.appendChild(logoImage);
    Object.assign(logoImage, {
      className: 'logo-img',
      src: '../src/assets/logo-img.svg',
      alt: 'Logo',
      title: 'Project Management'
    })
  }

  // Set Burger Menu.
  public setBurgerMenu(): void {
    const menuContainer: HTMLDivElement = document.createElement('div');
    menuContainer.setAttribute('class', 'menu-container');
    this.container.appendChild(menuContainer);

    for (let i = 0; i < 3; i++) {
      const bar: HTMLDivElement = document.createElement('div');
      Object.assign(bar, {
        className: 'burger-bar',
        id: `bar-${i + 1}`,
      })
      menuContainer.appendChild(bar);
    }
    menuContainer.addEventListener('click', this.changeMenuState);
  }

  // Set Nav Links.
  public setNavLinks(links: string[]): void {
    const linksContainer: HTMLDivElement = document.createElement('div');
    const ul: HTMLUListElement = document.createElement('ul');
    linksContainer.setAttribute('class', 'links-container');
    linksContainer.appendChild(ul);
    this.container.appendChild(linksContainer);

    const totalLinks: number = links.length;
    for (let i = 0; i < totalLinks; i++) {
      const li: HTMLLIElement = document.createElement('li');
      const a: HTMLAnchorElement = document.createElement('a');

      // Using Regex To Change The String, If Space Present Then Fill With '-'.
      const idText: string = links[i].replace(/\s+/g, '-').toLowerCase();
      const linkText: string = links[i].toUpperCase();

      Object.assign(a, {
        id: idText,
        className: 'target-link',
        href: `#${idText}`
      })
      a.appendChild(document.createTextNode(linkText));
      li.appendChild(a);
      ul.appendChild(li);
    }
  }

  // Change Menu State And Animation.
  public changeMenuState = (): void => {
    const bars: NodeListOf<Element> = this.container.querySelectorAll('.burger-bar');
    const ul: HTMLElement | null = this.container.querySelector('ul');
    this.menuState = !this.menuState;
    this.menuState ? bars[0].setAttribute('style', 'transform: rotate(-45deg) translate(-5px, 4px);') : bars[0].setAttribute('style', 'transform: rotate(0) translate(0);');
    this.menuState ? bars[1].setAttribute('style', 'width: 0; height: 0; opacity: 0') : bars[1].setAttribute('style', 'width: auto;');
    this.menuState ? bars[2].setAttribute('style', 'transform: rotate(45deg) translate(-5px, -4px);') : bars[2].setAttribute('style', 'transform: rotate(0) translate(0);');
    this.menuState ? ul?.setAttribute('style', 'transform: translateY(0);') : ul?.setAttribute('style', 'transform: translateY(-100%);');
  }
}