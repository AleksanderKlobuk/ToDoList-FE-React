import { useContext } from 'react'
import AuthContext from '../store/AuthContext'
import styles from './NavBar.module.css'

const NavBar: React.FC = () => {
  const ctxAuth = useContext(AuthContext)
  return (
    <div className={styles.nav_container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
            <div onClick={ctxAuth.onLogout}>Logout</div>
        </div>
    </div>
  )
}

export default NavBar