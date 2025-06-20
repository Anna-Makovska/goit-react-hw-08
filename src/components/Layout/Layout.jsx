// Layout.js
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <AppBar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
