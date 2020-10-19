import Layout from '../components/Layout';
import Styles from '../styles/Store.module.css';
import Product from '../components/ProductPage';
const Store = () => {
    return (
        <Layout>
            <div className={Styles.div}>
                <h1>All product</h1>
                <select name='cars' id='cars'>
                    <option value='price'>Sort by price</option>
                    <option value='rating'>Sort by rating</option>
                    <option value='date'>sort by date</option>
                </select>
            </div>
            <div className={Styles.product}>
                <Product></Product>
            </div>
        </Layout>
    );
};
export default Store;
