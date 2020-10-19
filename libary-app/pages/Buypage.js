import Layout from '../components/Layout';
import {useState,useEffect} from 'react';
import axios from 'axios';
const Buypage = (props)=>{
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        const Data = async() =>{
            const res = await axios.get('http://localhost:5000/product/:id');
            setProduct(res);
        }
        Data();
    },[]);
return(<Layout>  

     </Layout>)
};
export default Buypage;