import React,{useEffect,useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Product = () => {
    const [product, setproduct] = useState([])

    const products =async()=>{
        const result =await axios.get("https://dashboardecommerce-backend.onrender.com/product")
        console.log(result.data);
        setproduct(result.data);
    }
    useEffect(()=>{

        products();

    },[])

    const deleteproduct =async(id)=>{
const result =await axios.delete(`https://dashboardecommerce-backend.onrender.com/product/${id}`)
console.log(result);
if(result){
    products();
}
    }
    
  return (
    <div className='text-center mt-[50px]'>
            <ul className='inline-block text-center pt-3 m-0 '>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>S.no</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>Name</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>Price</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>category</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>company</li>
            <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>operation</li>
        </ul>
        
        {
        product.map((item,index)=>(
            <div>
                <ul className='inline-block text-center  m-0' key={item._id}>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{index+1}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.name}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.price}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.category}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>{item.company}</li>
                <li className=' p-5 border-[2px] inline-block w-[150px]   border-solid border-blue-600'>
                    <button className='bg-red-800 font-bold rounded-md' onClick={()=>{deleteproduct(item._id)}}>Delete</button>
                    <Link  className='bg-green-800 font-bold rounded-md' to ={"/product/"+item._id}>Update</Link>
                </li>
                </ul>
                </div>
        ))
    }</div>
  )
}

export default Product