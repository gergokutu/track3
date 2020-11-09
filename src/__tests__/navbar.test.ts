import Navbar from "../Navbar/setNavbar";

describe("Check The Class Implementaion For NavBar", () => {
  it("Check If new() keywords is accessible", () => {
    const container = document.createElement("div");
    const navbar = new Navbar(container);
    expect(navbar).toBeTruthy();
  });
});
