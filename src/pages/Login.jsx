import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { checkLogin } from '../services/allApis'
import { toast } from 'react-toastify'

function Login() {

    const [user,setUser]=useState({
        email:"",password:""
    })

    const nav=useNavigate()

    const handleLogin=async()=>{
        console.log(user);
        const {email,password}=user
        if(!email || !password){
            toast.warning("Enter valid input!!")
        }
        else{
            const result = await checkLogin(email,password)

            if(result.status==200){
                if(result.data.length>0){
                    console.log(result.data[0]);
                    sessionStorage.setItem("userData",JSON.stringify(result.data[0]))
                    toast.success("Login Successful!!")
                    setUser({
                        email:"",password:"" 
                    })
                    nav('/home')
                }
                else{
                    toast.warning("invalid email or password")
                }
            }
            else{
                toast.error("Something went wrong")
            }
        }
    }

  return (
    <>
    
    <div className="d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
        <div className='w-75 border shadow p-5'>
            <h1 className='mb-3'>Login</h1>
            <input type="text" className="form-control mb-3" placeholder='Enter E-mail ID' onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
            <input type="password" name="" placeholder='Enter Password' id="" className="form-control mb-3" onChange={(e)=>{setUser({...user,password:e.target.value})}}/>
            <div className="d-flex justify-content-between">
                <button className='btn btn-success'n onClick={handleLogin}>Login</button>
                <Link to={'/reg'}>New User?</Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default Login