// the widget header component, it have a country flag, a city name and the current date of the information
import styles from "./Header.module.scss";

// add here two icons to control the city
// needs to show the local our of the forecast\

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.arrows}>⬅️</div>
      <div className={styles.header_content}>
        <div>
          <div>🏳️‍🌈</div>
          <span> Ciudad de Mexico </span>
        </div>
        <div>
          <div>📅</div>
          <span>Today, May 5</span>
        </div>
      </div>
      <div className={styles.arrows}>➡️</div>
    </div>
  );
};

export default Header;
