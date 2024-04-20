import {
  HeaderLogo,
  HeaderMenu,
  HeaderSearchBar,
  HeaderSignWrapper,
} from "./components";

function Header() {
  return (
    <header className="bg-white border-b shadow-xl px-8 sticky z-10 top-0">
      <div className="max-w-screen-lg flex items-center mx-auto h-16 relative">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderSearchBar />
        <HeaderSignWrapper />
      </div>
    </header>
  );
}

export default Header;
