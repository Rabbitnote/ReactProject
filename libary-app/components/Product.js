import Button from '@material-ui/core/Button';
import Styles from '../styles/Product.module.css';
const Product =(props,index)=>{
    return (<div className={Styles.container}> 
        <img src={props.image} className={Styles.img}></img>
        <h2>Title : {props.title}</h2>
        <h3>Writer : {props.writer}</h3>
        <h3>Price : {props.price}</h3>
        <Button href='/Buypage' variant="contained" size='large' color='primary' >Buy</Button>
        
    </div>)
}
export default Product;