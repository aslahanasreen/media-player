import React,{useEffect,useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Videocard from './Videocard'
import { getvideos } from '../services/allApis'

function Video({add}) {

  const [videos,setvideos]=useState([])
  const [delResponse,setDelResponse]=useState("")

  useEffect(()=>{
    getdata()
  },[add,delResponse])

  const getdata=async ()=>{
    const res=await getvideos()
    console.log(res);

    if(res.status==200){
      setvideos(res.data)
    }
    else{
      console.log(res);
      
    }
    
  }

  return (
    <>
        <div className='border border-3 shadow p-5 mb-3 container-fluid'>
          {
            videos.length>0?
            <Row>
                {
                  videos.map(item => (
                    
                    <Col>
                      <Videocard video={item} response={setDelResponse}/>
                      
                    </Col>
                  ))
                }
            </Row>
            :
            <h1 className='text-center text-danger'>No videos available!!</h1>

          }
            
        </div>
    </>
  )
}

export default Video