import { ReactComponent as Notification } from "../../assets/notification.svg";
import { ReactComponent as Search } from "../../assets/magnifier.svg";
import '../../../src/styles/tailwind.css'; 

const Header = ({ handleOpenSidebar }: { handleOpenSidebar: () => void }) => {
  return (
    <header className='header flex items-center justify-between py-2 px-16 bg-teal-900 sticky top-0 z-20 sm:pl-4 sm:pr-4'>
      <section className='headerMenuGroup flex items-center gap-5'>
        <button onClick={handleOpenSidebar} className='menuBtn hidden sm:block border-none outline-none'>
          <Notification />
        </button>
        <div className='flex items-center gap-2 border border-gray-400 text-primary rounded-md py-3 px-3 w-[22.857rem] sm:w-auto'>
          <Search />
          <input
            className='border-none outline-none text-gray-900 headerInput'
            type="text"
            placeholder="Search"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
