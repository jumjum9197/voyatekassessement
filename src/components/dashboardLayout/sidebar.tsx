import { NavLink } from "react-router-dom";
import { ReactComponent as Overview } from "../../assets/overview.svg";
import { ReactComponent as Subscribe } from "../../assets/subscribe.svg";
import { ReactComponent as BackToDashBoard } from "../../assets/backToDashBoard.svg";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Book } from "../../assets/book.svg";
import { ReactComponent as Chat } from "../../assets/chat.svg";
import { ReactComponent as Key } from "../../assets/key.svg";
import styles from "./styles.module.scss";
// import { useAtomValue } from "jotai";

const Sidebar = () => {
  return (
    <>
      <nav className={styles.sidebarNav}>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={"/overview"}>
          <span>
            <Overview />
          </span>
          Overview
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={"/subscribe"}>
          <span>
            <Subscribe />
          </span>
          Subscribe to other Lecturers
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={"/materials"}>
          <span>
            {" "}
            <Search />
          </span>
          Search Materials
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={"/my-paid-materials"}>
          <span>
            {" "}
            <Book />
          </span>
          My Paid Materials
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={"/messages"}>
          <span>
            <Chat />
          </span>
          Message Lecturers
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={"/change-password"}>
          <span>
            {" "}
            <Key />
          </span>
          Change Password
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? styles.activeLink : "")} to={""}  style={{marginBlockStart:'18rem'}}>
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
