import React from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

const Cart=()=>{
    const [status, setStatus]=React.useState("")
    const [products, setProducts]=React.useState({})
    const { loading, error, data } = products;
    const total = useSelector((state) => state.cart.products);
    const totalitems=total.length;
    React.useEffect(() => {
    axios({
        method: "get",
        url: "http://localhost:8080/cart"
    }).then(res => setProducts(prev => ({
        ...prev,
        loading: false,
        error: false,
        data: res.data
    }))).catch(err => setProducts(prev => ({
        ...prev,
        loading: false,
        error: true
    })))
}, []);

const handleDelete= (itemId)=>{
  
    axios.delete(`http://localhost:8080/cart/${itemId}`)
    .then(() => setStatus('Delete successful'));

}

console.log(data)
return(
    <>
    
    <div style={{width:"90%",margin:"auto",marginTop:"40px"}}>
        {data?.map((item)=>(
            <div>
                <img src={item.item.image} alt="" />
                <p>Title: {item.item.title}</p>
                <p>Price: {item.item.price} </p>
                <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </div>
          
        ))}
    </div>
    </>
)

}

export default Cart;



