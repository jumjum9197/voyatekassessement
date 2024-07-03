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

const Sidebar = () => {
  return (
    <nav className="flex flex-col w-48 p-4 gap-4 bg-white text-gray-800 ml-4">
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/overview">
        <Home />
        <span>Home</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/subscribe">
        <Security />
        <span>Security</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/materials">
        <Notifications />
        <span>Notifications</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/my-paid-materials">
        <Pricing />
        <span>Pricing</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/messages">
        <Sales />
        <span>Sales</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/change-password">
        <UsersRoles />
        <span>Users & Roles</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200')} to="/backups">
        <Backups />
        <span>Backups</span>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'flex items-center gap-2 p-2 rounded-md bg-teal-600 mt-auto mb-18' : 'flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 mt-auto mb-18')} to="/logout">
        <BackToDashBoard />
        <span>Logout</span>
      </NavLink>
    </nav>
  );
};

export default Sidebar;
