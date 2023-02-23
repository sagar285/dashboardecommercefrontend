import React,{useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

 const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)
    const Navigate =  useNavigate();

    // useEffect(()=>{
    //     const check = JSON.parse(localStorage.getItem("user"))
    //     if(check){
    //         Navigate("/")
    //     }
    // })
   
const datasave =async()=>{

    if(!email && !password){
        seterror(true)
        return false
    }

const result =await axios.post("https://dashboardecommerce-backend.onrender.com/login",{
   email:email,password:password
})
console.log(result.data);
localStorage.setItem("user",JSON.stringify(result.data))
Navigate("/")
}


  return (
    <div>
      <div className="flex flex-col ml-[29rem] mt-[1rem]">
    
        <input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] h-[2rem] mt-1 p-2"
        />
           {error && !email&& <span className='text-red-900 font-extrabold'>Enter  email</span>}
        <input
          type="text"
          placeholder="enter password"
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
          className="border-solid border-4 font-semibold border-blue-800 w-[14rem] mt-1 h-[2rem] p-2"
        />
           {error && !password&& <span className='text-red-900 font-extrabold'>Enter  password</span>}
        <button className="bg-black rounded-md text-white font-bold w-[6rem] mt-[1rem] ml-4"
          onClick={datasave}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login
