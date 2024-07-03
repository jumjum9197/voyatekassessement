import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/magnifier.svg";
import { ReactComponent as Security } from "../../assets/magnifier.svg";
import { ReactComponent as Notifications } from "../../assets/magnifier.svg";
import { ReactComponent as Pricing } from "../../assets/magnifier.svg";
import { ReactComponent as Sales } from "../../assets/magnifier.svg";
import { ReactComponent as UsersRoles } from "../../assets/magnifier.svg";
import { ReactComponent as Backups } from "../../assets/magnifier.svg";
import { ReactComponent as BackToDashBoard } from "../../assets/backToDashBoard.svg";
import '../../../src/styles/tailwind.css'; 

// import { useAtomValue } from "jotai";



const Sidebar = () => {
  return (
    <>
      <nav className='sidebarNav flex flex-col justify-center w-full p-4 sm:p-0 gap-4'>
        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/overview"}>
          <span>
            <Home />
          </span>
          Home
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/subscribe"}>
          <span>
            <Security />
          </span>
          Security
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/materials"}>
          <span>
            {" "}
            <Notifications />
          </span>
          Notifications
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/my-paid-materials"}>
          <span>
            {" "}
            <Pricing />
          </span>
          Pricing
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/messages"}>
          <span>
            <Sales />
          </span>
          Sales
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/change-password"}>
          <span>
            {" "}
            <UsersRoles />
          </span>
          Users & Roles
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={"/change-password"}>
          <span>
            {" "}
            <Backups />
          </span>
          Backups
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? 'sidebarNav a.activeLink bg-teal-100 text-teal-900 font-bold' : "")} to={""}  style={{marginBlockStart:'18rem'}}>
          <span>
            {" "}
            <BackToDashBoard />
          </span>
          Logout
        </NavLink>
      </nav>
    </>
  );
};

export default Sidebar;
