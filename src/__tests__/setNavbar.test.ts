import Navbar from "../Navbar/setNavbar";

describe("Check The Class Methods", () => {
  it("Check If The Class Is Called With The New Keyword", () => {
    const container = document.createElement("div");
    const navbar = new Navbar(container);
    expect(navbar).toBeTruthy();
  });
});
