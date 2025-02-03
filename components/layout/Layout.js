import Link from "next/link"
import styles from './Layout.module.css'

function Layout({children}) {
  return (
    <>
        <header className={styles.header} >
            <Link href='/' >
            <h2>amin car</h2>
            </Link>
            <p>chose or buy your favaritor car</p>
        </header>
        <div className={styles.container} >
            {children}
        </div>
        <footer className={styles.footer} >
            amin next project | amincxo 
        </footer>
    </>
  )
}

export default Layout