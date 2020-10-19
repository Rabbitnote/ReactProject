import {useState,useEffect} from 'react';
import ListOfProduct from './ListOfProduct';
import axios from 'axios';
// const products =[
//     {title:'Minecraft',price:90,writer:'Name',image:'img/81BGaOfUtsL.jpg'},
//     {title:'Saphine',price:160,writer:'OK',image:'img/81BGaOfUtsL.jpg'},
//     {title:'Naurto',price:123,writer:'JIMMY',image:'img/81BGaOfUtsL.jpg'},
//     {title:'Soqp',price:1233,writer:'JOHNU',image:'img/81BGaOfUtsL.jpg'}
// ] 
const product = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const Data = async() =>{
            const res = await axios.get('http://localhost:5000/products');
            const result = res.data.slice(0,10);
            setProducts(result);
        }
        Data();
    },[]);
    return (<div>
        <ListOfProduct item={products}> </ListOfProduct>
        </div>)
};
export default product;
