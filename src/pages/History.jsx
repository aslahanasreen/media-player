import React,{useState,useEffect} from 'react'
import { getHistory,delHistory } from '../services/allApis'


function History() {

  const [history,setHistory]=useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result= await getHistory()
    if(result.status==200){
      setHistory(result.data)
    }
    else{
      console.log(result);
      
    }
  }

  const handleDelete=async(id)=>{
    const res=await delHistory(id)
    if(res.status==200){
      getData()
    }
  }

  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        {
          history.length>0?
          <table className='table'>
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th>URL</th>
            <th>Date & Time</th>
            <th></th>
          </thead>
          <tbody>
              {
                history.map((item)=>(
                  <tr>
                  <td>{item.videoId}</td>
                  <td>{item.title}</td>
                  <td>{item.url}</td>
                  <td>{item.datetime}</td>
                  <td><button className='btn' onClick={()=>{handleDelete(item.id)}}>
                    <i className="fa-solid fa-trash" style={{color: "#d00b1f",}} />
                  </button></td>  
                </tr>
                ))  
              }
          </tbody>
        </table>
         :
         <h1>No History available</h1>
        }
          
      </div>
    </>
  )
}

export default History