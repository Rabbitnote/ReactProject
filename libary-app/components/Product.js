const Product =(props)=>{
    return (<div> 
        <h2>Title : {props.title}</h2>
        <h3>Writer : {props.writer}</h3>
        <h3>Price : {props.price}</h3>
        {props.image}
    </div>)
}
export default Product;