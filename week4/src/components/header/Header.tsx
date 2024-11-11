import { ACCESS_TOKEN_KEY } from '@constants/config';
import * as styles from './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>마이페이지</h1>
        <nav className={styles.nav}>
          <Link to='/mypage/hobby' className={styles.link}>
            취미
          </Link>
          <Link to='/mypage/info' className={styles.link}>
            내정보
          </Link>
        </nav>
      </div>

      <button className={styles.logoutButton} onClick={handleLogout}>
        로그아웃
      </button>
    </header>
  );
};

export default Header;
