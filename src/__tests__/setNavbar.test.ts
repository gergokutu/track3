import Navbar from "../Navbar/setNavbar";

const mockChangeMenuState = jest.fn();
jest.mock("../Navbar/setNavbar", () => {
  return jest.fn().mockImplementation(() => {
    return {
      changeMenuState: mockChangeMenuState,
    };
  });
});

describe("Check The Class Methods", () => {
  beforeEach(() => {
    mockChangeMenuState.mockClear();
  });

  it("Check If The Class Is Called With The New Keyword", () => {
    const container = document.createElement("div");
    const navbar = new Navbar(container);
    expect(navbar).toBeTruthy();
  });
});
