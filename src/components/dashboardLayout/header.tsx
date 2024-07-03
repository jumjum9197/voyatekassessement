import styles from "./dashboardLayout.module.scss";
import { ReactComponent as Notification } from "../../assets/notification.svg";
import { ReactComponent as Search } from "../../assets/magnifier.svg";

const Header = ({ handleOpenSidebar }: { handleOpenSidebar: () => void }) => {
  return (
    <header className={styles.header}>
      <section className={styles.headerMenuGroup}>
        <button onClick={handleOpenSidebar} className={styles.menuBtn}>
          <Notification />
        </button>
        <div className={styles.search}>
          <Search />
          <input
            className={styles.headerInput}
            type="text"
            placeholder="Search"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
