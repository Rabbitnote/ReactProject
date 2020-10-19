import Product from './Product';

import Styles from '../styles/ListOfProduct.module.css';
const List = props => {
    const renderList = () => {
        const products = props.item.map((item, index) => {
            return (
                <Product
                    title={item.title}
                    price={item.price}
                    writer={item.writer}
                    image={item.image}
                    index={index}
                ></Product>
            );
        });
        return products;
    };
    return <div className={Styles.div}>{renderList()}</div>;
};
export default List;
