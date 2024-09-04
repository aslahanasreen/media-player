import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addvideos } from '../services/allApis';
import { toast } from 'react-toastify';


function Addvideo({response}) {
  const [show, setShow] = useState(false);
  const [video,setvideo]=useState({
    videoId:"",title:"",imgURL:"",videoURL:""
  })
  
  const handleupload=async()=>{
    console.log(video);
    const {videoId,title,imgURL,videoURL}=video
    if(!videoId || !title || !imgURL || !videoURL){
      // alert("please enter valid input")
      toast.warning("please enter valid input!!")
    }
    else{
      try{
        const vurl=videoURL.split("v=")[1]
      // console.log(vurl);
      
      const eurl=`https://www.youtube.com/embed/${vurl}?si=iniW16PROwkAX8dW&autoplay=1`
      // console.log(eurl);
      
      video.videoURL=eurl
      const res=await addvideos(video)
      console.log(res);
      
      if(res.status==201){
        // alert("uploaded successfully")
        toast.success("Upload successful!!")
        handleClose()
        response(res)
      }
      else{
        // alert('upload failed!!')
        toast.error("Upload failed")
      }
      
      }

      catch(err){
        console.log(err);
        
        // alert("upload failed!!")
        toast.error("Upload failed")
    }
    
    }
  }
  
  const handleClose = () => {
    setShow(false)
    setvideo({videoId:"",title:"",imgURL:"",videoURL:""})
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn' onClick={handleShow}>
        <i className="fa-solid fa-square-plus" style={{ color: "#FFD43B", }} />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
            <Form.Control type="number" placeholder="" onChange={(e)=>{setvideo({...video,videoId:e.target.value})}}/>
          </FloatingLabel>
          <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e)=>{setvideo({...video,title:e.target.value})}}/>
          </FloatingLabel>
          <FloatingLabel controlId="img" label="Video Image URL" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e)=>{setvideo({...video,imgURL:e.target.value})}}/>
          </FloatingLabel>
          <FloatingLabel controlId="vurl" label="Youtube Video URL" className="mb-3">
            <Form.Control type="text" placeholder="" onChange={(e)=>{setvideo({...video,videoURL:e.target.value})}}/>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Addvideo