import Styles from '../styles/Nav.module.css';
import Link from 'next/link';
const Nav = () => {
    return (<div>
        <ul className={Styles.nav}>
            <Link href="/"><a className={Styles.link}>Homepage</a></Link>
            <Link href="/Store"><a className={Styles.link}>Store</a></Link>
            <Link href="/Profile"><a className={Styles.link}>Profile</a></Link>
            <Link href="/About"><a className={Styles.link}>About</a></Link>
        </ul>

    </div>);
};
export default Nav;