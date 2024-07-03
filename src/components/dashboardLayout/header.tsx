import { ReactComponent as Notification } from "../../assets/notification.svg";
import { ReactComponent as Search } from "../../assets/magnifier.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Nav } from "../../assets/nav.svg";
import { ReactComponent as Wallet } from "../../assets/walllet.svg";
import { ReactComponent as Inquire } from "../../assets/inquire.svg";
import { ReactComponent as Settings } from "../../assets/settings.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";


import "../../../src/styles/tailwind.css";

const Header = ({ handleOpenSidebar }: { handleOpenSidebar: () => void }) => {
  return (
    <header className="flex items-center justify-between py-2 px-16 6 bg-white sticky top-0 z-20 sm:pl-4 sm:pr-4 h-20">
      <section className="flex items-center gap-5">
        {/* Render Notification button only on small screens */}
        <Logo />
        <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 bg-gray-200">
          <Search />
          <input
            className="flex-grow px-2 py-1 bg-transparent border-none outline-none text-gray-700"
            type="text"
            placeholder="Search"
          />
        </div>
        <button
          onClick={handleOpenSidebar}
          className="menuBtn sm:hidden border-none outline-none"
        >
          <Notification />
        </button>
      </section>
      <section className="flex items-center gap-5">
        <Nav />
        <Wallet/>
        <Inquire/>
        <Settings/>
        <Profile/>
        
      </section>
    </header>
  );
};

export default Header;
