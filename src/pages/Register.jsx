import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { checkEmail , addUser} from '../services/allApis'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [user,setuser]=useState({
        username:"",email:"",password:""
    })

    const nav= useNavigate()

    const handleRegister=async()=>{
        console.log(user);
        const {username,email,password} = user
        
        if(!email || !password || !username){
            toast.warning("enter valid input!!")
        }
        else{
            const result= await checkEmail(email)
            console.log(result);
            
            if(result.data.length>0){
                toast.warning("Email already in use!!")
            }
            else{
                const res= await addUser(user)
                if(res.status==201){
                    toast.success("Registration successful!!")
                    setuser({
                        username:"" , email:"" , password:"" 
                    })
                    nav('/log')
                }
                else{
                    toast.error("Registration failed!!")
                    console.log(res);
                    
                }
            }
        }
    }

  return (
    <>
    
    <div className="d-flex justify-content-center align-items-center" style={{height:'80vh'}}>
        <div className='w-75 border shadow p-5'>
            <h1 className='mb-3'>Register</h1>
            <input type="text" className="form-control mb-3" placeholder='Enter E-mail ID' onChange={(e)=>{setuser({...user,email:e.target.value})}}/>
            <input type="text" className="form-control mb-3" placeholder='Enter Username' onChange={(e)=>{setuser({...user,username:e.target.value})}}/>
            <input type="password" name="" placeholder='Enter Password' id="" className="form-control mb-3" onChange={(e)=>{setuser({...user,password:e.target.value})}}/>
            <div className="d-flex justify-content-between">
                <button className='btn btn-success' onClick={handleRegister}>Register</button>
                <Link to={'/log'}>Already a User?</Link>
            </div>
        </div>
    </div>


    </>
  )
}

export default Register