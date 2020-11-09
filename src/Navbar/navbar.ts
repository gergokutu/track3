import Navbar from './setNavbar'

export const navbarInit = (container: HTMLDivElement): void => {
  const links : string[]= ['Home', 'About  Us', 'Our Goals', 'Contact Us', 'Career'];
  const navbar: Navbar = new Navbar(container);
  navbar.setLogo();
  navbar.setNavLinks(links);
  navbar.setBurgerMenu();
}