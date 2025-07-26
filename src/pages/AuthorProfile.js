import { Link } from 'react-router-dom';
import styles from '../css/home.module.css';

const AuthorProfile = () => {
  return (
    <div className={styles.TOTAL}>
      <h1>Author Profile Page</h1>
      <p>This is a dummy profile page for the author.</p>
      <Link to="/" className={styles.authorLink}>
        Back to Home
      </Link>
    </div>
  );
};

export default AuthorProfile;