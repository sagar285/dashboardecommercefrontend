import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom'

const Updateproduct = () => {
    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [company, setcompany] = useState("");
    const Navigate =  useNavigate();
    const params =useParams();
    console.log(params);

useEffect(()=>{
getproductdetail();

},[])
    const getproductdetail =async()=>{
        const result =await axios.get(`https://dashboardecommerce-backend.onrender.com/product/${params.id}`,{
        })
        console.log(result);
        setname(result.data.name)
        setprice(result.data.price)
        setcategory(result.data.category)
        setcompany(result.data.company);
    }

    const updateproduct =async()=>{
        const result = await axios.put(`https://dashboardecommerce-backend.onrender.com/product/${params.id}`,{
            name:name,price:price,category:category,company:company
        })
        Navigate("/");
    }

  return (
    <div>
  <div className="flex flex-col ml-[29rem] mt-[1rem] ">
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e)=>setname(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] mt-2 p-2"
        />
               {/* {error && !name&& <span className='text-red-900 font-extrabold'>Enter  name</span>} */}
        <input
          type="text"
          placeholder="enter price"
          value={price}
          onChange={(e)=>setprice(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] mt-2 p-2"
        />
               {/* {error && !price&& <span className='text-red-900 font-extrabold'>Enter  price</span>} */}
        <input
          type="text"
          placeholder="enter category"
          value={category}
          onChange={(e)=>setcategory(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] mt-2 p-2"
        />
               {/* {error && !category&& <span className='text-red-900 font-extrabold'>Enter  category</span>} */}
        <input
          type="text"
          placeholder="enter company"
          value={company}
          onChange={(e)=>setcompany(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] mt-2 p-2"
        />
               {/* {error && !company&& <span className='text-red-900 font-extrabold'>Enter  company</span>} */}
        <button className="bg-black rounded-md text-white font-bold w-[6rem] mt-[1rem] ml-4"
          onClick={updateproduct}>
          Update Product
        </button>
      </div>
    </div>
  )
}

export default Updateproduct