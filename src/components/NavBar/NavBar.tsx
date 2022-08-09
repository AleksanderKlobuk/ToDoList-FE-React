import styles from './NavBar.module.css'

const NavBar: React.FC = () => {
  return (
    <div className={styles.nav_container}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.links}>
            <div >Adress</div>
            <div>Login</div>
            <div>SignIn</div>
        </div>
    </div>
  )
}

export default NavBar