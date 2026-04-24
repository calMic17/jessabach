type HamburgerProps = {
  isOpen: boolean;
  toggle: () => void;
};


function NavBarHamburger({ isOpen, toggle }: HamburgerProps) {
  return (
    <button
      className="hamburger"
      onClick={toggle}
      aria-label="Toggle menu"
    >
      <span className={`hamburger-line ${isOpen ? "open" : ""}`} test-id="hamburger-line"></span>
      <span className={`hamburger-line ${isOpen ? "open" : ""}`} test-id="hamburger-line"></span>
      <span className={`hamburger-line ${isOpen ? "open" : ""}`} test-id="hamburger-line"></span>
    </button>
  );
}

export default NavBarHamburger;