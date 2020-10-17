import Layout from '../components/Layout';
import Styles from '../styles/Homepage.module.css';
import Button from '@material-ui/core/Button';
import { mergeClasses } from '@material-ui/styles';
export default function Home() {
    return (
        <Layout>
            <div className={Styles.all}>
                <div className={Styles.confriguration}>
                    <span className={Styles.span}>
                        <p className={Styles.p}>
                            <h1 className={Styles.mainText}>
                                Welcome to Bookstore
                            </h1>
                        </p>
                    </span>
                </div>
            </div>
<div className={Styles.btn}>
            <Button href='/Store' variant="contained" size='large' color='primary' >
                Go to store
            </Button>
            </div>
        </Layout>
    );
}
