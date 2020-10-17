import {useState} from 'react';
import ListOfProduct from './ListOfProduct';
const products =[
    {title:'Minecraft',price:90,writer:'Name',image:'../img/81BGaOfUtsL.jpg'},
    {title:'Saphine',price:160,writer:'OK',image:'../img/81BGaOfUtsL.jpg'},
    {title:'Naurto',price:123,writer:'JIMMY',image:'../img/81BGaOfUtsL.jpg'},
    {title:'Soqp',price:1233,writer:'JOHNU',image:'../img/81BGaOfUtsL.jpg'}
] 
const product = () => {
    // const [products,setProducts] = useState([]);
    return (<div>
        <ListOfProduct item={products}> </ListOfProduct>
        </div>)
};
export default product;
